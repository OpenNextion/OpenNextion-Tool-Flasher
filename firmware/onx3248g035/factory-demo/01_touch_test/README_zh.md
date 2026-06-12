# ESP32-S3 触摸测试示例

说明：当前在线烧录工具中提供的该例程固件为 ESP-IDF 版本。

## 概述

本示例旨在演示如何将触摸功能集成到 ONX3248G035开发板(ESP32-S3)中。它通过I2C接口与CST826触摸控制器通信，并利用SPI接口驱动ST7796U LCD屏幕。示例使用LVGL图形库在屏幕上实时显示触摸轨迹。

当用户触摸屏幕时，程序会读取触摸坐标并在相应位置绘制一个红色的4x4像素方块，从而直观地验证触摸功能的正确性。

## 功能

- **触摸检测**: 通过CST826触摸控制器实时检测触摸输入。
- **屏幕显示**: 使用ST7796U LCD屏幕显示图形界面。
- **LVGL集成**: 集成LVGL库，用于UI渲染和触摸事件处理。
- **实时反馈**: 在屏幕上绘制红色方块以实时显示触摸位置。
- **背光控制**: 支持通过PWM调节LCD背光亮度。

## 硬件要求

- **主控**: ESP32-S3开发板
- **LCD屏幕**: 3.5寸 ST7796U SPI接口TFT LCD (分辨率: 320x480)
- **触摸控制器**: CST826 I2C接口电容触摸控制器
- **IO扩展器**: PCF8574 I2C IO扩展器 (用于LCD复位)

## 引脚连接

| 功能 | ESP32-S3 引脚 | 说明 |
| :--- | :--- | :--- |
| **I2C** | | |
| I2C SCL | GPIO_NUM_7 | I2C时钟线 |
| I2C SDA | GPIO_NUM_8 | I2C数据线 |
| **SPI** | | |
| SPI SCLK | GPIO_NUM_5 | SPI时钟线 |
| SPI MOSI | GPIO_NUM_1 | SPI主出从入数据线 |
| LCD DC | GPIO_NUM_3 | LCD数据/命令选择 |
| LCD CS | GPIO_NUM_2 | LCD片选 |
| **其他** | | |
| LCD BL | GPIO_NUM_6 | LCD背光控制 (PWM) |
| LCD RST | - | 通过PCF8574控制 |

### 产品购买链接
[3.5寸电容屏 ONX3248G035](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### 产品资料：
[3.5寸电容屏 ONX3248G035](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### 源码
- [ESP-IDF 版本 - 01_touch_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-IDF/01_touch_test)
- [ESP-Arduino 版本 - 01_touch_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-Arduino/01_touch_test)
