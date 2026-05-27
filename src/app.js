const CONFIG_PATHS = {
  boards: "./data/boards.json",
  groups: "./data/groups.json",
  firmwares: "./data/firmwares.json",
};

const I18N = {
  zh: {
    pageTitle: "OpenNextion 在线固件烧录工具",
    pageDescription: "OpenNextion 系列开发板在线固件烧录工具，支持云端例程和本地固件。",
    appTitle: "在线固件烧录工具",
    fieldSeparator: "：",
    languageLabel: "语言",
    browserChecking: "正在检测浏览器能力...",
    browserOk: "浏览器支持 Web Serial，可以在线烧录。",
    browserWarn: "当前浏览器不支持 Web Serial，请使用桌面版 Chrome 或 Edge。",
    controlsPanel: "烧录配置",
    selectBoard: "选择板型",
    chip: "芯片",
    defaultFlash: "默认 Flash",
    defaultBaudRate: "默认波特率",
    usbSerial: "USB 串口",
    usbFallback: "按实际硬件配置",
    selectSource: "选择固件来源",
    cloudFirmware: "云端固件",
    localFirmware: "本地固件",
    selectExample: "选择例程",
    exampleGroup: "例程分组",
    firmwareItem: "具体固件",
    uploadLocal: "上传本地固件",
    localHint: "支持单个合并固件，也支持 bootloader、partition、app 等多个 bin 文件分别指定地址。",
    addBinFile: "添加 bin 文件",
    flashSettings: "烧录参数",
    settingsDefault: "使用板型默认参数",
    baudRate: "波特率",
    flashMode: "Flash Mode",
    flashFreq: "Flash Freq",
    flashSize: "Flash Size",
    resetAfterFlash: "完成后复位",
    resetInvertedRts: "反相 RTS 复位",
    resetEsptool: "RTS 硬复位",
    resetClassic: "Classic 运行复位",
    resetSoft: "软件复位",
    resetCustom: "自定义时序",
    resetNone: "不复位",
    disconnectDelay: "断开延迟",
    delay08: "0.8 秒",
    delayKeep: "保持连接",
    delay3: "3 秒",
    delay8: "8 秒",
    customResetSequence: "自定义复位时序",
    eraseAll: "烧录前擦除整片 Flash",
    startFlash: "选择串口并开始烧录",
    flashing: "烧录中...",
    failedRefresh: "烧录失败，请刷新页面后重试",
    keepConnected: "串口保持连接，刷新页面后再次烧录",
    firmwareNotes: "固件说明",
    flashProgress: "烧录进度",
    waitingStart: "等待开始",
    flashAddress: "烧录地址",
    remove: "移除",
    configLoadFailed: "配置加载失败，请检查 data 目录下的 JSON 文件。",
    initFailed: "初始化失败",
    jsonLoadFailed: "加载失败",
    noFirmwareTitle: "暂无固件",
    noFirmwareMeta: "当前板型还没有配置云端固件。",
    noFirmwareHelp: "请在 data/firmwares.json 中添加固件条目。",
    version: "版本",
    unversioned: "未标注",
    fileCount: "文件数",
    docMissing: "该固件暂未配置说明文档。",
    docLoadFailed: "说明文档加载失败",
    chooseFileError: "请先选择或上传至少一个 bin 文件。",
    serialUnsupported: "当前浏览器不支持 Web Serial。",
    prepareFlash: "准备烧录",
    choosePortProgress: "等待选择串口设备",
    choosePortLog: "请选择 OpenNextion 开发板对应的串口设备。",
    connectChip: "连接芯片",
    connected: "已连接",
    downloading: "下载",
    downloadFailed: "下载失败",
    writeFlash: "开始写入 Flash：",
    flashingProgress: "烧录中",
    keepImageParams: "检测到 0x0 单文件固件，保留固件镜像自带 Flash 参数。",
    resetBoard: "复位开发板",
    flashDone: "烧录完成",
    error: "错误",
    failed: "失败",
    incompleteKeepPort:
      "烧录未完成，已保持串口连接以避免中断后的关闭崩溃。请重新插拔设备或刷新页面后重试。",
    skipReset: "已按设置跳过复位。",
    skipResetDone: "烧录完成，已按设置保持当前连接状态。",
    softResetDone: "烧录完成，已发送软件复位命令。",
    classicResetDone: "烧录完成，已执行 Classic 运行复位。",
    invertedResetDone: "烧录完成，已执行反相 RTS 复位。",
    customResetDone: "烧录完成，已执行自定义复位时序。",
    esptoolResetLog: "执行 esptool.py 风格 RTS 硬复位。",
    esptoolResetDone: "烧录完成，已通过 RTS 复位开发板。",
    customResetInvalid: "自定义复位时序只能包含 D、R、W、数字和 |。",
    invalidWait: "无效等待时间",
    invalidResetCommand: "无效复位命令",
    keepSerialLog: "按设置保持串口连接，避免 Chrome/Web Serial 在关闭 CH340 串口时闪退。",
    disconnectAfter: "等待 {delay}ms 后断开串口。",
    disconnectNonFatal: "串口断开时出现非致命错误",
    chipMismatch: "提示：当前板型配置为 {expected}，实际连接到 {actual}。",
    invalidAddress: "无效烧录地址",
  },
  en: {
    pageTitle: "OpenNextion Online Firmware Flasher",
    pageDescription:
      "Online firmware flasher for OpenNextion development boards, with cloud examples and local firmware uploads.",
    appTitle: "Online Firmware Flasher",
    fieldSeparator: ": ",
    languageLabel: "Language",
    browserChecking: "Checking browser capabilities...",
    browserOk: "Web Serial is available. You can flash firmware online.",
    browserWarn: "This browser does not support Web Serial. Please use desktop Chrome or Edge.",
    controlsPanel: "Flashing Configuration",
    selectBoard: "Select Board",
    chip: "Chip",
    defaultFlash: "Default Flash",
    defaultBaudRate: "Default Baud Rate",
    usbSerial: "USB Serial",
    usbFallback: "Depends on the actual hardware",
    selectSource: "Select Firmware Source",
    cloudFirmware: "Cloud Firmware",
    localFirmware: "Local Firmware",
    selectExample: "Select Example",
    exampleGroup: "Example Group",
    firmwareItem: "Firmware",
    uploadLocal: "Upload Local Firmware",
    localHint:
      "Supports a single merged firmware file, or separate bootloader, partition, app, and other bin files with individual flash addresses.",
    addBinFile: "Add bin file",
    flashSettings: "Flash Settings",
    settingsDefault: "Using board defaults",
    baudRate: "Baud Rate",
    flashMode: "Flash Mode",
    flashFreq: "Flash Freq",
    flashSize: "Flash Size",
    resetAfterFlash: "Reset After Flash",
    resetInvertedRts: "Inverted RTS reset",
    resetEsptool: "RTS hard reset",
    resetClassic: "Classic run reset",
    resetSoft: "Software reset",
    resetCustom: "Custom sequence",
    resetNone: "No reset",
    disconnectDelay: "Disconnect Delay",
    delay08: "0.8 s",
    delayKeep: "Keep connected",
    delay3: "3 s",
    delay8: "8 s",
    customResetSequence: "Custom reset sequence",
    eraseAll: "Erase entire flash before writing",
    startFlash: "Select serial port and flash",
    flashing: "Flashing...",
    failedRefresh: "Flash failed. Refresh the page and retry",
    keepConnected: "Serial kept connected. Refresh before flashing again",
    firmwareNotes: "Firmware Notes",
    flashProgress: "Flash Progress",
    waitingStart: "Waiting to start",
    flashAddress: "Flash address",
    remove: "Remove",
    configLoadFailed: "Configuration failed to load. Please check JSON files in the data directory.",
    initFailed: "Initialization failed",
    jsonLoadFailed: "failed to load",
    noFirmwareTitle: "No firmware",
    noFirmwareMeta: "No cloud firmware is configured for the selected board.",
    noFirmwareHelp: "Add firmware entries in data/firmwares.json.",
    version: "Version",
    unversioned: "Not specified",
    fileCount: "Files",
    docMissing: "No documentation is configured for this firmware yet.",
    docLoadFailed: "Documentation failed to load",
    chooseFileError: "Select or upload at least one bin file first.",
    serialUnsupported: "This browser does not support Web Serial.",
    prepareFlash: "Preparing",
    choosePortProgress: "Waiting for serial port selection",
    choosePortLog: "Select the serial port for your OpenNextion development board.",
    connectChip: "Connecting chip",
    connected: "Connected",
    downloading: "Downloading",
    downloadFailed: "download failed",
    writeFlash: "Writing Flash:",
    flashingProgress: "Flashing",
    keepImageParams:
      "Detected a single firmware image at 0x0. Keeping flash parameters from the image.",
    resetBoard: "Resetting board",
    flashDone: "Flash complete",
    error: "Error",
    failed: "Failed",
    incompleteKeepPort:
      "Flashing did not complete. The serial port is kept open to avoid a close-after-failure crash. Replug the device or refresh the page before retrying.",
    skipReset: "Reset skipped by setting.",
    skipResetDone: "Flash complete. The current connection state was kept by setting.",
    softResetDone: "Flash complete. Software reset command sent.",
    classicResetDone: "Flash complete. Classic run reset completed.",
    invertedResetDone: "Flash complete. Inverted RTS reset completed.",
    customResetDone: "Flash complete. Custom reset sequence completed.",
    esptoolResetLog: "Running esptool.py-style RTS hard reset.",
    esptoolResetDone: "Flash complete. Board reset through RTS.",
    customResetInvalid: "Custom reset sequence can only contain D, R, W, digits, and |.",
    invalidWait: "Invalid wait time",
    invalidResetCommand: "Invalid reset command",
    keepSerialLog: "Keeping serial connected by setting to avoid Chrome/Web Serial CH340 close crashes.",
    disconnectAfter: "Disconnecting serial after {delay}ms.",
    disconnectNonFatal: "Non-fatal error while disconnecting serial",
    chipMismatch: "Note: selected board expects {expected}, but connected chip is {actual}.",
    invalidAddress: "Invalid flash address",
  },
};

