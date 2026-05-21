const CONFIG_PATHS = {
  boards: "./data/boards.json",
  groups: "./data/groups.json",
  firmwares: "./data/firmwares.json",
};

const state = {
  source: "cloud",
  boards: [],
  groups: [],
  firmwares: [],
  selectedBoard: null,
  selectedGroup: null,
  selectedFirmware: null,
};

const MAX_LOG_CHARS = 120000;

const els = {
  browserStatus: document.querySelector("#browserStatus"),
  boardSelect: document.querySelector("#boardSelect"),
  boardInfo: document.querySelector("#boardInfo"),
  cloudSourceBtn: document.querySelector("#cloudSourceBtn"),
  localSourceBtn: document.querySelector("#localSourceBtn"),
  cloudPane: document.querySelector("#cloudPane"),
  localPane: document.querySelector("#localPane"),
  groupSelect: document.querySelector("#groupSelect"),
  firmwareSelect: document.querySelector("#firmwareSelect"),
  firmwareMeta: document.querySelector("#firmwareMeta"),
  markdownPreview: document.querySelector("#markdownPreview"),
  previewTitle: document.querySelector("#previewTitle"),
  localFiles: document.querySelector("#localFiles"),
  addLocalFileBtn: document.querySelector("#addLocalFileBtn"),
  localFileTemplate: document.querySelector("#localFileTemplate"),
  baudRate: document.querySelector("#baudRate"),
  flashMode: document.querySelector("#flashMode"),
  flashFreq: document.querySelector("#flashFreq"),
  flashSize: document.querySelector("#flashSize"),
  resetMode: document.querySelector("#resetMode"),
  disconnectDelay: document.querySelector("#disconnectDelay"),
  settingsSummary: document.querySelector("#settingsSummary"),
  customResetLabel: document.querySelector("#customResetLabel"),
  customResetSequence: document.querySelector("#customResetSequence"),
  eraseAll: document.querySelector("#eraseAll"),
  flashBtn: document.querySelector("#flashBtn"),
  progressBar: document.querySelector("#progressBar"),
  progressText: document.querySelector("#progressText"),
  logOutput: document.querySelector("#logOutput"),
};

init().catch((error) => {
  logLine(`初始化失败：${error.message}`, "error");
  els.markdownPreview.innerHTML = `<p>配置加载失败，请检查 data 目录下的 JSON 文件。</p>`;
});

async function init() {
  detectBrowser();
  bindEvents();
  addLocalFileRow("0x10000");
  const [boards, groups, firmwares] = await Promise.all([
    fetchJson(CONFIG_PATHS.boards),
    fetchJson(CONFIG_PATHS.groups),
    fetchJson(CONFIG_PATHS.firmwares),
  ]);
  state.boards = boards;
  state.groups = groups;
  state.firmwares = firmwares;
  renderBoards();
  syncSelections();
}

function detectBrowser() {
  if ("serial" in navigator) {
    els.browserStatus.textContent = "浏览器支持 Web Serial，可以在线烧录。";
    els.browserStatus.className = "browser-status ok";
    return;
  }
  els.browserStatus.textContent = "当前浏览器不支持 Web Serial，请使用桌面版 Chrome 或 Edge。";
  els.browserStatus.className = "browser-status warn";
  els.flashBtn.disabled = true;
}

