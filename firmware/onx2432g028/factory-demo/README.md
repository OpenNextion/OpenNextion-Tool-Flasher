# ONX2432G028 出厂综合演示

这个固件用于快速确认 ONX2432G028 的基础功能是否正常。

![出厂演示效果图](./firmware/onx2432g028/factory-demo/preview.svg)

## 功能

- 屏幕显示、色彩条和背光亮度测试
- 触摸坐标和按键响应测试
- 串口日志输出
- 基础控件展示

## 烧录文件

- `bootloader.bin` -> `0x0`
- `partitions.bin` -> `0x8000`
- `app.bin` -> `0x10000`