const state = {
  language: detectInitialLanguage(),
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
  languageSelect: document.querySelector("#languageSelect"),
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
  logLine(`${t("initFailed")}：${error.message}`, "error");
  els.markdownPreview.innerHTML = `<p>${escapeHtml(t("configLoadFailed"))}</p>`;
});

async function init() {
  applyLanguage();
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
    els.browserStatus.textContent = t("browserOk");
    els.browserStatus.className = "browser-status ok";
    return;
  }
  els.browserStatus.textContent = t("browserWarn");
  els.browserStatus.className = "browser-status warn";
  els.flashBtn.disabled = true;
}

function bindEvents() {
  els.languageSelect.addEventListener("change", () => {
    state.language = els.languageSelect.value;
    applyLanguage();
    detectBrowser();
    renderBoards();
    if (state.selectedBoard) {
      els.boardSelect.value = state.selectedBoard.id;
      renderBoardInfo();
      renderGroups({ preserveGroup: true, preserveFirmware: true });
      updateSettingsSummary();
    }
  });
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

function detectInitialLanguage() {
  const browserLanguage = navigator.language || navigator.userLanguage || "";
  return browserLanguage.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function applyLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = t("pageTitle");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t("pageDescription"));
  els.languageSelect.value = state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  els.localFiles?.querySelectorAll('.local-file-row input[type="text"]').forEach((element) => {
    element.setAttribute("aria-label", t("flashAddress"));
  });
  els.localFiles?.querySelectorAll(".local-file-row button").forEach((element) => {
    element.setAttribute("aria-label", t("remove"));
  });
  updateSettingsSummary();
}