function bindEvents() {
  els.boardSelect.addEventListener("change", syncSelections);
  els.groupSelect.addEventListener("change", () => {
    state.selectedGroup = els.groupSelect.value;
    renderFirmwares();
    selectFirstFirmware();
  });
  els.firmwareSelect.addEventListener("change", () => {
    state.selectedFirmware = firmwareById(els.firmwareSelect.value);
    renderFirmwareDetails();
  });
  els.cloudSourceBtn.addEventListener("click", () => setSource("cloud"));
  els.localSourceBtn.addEventListener("click", () => setSource("local"));
  els.addLocalFileBtn.addEventListener("click", () => addLocalFileRow("0x10000"));
  els.resetMode.addEventListener("change", () => {
    els.customResetLabel.classList.toggle("hidden", els.resetMode.value !== "custom");
    updateSettingsSummary();
  });
  [
    els.baudRate,
    els.flashMode,
    els.flashFreq,
    els.flashSize,
    els.disconnectDelay,
    els.eraseAll,
  ].forEach((element) => element.addEventListener("change", updateSettingsSummary));
  els.flashBtn.addEventListener("click", flashSelectedFirmware);
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${path} 加载失败 (${response.status})`);
  }
  return response.json();
}

function renderBoards() {
  els.boardSelect.innerHTML = state.boards
    .map((board) => `<option value="${escapeAttr(board.id)}">${escapeHtml(board.name)}</option>`)
    .join("");
}

function syncSelections() {
  state.selectedBoard = boardById(els.boardSelect.value) || state.boards[0];
  if (!state.selectedBoard) {
    return;
  }
  els.boardSelect.value = state.selectedBoard.id;
  applyBoardFlashDefaults();
  renderBoardInfo();
  renderGroups();
  selectFirstFirmware();
}

function renderBoardInfo() {
  const board = state.selectedBoard;
  const defaults = getBoardFlashDefaults();
  els.boardInfo.innerHTML = `
    <strong>${escapeHtml(board.name)}</strong><br>
    芯片：${escapeHtml(board.chip)}<br>
    默认 Flash：${escapeHtml(defaults.flashSize)} / ${escapeHtml(defaults.flashMode.toUpperCase())} / ${escapeHtml(defaults.flashFreq.toUpperCase())}<br>
    默认波特率：${escapeHtml(defaults.baudRate)}<br>
    USB 串口：${escapeHtml(board.usb || "按实际硬件配置")}<br>
    ${escapeHtml(board.description || "")}
  `;
}

function applyBoardFlashDefaults() {
  const defaults = getBoardFlashDefaults();
  els.baudRate.value = String(defaults.baudRate);
  els.flashMode.value = defaults.flashMode;
  els.flashFreq.value = defaults.flashFreq;
  els.flashSize.value = defaults.flashSize;
  els.resetMode.value = defaults.resetMode;
  els.disconnectDelay.value = String(defaults.disconnectDelay);
  els.customResetLabel.classList.toggle("hidden", defaults.resetMode !== "custom");
  updateSettingsSummary();
}

function getBoardFlashDefaults() {
  const board = state.selectedBoard || {};
  return {
    baudRate: board.flashDefaults?.baudRate || 921600,
    flashMode: board.flashDefaults?.flashMode || "qio",
    flashFreq: board.flashDefaults?.flashFreq || "80m",
    flashSize: board.flashDefaults?.flashSize || board.flashSize || "16MB",
    resetMode: board.flashDefaults?.resetMode || "inverted-rts",
    disconnectDelay: board.flashDefaults?.disconnectDelay ?? 800,
  };
}

function updateSettingsSummary() {
  const resetLabel = els.resetMode.selectedOptions[0]?.textContent || "";
  const delayLabel = els.disconnectDelay.selectedOptions[0]?.textContent || "";
  els.settingsSummary.textContent = `${els.baudRate.value} / ${els.flashMode.value.toUpperCase()} / ${els.flashFreq.value.toUpperCase()} / ${els.flashSize.value} / ${resetLabel} / ${delayLabel}`;
}

function renderGroups() {
  const boardId = state.selectedBoard.id;
  const groupIds = new Set(
    state.firmwares
      .filter((firmware) => firmware.boardIds.includes(boardId))
      .map((firmware) => firmware.groupId),
  );
  const groups = state.groups.filter((group) => groupIds.has(group.id));
  els.groupSelect.innerHTML = groups
    .map((group) => `<option value="${escapeAttr(group.id)}">${escapeHtml(group.name)}</option>`)
    .join("");
  state.selectedGroup = groups[0]?.id || null;
  if (state.selectedGroup) {
    els.groupSelect.value = state.selectedGroup;
  }
  renderFirmwares();
}

function renderFirmwares() {
  const firmwares = currentFirmwares();
  els.firmwareSelect.innerHTML = firmwares
    .map((firmware) => `<option value="${escapeAttr(firmware.id)}">${escapeHtml(firmware.name)}</option>`)
    .join("");
}

function selectFirstFirmware() {
  const firmware = currentFirmwares()[0] || null;
  state.selectedFirmware = firmware;
  els.firmwareSelect.value = firmware?.id || "";
  renderFirmwareDetails();
}

async function renderFirmwareDetails() {
  const firmware = state.selectedFirmware;
  if (!firmware) {
    els.previewTitle.textContent = "暂无固件";
    els.firmwareMeta.innerHTML = "当前板型还没有配置云端固件。";
    els.markdownPreview.innerHTML = "<p>请在 data/firmwares.json 中添加固件条目。</p>";
    return;
  }

  els.previewTitle.textContent = firmware.name;
  els.firmwareMeta.innerHTML = `
    <strong>${escapeHtml(firmware.name)}</strong><br>
    版本：${escapeHtml(firmware.version || "未标注")}<br>
    文件数：${firmware.files.length}<br>
    ${escapeHtml(firmware.summary || "")}
  `;

  if (!firmware.markdown) {
    els.markdownPreview.innerHTML = `<p>${escapeHtml(firmware.description || "该固件暂未配置说明文档。")}</p>`;
    return;
  }

  try {
    const response = await fetch(firmware.markdown);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const markdown = await response.text();
    els.markdownPreview.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    els.markdownPreview.innerHTML = `<p>说明文档加载失败：${escapeHtml(error.message)}</p>`;
  }
}

function setSource(source) {
  state.source = source;
  els.cloudSourceBtn.classList.toggle("active", source === "cloud");
  els.localSourceBtn.classList.toggle("active", source === "local");
  els.cloudPane.classList.toggle("hidden", source !== "cloud");
  els.localPane.classList.toggle("hidden", source !== "local");
}

function addLocalFileRow(address) {
  const fragment = els.localFileTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".local-file-row");
  row.querySelector('input[type="text"]').value = address;
  row.querySelector("button").addEventListener("click", () => row.remove());
  els.localFiles.appendChild(fragment);
}

async function flashSelectedFirmware() {
  try {
    resetProgress();
    clearLog();
    const files = state.source === "cloud" ? await collectCloudFiles() : await collectLocalFiles();
    if (!files.length) {
      throw new Error("请先选择或上传至少一个 bin 文件。");
    }
    await flashFiles(files);
  } catch (error) {
    setProgress(0, `失败：${error.message}`);
    logLine(`错误：${error.message}`, "error");
  }
}

async function collectCloudFiles() {
  const firmware = state.selectedFirmware;
  if (!firmware) {
    return [];
  }
  const loaded = [];
  for (const file of firmware.files) {
    logLine(`下载 ${file.path}`);
    const response = await fetch(file.path);
    if (!response.ok) {
      throw new Error(`${file.path} 下载失败 (${response.status})`);
    }
    loaded.push({
      address: parseAddress(file.address),
      data: new Uint8Array(await response.arrayBuffer()),
      name: file.path.split("/").pop(),
    });
  }
  return loaded;
}

async function collectLocalFiles() {
  const rows = [...els.localFiles.querySelectorAll(".local-file-row")];
  const files = [];
  for (const row of rows) {
    const fileInput = row.querySelector('input[type="file"]');
    const addressInput = row.querySelector('input[type="text"]');
    const file = fileInput.files[0];
    if (!file) {
      continue;
    }
    files.push({
      address: parseAddress(addressInput.value),
      data: new Uint8Array(await file.arrayBuffer()),
      name: file.name,
    });
  }
  return files;
}

async function flashFiles(files) {
  if (!("serial" in navigator)) {
    throw new Error("当前浏览器不支持 Web Serial。");
  }

  els.flashBtn.disabled = true;
  els.flashBtn.textContent = "烧录中...";
  setProgress(2, "等待选择串口设备");
  logLine("请选择 OpenNextion 开发板对应的串口设备。");

  const { ESPLoader, Transport } = await import("https://unpkg.com/esptool-js@0.6.0/bundle.js");
  const port = await navigator.serial.requestPort();
  const transport = new Transport(port, false);
  const terminal = {
    clean: clearLog,
    writeLine: (data) => logLine(data),
    write: (data) => log(data),
  };
  const loader = new ESPLoader({
    transport,
    baudrate: Number(els.baudRate.value),
    terminal,
    debugLogging: false,
  });

  let flashSucceeded = false;
  try {
    setProgress(5, "连接芯片");
    const chipName = await loader.main();
    logLine(`已连接：${chipName}`);
    validateSelectedChip(chipName);

    const totalBytes = files.reduce((total, item) => total + item.data.byteLength, 0);
    const writtenByFile = new Map();
    const keepImageFlashParams = shouldKeepImageFlashParams(files);
    const flashFileArray = files.map((file) => ({
      data: file.data,
      address: file.address,
    }));
    const flashOptions = {
      fileArray: flashFileArray,
      flashMode: keepImageFlashParams ? "keep" : els.flashMode.value,
      flashFreq: keepImageFlashParams ? "keep" : els.flashFreq.value,
      flashSize: keepImageFlashParams ? "keep" : els.flashSize.value,
      eraseAll: els.eraseAll.checked,
      compress: true,
      reportProgress: (fileIndex, written, total) => {
        writtenByFile.set(fileIndex, Math.min(written, total));
        const writtenBytes = [...writtenByFile.values()].reduce((sum, value) => sum + value, 0);
        const percent = totalBytes ? 10 + (writtenBytes / totalBytes) * 86 : 10;
        setProgress(percent, `烧录中：${Math.round(percent)}%`);
      },
    };

    logLine("开始写入 Flash：");
    files.forEach((file) => logLine(`- ${file.name} -> 0x${file.address.toString(16)}`));
    if (keepImageFlashParams) {
      logLine("检测到 0x0 单文件固件，保留固件镜像自带 Flash 参数。");
    }
    try {
      await loader.writeFlash(flashOptions);
    } finally {
      releaseFlashBuffers(flashOptions, files);
    }
    setProgress(98, "复位开发板");
    const resetResult = await resetAfterFlash(loader, transport);
    setProgress(100, "烧录完成");
    logLine(resetResult.message);
    flashSucceeded = true;
  } finally {
    if (!flashSucceeded) {
      logLine("烧录未完成，已保持串口连接以避免中断后的关闭崩溃。请重新插拔设备或刷新页面后重试。");
      els.flashBtn.disabled = true;
      els.flashBtn.textContent = "烧录失败，请刷新页面后重试";
    } else {
      const keptConnected = await disconnectAfterReset(transport);
      if (keptConnected) {
        els.flashBtn.disabled = true;
        els.flashBtn.textContent = "串口保持连接，刷新页面后再次烧录";
      } else {
        els.flashBtn.disabled = false;
        els.flashBtn.textContent = "选择串口并开始烧录";
      }
    }
  }
}

function shouldKeepImageFlashParams(files) {
  return files.length === 1 && files[0].address === 0;
}

async function resetAfterFlash(loader, transport) {
  const mode = els.resetMode.value;
  if (mode === "none") {
    logLine("已按设置跳过复位。");
    return { message: "烧录完成，已按设置保持当前连接状态。" };
  }
  if (mode === "soft") {
    await loader.after("soft_reset");
    return { message: "烧录完成，已发送软件复位命令。" };
  }
  if (mode === "classic-run") {
    await runResetSequence(transport, "D0|R1|W100|R0|W500|D0|R0");
    return { message: "烧录完成，已执行 Classic 运行复位。" };
  }
  if (mode === "inverted-rts") {
    await runResetSequence(transport, "D0|R0|W120|R1|W500|R0|D0");
    return { message: "烧录完成，已执行反相 RTS 复位。" };
  }
  if (mode === "custom") {
    await runResetSequence(transport, els.customResetSequence.value.trim());
    return { message: "烧录完成，已执行自定义复位时序。" };
  }

  logLine("执行 esptool.py 风格 RTS 硬复位。");
  await runResetSequence(transport, "D0|R1|W100|R0|W500|D0|R0");
  return { message: "烧录完成，已通过 RTS 复位开发板。" };
}

async function runResetSequence(transport, sequence) {
  if (!/^[DRW0-9|]+$/.test(sequence)) {
    throw new Error("自定义复位时序只能包含 D、R、W、数字和 |。");
  }
  const steps = sequence.split("|").filter(Boolean);
  for (const step of steps) {
    const command = step[0];
    const value = step.slice(1);
    if (command === "D") {
      logLine(`set DTR = ${value}`);
      await transport.setDTR(value === "1");
    } else if (command === "R") {
      logLine(`set RTS = ${value}`);
      await transport.setRTS(value === "1");
    } else if (command === "W") {
      if (!Number.isFinite(Number(value)) || Number(value) < 0) {
        throw new Error(`无效等待时间：${step}`);
      }
      logLine(`wait ${value}ms`);
      await sleep(Number(value));
    } else {
      throw new Error(`无效复位命令：${step}`);
    }
  }
}

async function disconnectAfterReset(transport) {
  const delay = Number(els.disconnectDelay.value);
  if (delay < 0) {
    logLine("按设置保持串口连接，避免 Chrome/Web Serial 在关闭 CH340 串口时闪退。");
    return true;
  }
  logLine(`等待 ${delay}ms 后断开串口。`);
  await sleep(delay);
  await transport.disconnect().catch((error) => {
    logLine(`串口断开时出现非致命错误：${error.message}`);
  });
  return false;
}

function releaseFlashBuffers(flashOptions, files) {
  flashOptions.fileArray.forEach((file) => {
    file.data = "";
  });
  flashOptions.fileArray.length = 0;
  files.forEach((file) => {
    file.data = new Uint8Array(0);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function validateSelectedChip(chipName) {
  const expected = state.selectedBoard?.chip?.toLowerCase();
  if (!expected) {
    return;
  }
  const normalizedChip = chipName.toLowerCase().replace(/[-_ ]/g, "");
  const normalizedExpected = expected.replace(/[-_ ]/g, "");
  if (!normalizedChip.includes(normalizedExpected)) {
    logLine(`提示：当前板型配置为 ${state.selectedBoard.chip}，实际连接到 ${chipName}。`);
  }
}

function currentFirmwares() {
  if (!state.selectedBoard || !state.selectedGroup) {
    return [];
  }
  return state.firmwares.filter(
    (firmware) =>
      firmware.boardIds.includes(state.selectedBoard.id) &&
      firmware.groupId === state.selectedGroup,
  );
}

function boardById(id) {
  return state.boards.find((board) => board.id === id);
}

function firmwareById(id) {
  return state.firmwares.find((firmware) => firmware.id === id);
}

function parseAddress(value) {
  const text = String(value).trim().toLowerCase();
  const parsed = text.startsWith("0x") ? Number.parseInt(text, 16) : Number.parseInt(text, 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`无效烧录地址：${value}`);
  }
  return parsed;
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };

  for (const line of lines) {
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      html += `<h3>${inlineMarkdown(line.slice(4))}</h3>`;
    } else if (line.startsWith("## ")) {
      closeList();
      html += `<h2>${inlineMarkdown(line.slice(3))}</h2>`;
    } else if (line.startsWith("# ")) {
      closeList();
      html += `<h1>${inlineMarkdown(line.slice(2))}</h1>`;
    } else if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineMarkdown(line.slice(2))}</li>`;
    } else {
      closeList();
      html += `<p>${inlineMarkdown(line)}</p>`;
    }
  }
  closeList();
  return html;
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function resetProgress() {
  setProgress(0, "准备烧录");
}

function setProgress(percent, text) {
  const value = Math.max(0, Math.min(100, percent));
  els.progressBar.style.width = `${value}%`;
  els.progressText.textContent = text;
}

function clearLog() {
  els.logOutput.textContent = "";
}

function logLine(message) {
  log(`${message}\n`);
}

function log(message) {
  els.logOutput.textContent += message;
  if (els.logOutput.textContent.length > MAX_LOG_CHARS) {
    els.logOutput.textContent = els.logOutput.textContent.slice(-MAX_LOG_CHARS);
  }
  els.logOutput.scrollTop = els.logOutput.scrollHeight;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
