# ESP32-S3 小智AI示例

## 概述

本示例旨在演示小智AI语音功能。

## 功能

- **唤醒词唤醒**: 中文固件唤醒词：你好，小智； 英文固件唤醒词：Jarvis。
- **AI语音**: AI语音对话。


## 硬件要求

- **MCU**：ESP32-S3 开发板
- **LCD 屏幕**：3.5 英寸 ST7796U SPI TFT LCD（分辨率：320x480）
- **触摸控制器**：CST826 I2C 电容触摸控制器
- **IO 扩展器**：PCF8574 I2C IO 扩展器
- **麦克风**：需外接 PDM 麦克风
- **喇叭**：需外接喇叭/功放
- **PSRAM**：建议开启（录音缓存）

## 引脚连接（与代码一致）

| 功能 | ESP32-S3 引脚 | 说明 |
| :--- | :--- | :--- |
| **I2C** | | |
| I2C SCL | GPIO_NUM_7 | I2C 时钟线 |
| I2C SDA | GPIO_NUM_8 | I2C 数据线 |
| **SPI (LCD)** | | |
| SPI SCLK | GPIO_NUM_5 | SPI 时钟线 |
| SPI MOSI | GPIO_NUM_1 | SPI 数据线 |
| LCD DC | GPIO_NUM_3 | LCD 数据/命令选择 |
| LCD CS | GPIO_NUM_2 | LCD 片选 |
| **其他** | | |
| LCD BL | GPIO_NUM_6 | 背光控制（PWM） |
| LCD RST | - | 通过 PCF8574 控制 |

### 产品购买链接
[3.5寸电容屏 ONX3248G035](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)
[双麦扩展板](https://itead.cc/product/nextion-dual-mic-board/)
[喇叭](https://itead.cc/product/nextion-box-speaker/)

### 产品资料：
[3.5寸电容屏 ONX3248G035](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### 源码
[OpenNextion-Example-xiaozhi-esp32](https://github.com/OpenNextion/OpenNextion-Example-xiaozhi-esp32)
