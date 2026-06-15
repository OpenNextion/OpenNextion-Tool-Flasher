# openHASP Smart Home Touch Panel

## Overview

This firmware is the openHASP build for `ONX2432G028`. It turns the OpenNextion 2.8-inch ESP32-S3 touch display into a Home Assistant / MQTT smart home control panel.

## Firmware Information

| Item | Value |
| :--- | :--- |
| Target board | ONX2432G028 |
| Firmware version | v0.7.0.1_e6afb36 |
| Chip | ESP32-S3 |
| Flash | 16MB |
| Flash address | 0x0 |

## Features

- Control smart home devices through a touchscreen UI.
- Supports Wi-Fi networking.
- Supports MQTT communication for Home Assistant openHASP integration.
- Supports custom UI pages configured and pushed through openHASP.

## First Use

1. Wait for the device to reboot after flashing.
2. Complete Wi-Fi setup using the device screen or the default openHASP onboarding flow.
3. Configure the MQTT server address, username, and password in the openHASP web interface.
4. Add the device in Home Assistant using the openHASP integration documentation and upload page configuration.

## Notes

- This firmware comes from the `onx2432g028` build output of `OpenNextion-Example-openHASP`.
- It is a merged full image. The online flasher writes it at `0x0` and keeps the flash parameters embedded in the image.
- openHASP is intended for smart home control scenarios and does not include the camera, audio, SD card, or other factory test screens.

## Links

- [openHASP Documentation](https://www.openhasp.com/)
- [OpenNextion-Example-openHASP Source](https://github.com/OpenNextion/OpenNextion-Example-openHASP)
- [ONX2432G028 Product Resources](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)
