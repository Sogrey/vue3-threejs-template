# Vue 3 + Three.js Template

一个基于 Vue 3 和 Three.js 的现代 3D 可视化项目模板。

## 项目特性

- ✅ Vue 3 + TypeScript + Vite
- ✅ Three.js 3D 图形库集成
- ✅ 模块化 Three.js 引擎封装
- ✅ 响应式窗口大小调整
- ✅ 现代化的开发工具链

## 技术栈

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **3D 图形库**: Three.js
- **包管理器**: pnpm
- **开发工具**: VS Code + Volar

## 推荐开发环境设置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur)。

## 推荐浏览器设置

- Chromium 内核浏览器 (Chrome, Edge, Brave 等):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [在 Chrome DevTools 中启用自定义对象格式化器](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [在 Firefox DevTools 中启用自定义对象格式化器](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## TypeScript 对 `.vue` 导入的类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替换 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来让 TypeScript 语言服务识别 `.vue` 类型。

## 自定义配置

查看 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
npm install
```

### 编译和热重载用于开发

```sh
npm run dev
```

### 类型检查、编译和压缩用于生产

```sh
npm run build
```
