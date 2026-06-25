# ESP32 Marauder

## 概述

本固件为 `ONX2432G028` 适配的 ESP32 Marauder 固件。ESP32 Marauder 是一套运行在 ESP32 平台上的 Wi-Fi / Bluetooth 安全测试工具集合，适合在授权测试、教学演示和实验室环境中使用。

## 固件信息

| 项目 | 内容 |
| :--- | :--- |
| 适用板型 | ONX2432G028 |
| 固件版本 | v1.12.2 |
| 芯片 | ESP32-S3 |
| Flash | 16MB |
| 烧录地址 | 0x0 |
| 来源分支 | add-ONX2432G028-support |

## 主要功能

- 提供 Wi-Fi / Bluetooth 安全测试相关功能入口。
- 适配 `ONX2432G028` 的 2.8 英寸触摸屏显示与触摸交互。
- 支持将测试结果或相关数据配合 SD 卡功能使用，具体能力以固件内菜单为准。

## 首次使用

1. 使用在线烧录工具选择 `ONX2432G028` 板型。
2. 在“应用例程”中选择 `ESP32 Marauder`。
3. 烧录完成并重启后，根据屏幕菜单进行操作。
4. 如需使用 SD 卡相关功能，请先准备兼容的 microSD 卡。

## 注意事项

- 本固件来自 `OpenNextion-Example-ESP32Marauder` 项目的 `add-ONX2432G028-support` 分支构建产物。
- 固件为完整合并镜像，在线烧录工具会写入 `0x0` 并保留镜像自带 Flash 参数。
- 仅在你拥有明确授权的设备、网络和实验环境中使用。请遵守当地法律法规和组织安全规范。

## 相关链接

- [OpenNextion-Example-ESP32Marauder 源码](https://github.com/OpenNextion/OpenNextion-Example-ESP32Marauder)
- [ESP32 Marauder 项目](https://github.com/justcallmekoko/ESP32Marauder)
- [ONX2432G028 产品资料](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)