function t(key, params = {}) {
  const template = I18N[state.language]?.[key] || I18N.zh[key] || key;
  return Object.entries(params).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template,
  );
}

function localized(value) {
  if (!value || typeof value === "string") {
    return value || "";
  }
  return value[state.language] || value.en || value.zh || "";
}

function markdownPathFor(firmware) {
  if (!firmware.markdown) {
    return "";
  }
  if (typeof firmware.markdown === "string") {
    return firmware.markdown;
  }
  return firmware.markdown[state.language] || firmware.markdown.en || firmware.markdown.zh || "";
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${path} ${t("jsonLoadFailed")} (${response.status})`);
  }
  return response.json();
}

function renderBoards() {
  els.boardSelect.innerHTML = state.boards
    .map((board) => `<option value="${escapeAttr(board.id)}">${escapeHtml(localized(board.name))}</option>`)
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
    <strong>${escapeHtml(localized(board.name))}</strong><br>
    ${escapeHtml(t("chip"))}${escapeHtml(t("fieldSeparator"))}${escapeHtml(board.chip)}<br>
    ${escapeHtml(t("defaultFlash"))}${escapeHtml(t("fieldSeparator"))}${escapeHtml(defaults.flashSize)} / ${escapeHtml(defaults.flashMode.toUpperCase())} / ${escapeHtml(defaults.flashFreq.toUpperCase())}<br>
    ${escapeHtml(t("defaultBaudRate"))}${escapeHtml(t("fieldSeparator"))}${escapeHtml(defaults.baudRate)}<br>
    ${escapeHtml(t("usbSerial"))}${escapeHtml(t("fieldSeparator"))}${escapeHtml(board.usb || t("usbFallback"))}<br>
    ${escapeHtml(localized(board.description) || "")}
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

function renderGroups(options = {}) {
  const boardId = state.selectedBoard.id;
  const groupIds = new Set(
    state.firmwares
      .filter((firmware) => firmware.boardIds.includes(boardId))
      .map((firmware) => firmware.groupId),
  );
  const groups = state.groups.filter((group) => groupIds.has(group.id));
  els.groupSelect.innerHTML = groups
    .map((group) => `<option value="${escapeAttr(group.id)}">${escapeHtml(localized(group.name))}</option>`)
    .join("");
  const groupStillAvailable = groups.some((group) => group.id === state.selectedGroup);
  state.selectedGroup = options.preserveGroup && groupStillAvailable ? state.selectedGroup : groups[0]?.id || null;
  if (state.selectedGroup) {
    els.groupSelect.value = state.selectedGroup;
  }
  renderFirmwares();
  if (options.preserveFirmware) {
    const firmwareStillAvailable = currentFirmwares().some(
      (firmware) => firmware.id === state.selectedFirmware?.id,
    );
    if (firmwareStillAvailable) {
      els.firmwareSelect.value = state.selectedFirmware.id;
      renderFirmwareDetails();
      return;
    }
  }
  if (options.preserveGroup || options.preserveFirmware) {
    selectFirstFirmware();
  }
}

function renderFirmwares() {
  const firmwares = currentFirmwares();
  els.firmwareSelect.innerHTML = firmwares
    .map((firmware) => `<option value="${escapeAttr(firmware.id)}">${escapeHtml(localized(firmware.name))}</option>`)
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
    els.previewTitle.textContent = t("noFirmwareTitle");
    els.firmwareMeta.innerHTML = t("noFirmwareMeta");
    els.markdownPreview.innerHTML = `<p>${escapeHtml(t("noFirmwareHelp"))}</p>`;
    return;
  }

  els.previewTitle.textContent = localized(firmware.name);
  els.firmwareMeta.innerHTML = `
    <strong>${escapeHtml(localized(firmware.name))}</strong><br>
    ${escapeHtml(t("version"))}${escapeHtml(t("fieldSeparator"))}${escapeHtml(firmware.version || t("unversioned"))}<br>
    ${escapeHtml(t("fileCount"))}${escapeHtml(t("fieldSeparator"))}${firmware.files.length}<br>
    ${escapeHtml(localized(firmware.summary) || "")}
  `;

  const markdownPath = markdownPathFor(firmware);
  if (!markdownPath) {
    els.markdownPreview.innerHTML = `<p>${escapeHtml(localized(firmware.description) || t("docMissing"))}</p>`;
    return;
  }

  try {
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const markdown = await response.text();
    els.markdownPreview.innerHTML = renderMarkdown(markdown, markdownPath);
  } catch (error) {
    els.markdownPreview.innerHTML = `<p>${escapeHtml(t("docLoadFailed"))}：${escapeHtml(error.message)}</p>`;
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
  row.querySelector('input[type="text"]').setAttribute("aria-label", t("flashAddress"));
  row.querySelector("button").setAttribute("aria-label", t("remove"));
  row.querySelector("button").addEventListener("click", () => row.remove());
  els.localFiles.appendChild(fragment);
}

async function flashSelectedFirmware() {
  try {
    resetProgress();
    clearLog();
    const files = state.source === "cloud" ? await collectCloudFiles() : await collectLocalFiles();
    if (!files.length) {
      throw new Error(t("chooseFileError"));
    }
    await flashFiles(files);
  } catch (error) {
    setProgress(0, `${t("failed")}：${error.message}`);
    logLine(`${t("error")}：${error.message}`, "error");
  }
}

async function collectCloudFiles() {
  const firmware = state.selectedFirmware;
  if (!firmware) {
    return [];
  }
  const loaded = [];
  for (const file of firmware.files) {
    logLine(`${t("downloading")} ${file.path}`);
    const response = await fetch(file.path);
    if (!response.ok) {
      throw new Error(`${file.path} ${t("downloadFailed")} (${response.status})`);
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
    throw new Error(t("serialUnsupported"));
  }

  els.flashBtn.disabled = true;
  els.flashBtn.textContent = t("flashing");
  setProgress(2, t("choosePortProgress"));
  logLine(t("choosePortLog"));

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
    setProgress(5, t("connectChip"));
    const chipName = await loader.main();
    logLine(`${t("connected")}：${chipName}`);
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
        setProgress(percent, `${t("flashingProgress")}：${Math.round(percent)}%`);
      },
    };

    logLine(t("writeFlash"));
    files.forEach((file) => logLine(`- ${file.name} -> 0x${file.address.toString(16)}`));
    if (keepImageFlashParams) {
      logLine(t("keepImageParams"));
    }
    try {
      await loader.writeFlash(flashOptions);
    } finally {
      releaseFlashBuffers(flashOptions, files);
    }
    setProgress(98, t("resetBoard"));
    const resetResult = await resetAfterFlash(loader, transport);
    setProgress(100, t("flashDone"));
    logLine(resetResult.message);
    flashSucceeded = true;
  } finally {
    if (!flashSucceeded) {
      logLine(t("incompleteKeepPort"));
      els.flashBtn.disabled = true;
      els.flashBtn.textContent = t("failedRefresh");
    } else {
      const keptConnected = await disconnectAfterReset(transport);
      if (keptConnected) {
        els.flashBtn.disabled = true;
        els.flashBtn.textContent = t("keepConnected");
      } else {
        els.flashBtn.disabled = false;
        els.flashBtn.textContent = t("startFlash");
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
    logLine(t("skipReset"));
    return { message: t("skipResetDone") };
  }
  if (mode === "soft") {
    await loader.after("soft_reset");
    return { message: t("softResetDone") };
  }
  if (mode === "classic-run") {
    await runResetSequence(transport, "D0|R1|W100|R0|W500|D0|R0");
    return { message: t("classicResetDone") };
  }
  if (mode === "inverted-rts") {
    await runResetSequence(transport, "D0|R0|W120|R1|W500|R0|D0");
    return { message: t("invertedResetDone") };
  }
  if (mode === "custom") {
    await runResetSequence(transport, els.customResetSequence.value.trim());
    return { message: t("customResetDone") };
  }

  logLine(t("esptoolResetLog"));
  await runResetSequence(transport, "D0|R1|W100|R0|W500|D0|R0");
  return { message: t("esptoolResetDone") };
}

async function runResetSequence(transport, sequence) {
  if (!/^[DRW0-9|]+$/.test(sequence)) {
    throw new Error(t("customResetInvalid"));
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
        throw new Error(`${t("invalidWait")}：${step}`);
      }
      logLine(`wait ${value}ms`);
      await sleep(Number(value));
    } else {
      throw new Error(`${t("invalidResetCommand")}：${step}`);
    }
  }
}

async function disconnectAfterReset(transport) {
  const delay = Number(els.disconnectDelay.value);
  if (delay < 0) {
    logLine(t("keepSerialLog"));
    return true;
  }
  logLine(t("disconnectAfter", { delay }));
  await sleep(delay);
  await transport.disconnect().catch((error) => {
    logLine(`${t("disconnectNonFatal")}：${error.message}`);
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
    logLine(t("chipMismatch", { expected: state.selectedBoard.chip, actual: chipName }));
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
    throw new Error(`${t("invalidAddress")}：${value}`);
  }
  return parsed;
}

function renderMarkdown(markdown, markdownPath) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let listType = null;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (isTableLine(line)) {
      closeList();
      const tableLines = [];
      while (index < lines.length && isTableLine(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      html += renderTable(tableLines, markdownPath);
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      html += `<h3>${inlineMarkdown(line.slice(4), markdownPath)}</h3>`;
    } else if (line.startsWith("## ")) {
      closeList();
      html += `<h2>${inlineMarkdown(line.slice(3), markdownPath)}</h2>`;
    } else if (line.startsWith("# ")) {
      closeList();
      html += `<h1>${inlineMarkdown(line.slice(2), markdownPath)}</h1>`;
    } else if (line.startsWith("- ")) {
      if (listType !== "ul") {
        closeList();
        html += "<ul>";
        listType = "ul";
      }
      html += `<li>${inlineMarkdown(line.slice(2), markdownPath)}</li>`;
    } else if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ol") {
        closeList();
        html += "<ol>";
        listType = "ol";
      }
      html += `<li>${inlineMarkdown(line.replace(/^\d+\.\s+/, ""), markdownPath)}</li>`;
    } else {
      closeList();
      html += `<p>${inlineMarkdown(line, markdownPath)}</p>`;
    }
  }
  closeList();
  return html;
}

function inlineMarkdown(text, markdownPath) {
  return escapeHtml(text)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => {
      const resolvedUrl = resolveMarkdownUrl(url, markdownPath);
      return `<img alt="${escapeAttr(alt)}" src="${escapeAttr(resolvedUrl)}">`;
    })
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
      const resolvedUrl = resolveMarkdownUrl(url, markdownPath);
      return `<a href="${escapeAttr(resolvedUrl)}" target="_blank" rel="noreferrer">${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function isTableLine(line) {
  const text = line.trim();
  return text.startsWith("|") && text.endsWith("|");
}

function renderTable(lines, markdownPath) {
  const rows = lines
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => cell.trim()))
    .filter((cells) => !cells.every((cell) => /^:?-{3,}:?$/.test(cell)));
  if (!rows.length) {
    return "";
  }
  const [head, ...body] = rows;
  const headHtml = head.map((cell) => `<th>${inlineMarkdown(cell, markdownPath)}</th>`).join("");
  const bodyHtml = body
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell, markdownPath)}</td>`).join("")}</tr>`)
    .join("");
  return `<div class="table-scroll"><table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
}

function resolveMarkdownUrl(url, markdownPath) {
  const trimmed = url.trim();
  if (/^(https?:|mailto:|#|\/)/i.test(trimmed)) {
    return trimmed;
  }
  const base = markdownPath.slice(0, markdownPath.lastIndexOf("/") + 1);
  return new URL(trimmed, new URL(base, window.location.href)).toString();
}

function resetProgress() {
  setProgress(0, t("prepareFlash"));
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
