# ESP32-S3 音乐播放测试示例

说明：当前在线烧录工具中提供的该例程固件为 ESP-IDF 版本。

## 概述

本示例演示在 ONX3248G035 开发板（ESP32-S3）上使用 SD 卡播放音频文件，并通过 LCD 触摸屏进行简单交互。界面基于 LVGL，音频输出使用板载喇叭。

## 功能

- **SD 卡音乐读取**：从 SD 卡扫描音乐文件。
- **音频播放**：使用 I2S + 功放输出音频。
- **触摸界面**：LVGL 界面用于选择和控制播放。

## 硬件要求

- **MCU**：ESP32-S3 开发板
- **LCD 屏幕**：3.5 英寸 ST7796U SPI TFT LCD（分辨率：320x480）
- **触摸控制器**：CST826 I2C 电容触摸控制器
- **IO 扩展器**：PCF8574 I2C IO 扩展器
- **喇叭**：需外接喇叭/功放
- **SD 卡**：FAT32 格式 microSD 卡

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
| **SD 卡 (SDMMC 1-bit)** | | |
| SD CMD | GPIO_NUM_10 | SD 卡命令线 |
| SD D0 | GPIO_NUM_9 | SD 卡数据线 0 |
| SD CLK | GPIO_NUM_11 | SD 卡时钟线 |
| **其他** | | |
| LCD BL | GPIO_NUM_6 | 背光控制（PWM） |
| LCD RST | - | 通过 PCF8574 控制 |

## 使用说明

1. **准备 SD 卡**：格式化为 FAT32。
2. **创建目录**：在 SD 卡根目录创建 `music` 文件夹。
3. **拷贝音频**：将音频文件复制到 `music` 目录。
4. **烧录**：烧录固件到开发板。
5. **操作界面**：启动后使用触摸屏选择歌曲并播放。

### 产品购买链接
[3.5寸电容屏 ONX3248G035](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)
[喇叭](https://itead.cc/product/nextion-box-speaker/)

### 产品资料：
[3.5寸电容屏 ONX3248G035](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### 源码
- [ESP-IDF 版本 - 02_music_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-IDF/02_music_test)
- [ESP-Arduino 版本 - 02_music_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-Arduino/02_music_test)
