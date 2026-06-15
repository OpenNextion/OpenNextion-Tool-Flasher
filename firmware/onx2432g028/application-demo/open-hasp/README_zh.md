# openHASP 智能家居触控面板

## 概述

本固件为 `ONX2432G028` 适配的 openHASP 固件，可将 OpenNextion 2.8 英寸 ESP32-S3 触控屏作为 Home Assistant / MQTT 智能家居控制面板使用。

## 固件信息

| 项目 | 内容 |
| :--- | :--- |
| 适用板型 | ONX2432G028 |
| 固件版本 | v0.7.0.1_e6afb36 |
| 芯片 | ESP32-S3 |
| Flash | 16MB |
| 烧录地址 | 0x0 |

## 主要功能

- 通过屏幕显示和触摸交互控制智能家居设备。
- 支持 Wi-Fi 网络连接。
- 支持 MQTT 通信，可与 Home Assistant 的 openHASP 集成配合使用。
- 支持通过 openHASP 页面配置和下发自定义 UI。

## 首次使用

1. 烧录完成后等待设备重启。
2. 根据设备屏幕或 openHASP 默认流程完成 Wi-Fi 配置。
3. 在 openHASP Web 管理页面中配置 MQTT 服务器地址、用户名和密码。
4. 在 Home Assistant 中按 openHASP 集成文档添加设备并下发页面配置。

## 注意事项

- 本固件来自 `OpenNextion-Example-openHASP` 项目的 `onx2432g028` 构建产物。
- 固件为完整合并镜像，在线烧录工具会写入 `0x0` 并保留镜像自带 Flash 参数。
- openHASP 主要面向智能家居控制场景，不包含出厂测试固件中的摄像头、音频、SD 卡等综合测试界面。

## 相关链接

- [openHASP 文档](https://www.openhasp.com/)
- [OpenNextion-Example-openHASP 源码](https://github.com/OpenNextion/OpenNextion-Example-openHASP)
- [ONX2432G028 产品资料](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)
