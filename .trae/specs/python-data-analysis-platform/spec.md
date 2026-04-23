# Python数据分析AI训练平台 - 产品需求文档

## Overview
- **Summary**: 基于Cloudflare免费资源的Python数据分析实操训练平台，实现“3步认知+10个梯度项目+AI错题倒逼”的学习模式，零成本、零运维、无传统后端，打开浏览器即可使用。
- **Purpose**: 为商业数据分析和应用专业学生提供一个低成本、高效率的Python数据分析学习平台，通过实际项目和AI指导提升学习效果。
- **Target Users**: 商业数据分析和应用专业学生，以及希望学习Python数据分析的初学者。

## Goals
- 提供10个梯度项目的实操训练
- 实现浏览器端Python代码运行
- 集成AI陪练功能提供学习指导
- 保存学习进度和代码草稿
- 基于Cloudflare免费资源实现零成本部署

## Non-Goals (Out of Scope)
- 不使用任何付费服务
- 不搭建传统后端服务器
- 不存储用户个人信息
- 不支持多用户系统
- 不提供实时协作功能

## Background & Context
- 传统数据分析学习平台通常需要后端服务器支持，部署成本高
- 学生在学习过程中需要实时反馈和指导
- Cloudflare提供了丰富的免费资源，包括Pages、Workers、KV存储等
- Pyodide技术使浏览器端运行Python成为可能

## Functional Requirements
- **FR-1**: 10个梯度项目实操训练
- **FR-2**: 浏览器端Python代码运行环境
- **FR-3**: AI陪练功能（思路点拨、代码纠错）
- **FR-4**: 学习进度和代码草稿保存
- **FR-5**: 数据可视化功能
- **FR-6**: 学习引导模块（思维模型、行业争议、辨析题）

## Non-Functional Requirements
- **NFR-1**: 首屏加载时间 < 2秒
- **NFR-2**: 代码运行响应时间 < 3秒
- **NFR-3**: 适配Chrome和Edge浏览器
- **NFR-4**: 使用Cloudflare免费套餐，不超出免费额度
- **NFR-5**: 界面美观，用户体验良好

## Constraints
- **Technical**: 基于React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Business**: 零成本部署和运维
- **Dependencies**: Pyodide、Cloudflare Workers、Cloudflare AI Gateway

## Assumptions
- 用户使用现代浏览器（Chrome、Edge）
- 网络连接稳定
- Cloudflare免费资源足够支持平台运行

## Acceptance Criteria

### AC-1: 10个梯度项目可正常运行
- **Given**: 用户访问平台
- **When**: 选择任意项目并运行代码
- **Then**: 代码在浏览器端成功执行，输出结果和图表
- **Verification**: `programmatic`

### AC-2: AI陪练功能正常
- **Given**: 用户在项目中遇到问题
- **When**: 点击“思路点拨”或“代码纠错”
- **Then**: AI返回合理的指导意见，不暴露API Key
- **Verification**: `human-judgment`

### AC-3: 学习进度保存正常
- **Given**: 用户完成部分项目
- **When**: 刷新页面或重新打开浏览器
- **Then**: 学习进度和代码草稿自动恢复
- **Verification**: `programmatic`

### AC-4: 学习引导模块完整
- **Given**: 用户访问学习引导页面
- **When**: 浏览思维模型、行业争议、辨析题内容
- **Then**: 内容完整显示，交互正常
- **Verification**: `human-judgment`

### AC-5: 部署成功
- **Given**: 按照部署步骤操作
- **When**: 部署到Cloudflare Pages
- **Then**: 平台成功上线，可通过域名访问
- **Verification**: `programmatic`

## Open Questions
- [ ] Cloudflare AI Gateway的具体配置步骤
- [ ] 10个梯度项目的具体内容和难度梯度设计
- [ ] 数据可视化的具体实现方式
