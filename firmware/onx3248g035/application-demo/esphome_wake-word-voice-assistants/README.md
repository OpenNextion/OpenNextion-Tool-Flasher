# Esphome wake word voice assistents

## Overview

This firmware is the wake word voice assistant build for `ONX3248G035`. It turns the OpenNextion board into a Home Assistant voice assistant endpoint with on-device wake word detection, Wi-Fi provisioning, microphone capture, speaker playback, and interactive voice sessions.

## Firmware Information

| Item | Value |
| :--- | :--- |
| Supported Board | ONX3248G035 |
| Firmware Version | Unspecified |
| Chip | ESP32-S3 |
| Flash | 16MB |
| Flash Address | 0x0 |
| Upstream Project | esphome_wake-word-voice-assistants |

## Main Features

- On-device wake word detection to start voice assistant sessions.
- Wi-Fi connectivity for Home Assistant voice assistant integration.
- Microphone capture and speaker audio playback.
- Captive Portal based Wi-Fi provisioning on first boot.

## First Use

1. Select the `ONX3248G035` board in the online flasher.
2. Choose `esphome wake word voice assistents` under `Application Demo` and flash it.
3. After reboot, complete Wi-Fi setup by following the on-screen or portal prompts if the device is not provisioned yet.
4. Add the device in Home Assistant and configure the voice assistant pipeline and wake word model for your environment.
5. After setup is complete, use the configured wake word to start voice interaction.

## Notes

- This firmware is a merged image. The online flasher writes it to `0x0` and keeps the flash parameters embedded in the image.
- A working Wi-Fi connection and Home Assistant service are required for the full voice assistant workflow.
- Wake words, portal naming, and detailed setup flow may change with upstream builds. Follow the actual firmware behavior when they differ.
- Network and voice assistant related settings are stored in the device flash.

## Related Links

- [esphome_wake-word-voice-assistants source](https://github.com/esphome/wake-word-voice-assistants)
- [ONX3248G035 product information](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)
