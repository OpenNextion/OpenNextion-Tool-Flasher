# OpenNextion Flasher

OpenNextion 系列开发板在线固件烧录工具。页面可以部署到 GitHub Pages，用户在 Chrome 或 Edge 中打开页面后，通过 Web Serial 选择串口并烧录 ESP32 系列固件。

## 已覆盖的需求

- 支持板型选择：`ONX2432G028`、`ONX3248G035`
- 支持固件来源：仓库云端固件、本地上传固件
- 云端固件支持分组、固件列表、功能描述和效果图说明
- 点击烧录后选择串口设备，显示连接日志和烧录进度
- 板型、分组、例程全部通过 `data/*.json` 维护

## 目录结构

```text
data/
  boards.json       # 板型信息
  groups.json       # 例程分组
  firmwares.json    # 例程固件条目
firmware/
  <board-id>/
    <firmware-id>/
      README.md
      bootloader.bin
      partitions.bin
      app.bin
```

## 维护方式

新增板型：编辑 `data/boards.json`。

板型默认烧录参数也维护在 `data/boards.json` 的 `flashDefaults` 中，包括 `baudRate`、`flashMode`、`flashFreq`、`flashSize`、`resetMode` 和 `disconnectDelay`。

新增分组：编辑 `data/groups.json`。

新增云端固件：把 bin 文件和 `README.md` 放到 `firmware/<board>/<example>/`，然后在 `data/firmwares.json` 添加条目。`files` 中的 `address` 需要和 ESP-IDF 构建输出的 flash 地址一致。

## 本地预览

由于页面会使用 `fetch()` 加载 JSON 和 Markdown，建议用本地 HTTP 服务预览：

```bash
python3 -m http.server 8080
```

然后打开 `http://localhost:8080`。

## 注意

- Web Serial 需要 HTTPS，GitHub Pages 满足这个条件。
- 推荐桌面版 Chrome 或 Edge。
- 当前仓库只放了示例说明和预览图，实际发布前需要替换为真实 `bootloader.bin`、`partitions.bin`、`app.bin`。
- `data/boards.json` 中的芯片、Flash、USB 描述请按最终硬件版本校准。
- 烧录库使用 `https://unpkg.com/esptool-js@0.6.0/bundle.js`。不要直接换成普通 ESM CDN 重打包入口，否则可能导致 ESP stub 的 base64 数据解析失败。0.6.0 的 `writeFlash()` 直接接收 `Uint8Array` 固件数据。
- 当前 OpenNextion 测试硬件在 Web Serial + CH340 下使用“反相 RTS 复位”可以烧录后自动运行，默认断开延迟为 0.8 秒。如果后续板型使用不同 USB-串口电路，可在页面的“完成后复位”和“断开延迟”里切换行为。
- 板型默认波特率配置为 921600。页面关闭了 esptool-js 的底层串口 tracing，避免高波特率烧录时把大量串口十六进制追踪日志累积到浏览器内存里。
- 页面每次写入完成后会释放固件临时缓存，并限制日志长度，降低多次连续烧录后的内存压力。若烧录中途失败，页面会保持串口连接，不在失败路径里主动关闭设备。
