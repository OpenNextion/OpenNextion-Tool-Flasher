# OpenNextion PrintSphere - 拓竹打印机桌面状态屏 (ONX3248G035)

将开源项目 [PrintSphere](https://github.com/cptkirki/PrintSphere) 移植到 OpenNextion ONX3248G035（3.5 寸）矩形 ESP32-S3 显示屏，在桌面上实时显示拓竹（Bambu Lab）3D 打印机的状态。

> **注意：** 本固件为非官方移植版，使用前请自行评估风险。与 Bambu Lab 及 OpenNextion 官方无关。

## 功能特性

- **打印状态**：显示生命周期 — 空闲 / 准备中 / 打印中 / 已暂停 / 已完成 / 错误
- **打印信息**：G-code 文件名、当前层 / 总层数、剩余时间、进度百分比
- **温度显示**：喷头、热床、腔体温度（支持 H2D 双喷头）
- **AMS 支持**：最多 4 个 AMS 单元 × 4 料仓 + 外部料盘；显示耗材颜色和材料
- **封面图**：从拓竹云端获取打印预览图（混合/云端模式下可用）
- **摄像头快照**：支持 P1S JPEG Socket 摄像头抽帧显示
- **腔体灯**：显示灯状态并支持远程开关
- **中文字体**：内置 `onx_cjk_16` 中文字库（思源黑体 SC 子集，约 2500 个常用汉字）
- **错误查询**：HMS / 打印错误码人类可读描述查询
- **连接模式**：本地 MQTT（局域网）、云端 MQTT 或混合模式（本地优先 + 云端兜底）
- **国内区域**：兼容拓竹中国区云端（`api.bambulab.cn` / `cn.mqtt.bambulab.com`）
- **Wi-Fi 配网**：内置 HTTP 配网 Portal，支持 Wi-Fi、打印机和显示设置
- **OTA 就绪**：分区表支持 OTA（v0.2.1 暂不公开提供 OTA 资产）

## 支持的打印机型号 (v0.2.1)

| 打印机 | 本地 | 云端/混合 | AMS | 封面图 | 摄像头 | 备注 |
| --- | :---: | :---: | :---: | :---: | :---: | --- |
| A1 mini | ✅ | ✅ | - | ✅ | ✅ | 仅 CN 区账号测试；未接 AMS |
| H2C | - | ✅ | ✅ | ✅ | - | 仅 CN 区账号测试 |
| P1S | 待验 | 待验 | 待验 | 待验 | 待验 | 验证进行中 |
| 其他 | 因机型而异 | 因机型而异 | - | - | - | 支持：A1、P1P、X1、X1C、X1E、H2D 等 |

## 硬件要求

- **主控**：ESP32-S3R8（240 MHz，8 MB 八线 PSRAM）
- **LCD**：3.5 寸 ST7796U SPI TFT（480×320，横屏）
- **触摸**：CST826 I2C 电容触摸控制器
- **IO 扩展**：PCF8574 I2C IO 扩展芯片
- **Flash**：16 MB
- **开发板**：[ONX3248G035](https://nextion.tech/wiki/onx3248g035/)

## 引脚连接

| 功能 | ESP32-S3 引脚 | 说明 |
| :--- | :--- | :--- |
| **SPI（LCD）** | | |
| SPI SCLK | GPIO 5 | SPI 时钟 |
| SPI MOSI | GPIO 1 | SPI 数据 |
| LCD DC | GPIO 3 | 数据/命令选择 |
| LCD CS | GPIO 2 | 片选 |
| **I2C** | | |
| I2C SCL | GPIO 7 | 时钟（CST826 触摸 + PCF8574 IO 扩展） |
| I2C SDA | GPIO 8 | 数据 |
| **其他** | | |
| LCD BL | GPIO 6 | 背光 PWM（10 位，10 kHz） |
| LCD RST | — | 经 PCF8574 控制 |
| 电池 ADC | GPIO 4 | 电池电压 ADC（ADC1 CH3） |

## 固件信息

| 项目 | 值 |
| :--- | :--- |
| 目标板型 | ONX3248G035 |
| 版本 | v0.2.1 |
| 芯片 | ESP32-S3 |
| Flash | 16 MB |
| 烧录地址 | 0x0（完整合并镜像） |
| 显示方向 | 横屏（480×320） |
| 源码分支 | main |

## 首次使用

1. 使用本工具将固件烧录到地址 `0x0`。
2. 首次启动时，设备会创建名为 `PrintSphere-XXXXXX` 的 Wi-Fi AP。
3. 连接该 AP，用浏览器打开 `http://192.168.4.1`。
4. 在配网 Portal 中：配置 Wi-Fi、填写拓竹账号或本地打印机凭据、选择连接模式。
5. 保存并重启，显示屏将连接打印机并显示实时状态。

## 3D 打印外壳

[ONX3248G035 桌面支架（MakerWorld）](https://makerworld.com/models/2899702-opennextion-esp32-printer-status-display-for-bambu#profileId-3241235)

### 产品购买链接

[ONX3248G035（3.5 寸 ESP32-S3 LCD）](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### 产品资料

[ONX3248G035 Wiki 与原理图](https://nextion.tech/wiki/onx3248g035/)  
[ONX3248G035 GitHub SKU 仓库](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### 源码

[opennextion-printsphere（GitHub）](https://github.com/OpenNextion/opennextion-printsphere)  
[原版 PrintSphere by Cpt_Kirk](https://github.com/cptkirki/PrintSphere)
