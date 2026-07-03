# esphome wake word voice assistents

## 概述

本固件为 `ONX3248G035` 适配的唤醒词语音助手固件，可将 OpenNextion 开发板作为支持本地唤醒词检测的 Home Assistant 语音助手终端使用。固件包含 Wi-Fi 配网、麦克风采集、扬声器播放和语音助手会话能力，适合桌面语音控制与智能家居入口场景。

## 固件信息

| 项目 | 内容 |
| :--- | :--- |
| 适用板型 | ONX3248G035 |
| 固件版本 | 未标注 |
| 芯片 | ESP32-S3 |
| Flash | 16MB |
| 烧录地址 | 0x0 |
| 上游项目 | esphome_wake-word-voice-assistants |

## 主要功能

- 支持本地唤醒词检测，唤醒后启动语音助手会话。
- 支持通过 Wi-Fi 接入 Home Assistant 语音助手链路。
- 支持麦克风采集和扬声器音频播放。
- 支持首次启动通过 Captive Portal 完成网络配置。

## 首次使用

1. 使用在线烧录工具选择 `ONX3248G035` 板型。
2. 在“应用例程”中选择 `Esphome wake word voice assistents` 并完成烧录。
3. 设备重启后，如尚未配置网络，请根据屏幕或 Portal 提示完成 Wi-Fi 配置。
4. 在 Home Assistant 中接入该设备，并按你的实际环境配置语音助手流水线与唤醒词模型。
5. 配置完成后，即可通过唤醒词触发语音交互。

## 注意事项

- 本固件为完整合并镜像，在线烧录工具会写入 `0x0` 并保留镜像自带 Flash 参数。
- 完整语音助手流程依赖可用的 Wi-Fi 网络和 Home Assistant 服务。
- 唤醒词、配网入口名称和语音助手配置细节可能随上游构建变化，请以实际固件行为为准。
- 网络和语音助手相关配置会保存在设备本地 Flash 中。

## 相关链接

- [esphome_wake-word-voice-assistants 源码](https://github.com/esphome/wake-word-voice-assistants)
- [ONX3248G035 产品资料](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)
