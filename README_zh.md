# OpenNextion 在线固件烧录工具

[English README](./README.md)

OpenNextion Flasher 是面向 OpenNextion 系列开发板的在线固件烧录工具。页面通过 Web Serial 和 `esptool-js` 工作，用户在 Chrome 或 Edge 中打开网页后，可以选择开发板型号、选择云端例程或本地固件，并直接在线烧录 ESP32 系列固件。

在线访问地址：[https://opennextion.github.io/OpenNextion-Tool-Flasher/](https://opennextion.github.io/OpenNextion-Tool-Flasher/)

## 功能特性

- 支持 `ONX2432G028` 和 `ONX3248G035` 板型选择。
- 支持仓库云端固件，也支持本地上传 `.bin` 固件。
- 云端固件支持按分组选择例程。
- 网页支持中英文切换，默认语言跟随浏览器语言。
- 固件说明根据网页语言加载对应例程的 `README.md` 或 `README_zh.md`。
- 支持选择串口、显示连接日志、烧录进度、完成后复位和断开处理。
- 板型、分组、固件条目都通过 JSON 文件维护。

## 浏览器要求

Web Serial 需要 HTTPS 安全上下文。建议使用上面的 GitHub Pages 地址，或部署到其他 HTTPS 环境。

推荐浏览器：

- 桌面版 Chrome
- 桌面版 Edge

## 当前支持板型

两款板型当前默认烧录参数如下：

| 板型 | 芯片 | 波特率 | Flash Mode | Flash Freq | Flash Size | 复位方式 | 断开延迟 |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| ONX2432G028 | ESP32-S3 | 921600 | QIO | 80M | 16MB | 反相 RTS 复位 | 0.8 秒 |
| ONX3248G035 | ESP32-S3 | 921600 | QIO | 80M | 16MB | 反相 RTS 复位 | 0.8 秒 |

这些默认值维护在 `data/boards.json` 中。网页选择板型后会自动加载对应默认参数；用户也可以展开烧录参数面板后手动调整。

## 固件目录结构

云端固件和说明文档放在 `firmware/` 目录下：

```text
firmware/
  onx2432g028/
    factory-demo/
      01_touch_test/
        01_touch_test.bin
        README.md
        README_zh.md
      ...
    application-demo/
      xiaozhi-esp32/
        README.md
        README_zh.md
        xiaozhi_*.bin
      open-hasp/
        README.md
        README_zh.md
        open_hasp_*.bin
      esp32-marauder/
        README.md
        README_zh.md
        esp32_marauder_*.bin
  onx3248g035/
    factory-demo/
      ...
    application-demo/
      xiaozhi-esp32/
        ...
      open-hasp/
        ...
      esp32-marauder/
        ...
```

当前云端固件索引：

- 出厂演示：18 个条目，版本 `v1.0.0`。
- 应用例程：4 个小智 AI 条目，版本 `v2.2.6`；2 个 openHASP 条目，版本 `v0.7.0.1_e6afb36`；2 个 ESP32 Marauder 条目，版本 `v1.12.2`。

## 元数据文件

网页由以下 JSON 文件配置：

| 文件 | 用途 |
| --- | --- |
| `data/boards.json` | 板型信息、芯片类型、USB 描述和默认烧录参数。 |
| `data/groups.json` | 例程分组和中英文分组名称。 |
| `data/firmwares.json` | 固件条目、中英文名称/描述、README 路径、bin 路径和烧录地址。 |

## 添加固件

1. 在对应板型目录下创建例程目录，例如：

   ```text
   firmware/onx2432g028/factory-demo/10_new_example/
   ```

2. 放入固件 bin 和说明文档：

   ```text
   10_new_example.bin
   README.md
   README_zh.md
   ```

3. 在 `data/firmwares.json` 中添加条目：

   ```json
   {
     "id": "onx2432g028-factory-demo-10_new_example",
     "name": {
       "zh": "10 新例程",
       "en": "10 New Example"
     },
     "groupId": "factory",
     "boardIds": ["onx2432g028"],
     "version": "v1.0.0",
     "summary": {
       "zh": "中文简介。",
       "en": "English summary."
     },
     "description": {
       "zh": "中文描述。",
       "en": "English description."
     },
     "markdown": {
       "zh": "./firmware/onx2432g028/factory-demo/10_new_example/README_zh.md",
       "en": "./firmware/onx2432g028/factory-demo/10_new_example/README.md"
     },
     "files": [
       {
         "path": "./firmware/onx2432g028/factory-demo/10_new_example/10_new_example.bin",
         "address": "0x0"
       }
     ]
   }
   ```

对于烧录到 `0x0` 的合并固件，网页会保留固件镜像自带的 Flash 参数。对于多文件固件，需要把 `files[].address` 配置为 ESP-IDF 构建输出对应的烧录地址。

## 本地预览

页面会通过 `fetch()` 加载 JSON、Markdown 和固件文件，因此建议用本地 HTTP 服务预览：

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 实现注意事项

- 烧录库使用 `https://unpkg.com/esptool-js@0.6.0/bundle.js`。
- 除非重新完整测试烧录、复位和多次重复烧录稳定性，否则不要随意替换已验证的 `esptool-js@0.6.0` bundle。
- 当前 OpenNextion 测试硬件使用反相 RTS 复位和 0.8 秒断开延迟，可以在烧录完成后自动运行。
- 页面关闭底层串口 tracing，并在烧录完成后释放固件临时缓存，以降低多次连续烧录时的内存压力。
- 如果烧录未完成就失败，页面会保持串口连接，不在失败路径主动关闭串口。
