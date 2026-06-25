# Plane Radar

## 概述

本固件为 `ONX2432G028` 适配的 Plane Radar 固件。它会在屏幕上显示基于 ADS-B 数据的实时飞机雷达视图，并提供首次启动配网与位置配置能力，适合桌面信息显示和航班观察场景。

## 固件信息

| 项目 | 内容 |
| :--- | :--- |
| 适用板型 | ONX2432G028 |
| 固件版本 | 未标注 |
| 芯片 | ESP32-S3 |
| Flash | 16MB |
| 烧录地址 | 0x0 |
| 显示方向 | 横屏（320×240） |
| 来源分支 | main |

## 主要功能

- 显示以当前位置为中心的 ADS-B 飞机雷达界面。
- 支持首次启动通过 Wi-Fi Portal 配置网络和雷达位置。
- 支持切换雷达量程、显示单位和跑道覆盖图等设置。
- 周期性从在线 ADS-B 数据源获取附近飞机信息并刷新显示。

## 首次使用

1. 使用在线烧录工具选择 `ONX2432G028` 板型。
2. 在“应用例程”中选择 `Plane Radar`。
3. 烧录完成并重启后，首次使用时连接设备创建的 `PlaneRadar-Setup` Wi-Fi 热点。
4. 用浏览器打开 `http://plane-radar.local` 或 `http://192.168.4.1`。
5. 在 Portal 中配置 Wi-Fi、经纬度、距离单位和跑道显示选项，保存后设备会自动重启并进入雷达界面。

## 使用说明

- 雷达数据依赖联网访问 ADS-B 在线数据源，网络不可用时不会显示实时航班信息。
- 上游项目默认支持量程切换和清除配置等按键操作；当前 OpenNextion 构建如有按键映射差异，请以实际固件行为为准。
- 飞机位置和标签会根据当前量程动态缩放，超出主雷达圈的目标会以边缘方向提示显示。

## 注意事项

- 本固件为完整合并镜像，在线烧录工具会写入 `0x0` 并保留镜像自带 Flash 参数。
- 飞机数据来自公开 ADS-B 接口，显示结果受网络状态、接口可用性和数据源覆盖范围影响。
- 位置、Wi-Fi 和界面相关设置会保存在设备本地 Flash 中。

## 相关链接

- [OpenNextion-ESP32-Plane-Radar 源码](https://github.com/OpenNextion/OpenNextion-ESP32-Plane-Radar)
- [adsb.fi Open Data](https://opendata.adsb.fi/)
- [ONX2432G028 产品资料](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)
