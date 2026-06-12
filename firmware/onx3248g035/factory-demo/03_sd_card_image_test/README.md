# ESP32-S3 SD Card Image Test Example

Note: The firmware provided in this online flasher is the ESP-IDF version of this example.

## Overview

This project is an example of reading and displaying images from an SD card on the ONX3248G035 development board (ESP32-S3). It uses the SPI interface to communicate with an ST7796U LCD screen and an SD card. The LVGL graphics library is used to render the images and display navigation buttons.

The example scans the `images` folder in the root directory of the SD card for image files with `.jpg`, `.png`, `.bmp`, and `.bin` extensions. Users can switch between the images by swiping left and right on the touch screen, or by using the on-screen navigation buttons.

## Features

- **SD Card Integration**: Mounts an SD card in SPI mode and reads files from it.
- **Image Decoding**: Supports decoding and displaying multiple image formats (JPG, PNG, BMP, BIN).
- **LVGL UI**: Provides a simple user interface with buttons to navigate through images.
- **Real-time Display**: Displays images on an ST7796U LCD screen.
- **Touch Support**:  Navigate images by swiping left or right .

## Hardware Requirements

- **MCU**: ESP32-S3 Development Board
- **LCD Screen**: 3.5-inch ST7796U SPI TFT LCD (Resolution: 320x480)
- **Touch Controller**: CST826 I2C Capacitive Touch Controller
- **SD Card**: A microSD card, formatted with FAT32.
- **IO Expander**: PCF8574 I2C IO Expander (used for LCD reset).

## Pin Connections

| Function      | ESP32-S3 Pin | Description                               |
| :------------ | :----------- | :---------------------------------------- |
| **I2C**       |              |                                           |
| I2C SCL       | GPIO_NUM_7   | I2C Clock Line                            |
| I2C SDA       | GPIO_NUM_8   | I2C Data Line                             |
| **SPI**       |              |                                           |
| SPI SCLK      | GPIO_NUM_5   | SPI Clock Line                            |
| SPI MOSI      | GPIO_NUM_1   | SPI Master Out Slave In Data Line         |
| LCD DC        | GPIO_NUM_3   | LCD Data/Command Select                   |
| LCD CS        | GPIO_NUM_2   | LCD Chip Select                           |
| **SD Card**   |              |                                           |
| SD CMD        | GPIO_NUM_10  | SD Card Command Line                      |
| SD D0         | GPIO_NUM_9   | SD Card Data Line 0                       |
| SD CLK        | GPIO_NUM_11  | SD Card Clock Line                        |
| **Other**     |              |                                           |
| LCD BL        | GPIO_NUM_6   | LCD Backlight Control (PWM)               |
| LCD RST       | -            | Controlled via PCF8574                    |

## How to Use

1.  **Prepare the SD Card**:  Format a microSD card with the FAT32 file system. Copy some image files (`.jpg`, `.png`, `.bmp`, `.bin`) into the `images` folder located in the root directory of the SD card.
2.  **Connect Hardware**: Connect the LCD screen, touch controller, and SD card to the ESP32-S3 board according to the pin connections table.
3.  **Flash**: Flash the firmware to the board.

### Product Purchase Link
[3.5-inch capacitive screen (ONX3248G035)](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### Product Information
[3.5-inch capacitive screen (ONX3248G035)](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### Source Code
- [ESP-IDF version - 03_sd_card_image_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-IDF/03_sd_card_image_test)
- [ESP-Arduino version - 03_sd_card_image_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035/tree/main/Example%20Programs/ESP-Arduino/03_sd_card_image_test)
