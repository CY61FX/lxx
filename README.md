# Python数据分析AI训练平台

基于Cloudflare免费资源的Python数据分析实操训练平台，实现“3步认知+10个梯度项目+AI错题倒逼”的学习模式。

## 核心功能

- **浏览器端Python运行**：使用Pyodide在浏览器中运行Python代码
- **10个梯度项目**：从基础到进阶的数据分析项目
- **AI陪练**：通过Cloudflare Workers代理调用AI API提供学习指导
- **学习进度保存**：使用LocalStorage存储学习进度和代码草稿
- **数据可视化**：支持Matplotlib和Recharts图表渲染

## 技术栈

- **前端**：React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Python运行**：Pyodide
- **边缘计算**：Cloudflare Workers
- **存储**：LocalStorage + Cloudflare Workers KV
- **部署**：Cloudflare Pages

## 快速开始

1. 克隆仓库
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 构建生产版本：`npm run build`

## 部署到Cloudflare Pages

1. 推送代码到GitHub仓库
2. 登录Cloudflare，进入Pages
3. 关联GitHub仓库
4. 构建配置：框架选择Vite，构建命令`npm run build`，输出目录`dist`
5. 点击部署

## 项目结构

```
├── src/
│   ├── components/     # UI组件
│   ├── lib/           # 核心功能库
│   │   ├── pyodide.ts  # Pyodide集成
│   │   ├── storage.ts  # LocalStorage封装
│   │   └── utils.ts    # 工具函数
│   ├── pages/         # 页面组件
│   ├── App.tsx        # 应用入口
│   └── main.tsx       # 主入口
├── workers/           # Cloudflare Workers代码
│   └── ai-proxy.ts    # AI API代理
├── package.json       # 项目配置
└── vite.config.ts     # Vite配置
```

## 注意事项

- 使用Cloudflare免费套餐，不超出免费额度
- 首次加载Pyodide可能较慢，请耐心等待
- 优先适配Chrome和Edge浏览器

## 许可证

MIT
