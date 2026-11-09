# 李俊宇 — 个人学术主页

[English](README.md) · [访问主页](https://b1ue13e.github.io/)

这是个人学术主页的源代码，集中展示研究方向、论文与工作稿、科研合作、开源项目和联系方式。页面支持中英文切换、研究主题筛选与项目展开，并提供本人照片、ORCID 及 CV 下载入口。

## 本地预览

网站由原生 HTML、CSS 和 JavaScript 构成，不需要安装前端依赖或执行构建。在仓库目录运行：

```sh
python -m http.server 8080
```

用浏览器打开 <http://localhost:8080/>。通过 HTTP 访问可直接检查语言偏好保存和复制邮箱等交互。

## 修改内容

| 入口 | 内容 |
| --- | --- |
| [`index.html`](index.html) | 英文正文、论文与经历条目、照片和公开链接 |
| [`content.js`](content.js) | 中文基础文案和界面提示 |
| [`academic-content.js`](academic-content.js) | 中文论文、科研经历及简历标签 |
| [`site.js`](site.js) | 语言切换与保存、研究筛选、手机菜单、邮箱复制 |
| [`styles.css`](styles.css)、[`academic.css`](academic.css) | 页面样式、学术内容及响应式布局 |
| [`assets/`](assets/) | 照片、简历、图标与社交预览图 |

修改带有 `data-i18n` 的英文内容时，需要同步对应的中文键。操作细节见[内容维护说明](docs/CONTENT.md)。

## 发布与学术信息

GitHub Pages 直接发布 `main` 分支根目录，无独立构建产物。提交后查看 Pages 部署结果即可。

论文按实际阶段注明投稿、合作者审阅或工作稿，不将稿件写成已接收成果。公开联系邮箱为 [ljylikezmn999@gmail.com](mailto:ljylikezmn999@gmail.com)。
