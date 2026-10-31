# JUN 项目

## 目录

- `清颜计划/`：Expo Router / React Native / TypeScript 移动端原型（非原生微信小程序源码）。

## 清颜计划检查记录

- `pnpm install --frozen-lockfile`：通过
- `tsc --noEmit`：通过
- Expo Lint：通过（仅有 pnpm 版本和 ESM 模块类型警告）
- Vitest：25 项通过，1 项认证测试按项目配置跳过
- 服务端 esbuild：通过

该项目当前是移动端原型，不包含微信小程序原生 `app.json`、WXML 或 WXSS 文件；接入微信小程序前需要单独进行平台迁移。照片、未成年人敏感信息、家长授权、相机/相册和通知能力仍需在真实产品环境中配置并验证。
