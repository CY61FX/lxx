# Python数据分析学习路线 PDF 大纲生成计划

## 摘要

生成一份专业的 **Python数据分析学习路线** PDF文档，涵盖从入门到进阶的完整课程大纲，包含八大模块：Python基础、NumPy、Pandas、数据可视化、统计学基础、机器学习入门、数据工程与工具链、综合项目实战。

## 当前状态分析

- 工作区为空，需从零创建
- 系统已安装 reportlab 4.4.10、Python 3.10
- Linux 环境，可使用 CID 内置字体（STSong-Light）和系统 TTF 字体（SmileySans）

## 实现方案

### 文件清单

| 文件 | 路径 | 说明 |
|------|------|------|
| 生成脚本 | `/workspace/generate_pdf.py` | Python PDF 生成脚本 |
| 输出 PDF | `/workspace/Python数据分析学习路线.pdf` | 最终文档 |

### 步骤一：创建 Python 生成脚本

在 `/workspace/generate_pdf.py` 中实现以下内容：

#### 1.1 工具函数（脚本顶部）
- **register_cjk_font()** — 注册 STSong-Light（CID 内置）和 SmileySans（系统 TTF）两种字体
- **get_professional_styles()** — 返回专业样式字典（CoverTitle/H1/H2/H3/Body/Bullet/TOCEntry 等）
- **ColoredDivider 类** — 继承 Flowable 的装饰分隔线组件

#### 1.2 内容数据结构
将八大模块内容组织为嵌套字典/列表（`COURSE_OUTLINE`），包含：
- 模块一：Python 编程基础与环境搭建（4 节）
- 模块二：NumPy 科学计算（3 节）
- 模块三：Pandas 数据处理（6 节）
- 模块四：数据可视化（4 节）
- 模块五：统计学基础（4 节）
- 模块六：机器学习入门（5 节）
- 模块七：数据工程与工具链（5 节）
- 模块八：综合项目实战（5 节）

#### 1.3 PDF 构建函数
- **build_cover_page()** — 封面页（标题 + 副标题 + 装饰线 + 版本信息）
- **build_toc()** — 目录页（模块列表 + 小节列表）
- **build_content()** — 正文内容（遍历 COURSE_OUTLINE 生成）
- **add_page_number()** — 页码（跳过封面页）

#### 1.4 主函数
组装封面→目录→正文，调用 `doc.build()` 生成 PDF

### 步骤二：运行脚本生成 PDF

```bash
python3 /workspace/generate_pdf.py
```

### 步骤三：验证输出

- 检查 PDF 文件大小和页数
- 确认中文字符正常显示
- 确认排版规则正确（PageBreak 仅封面后、ColoredDivider 正确使用）

## 关键约束与决策

| 决策点 | 选择 | 理由 |
|--------|------|------|
| 字体方案 | 双字体（SmileySans + STSong-Light） | 标题现代感 + 正文可读性 |
| PageBreak | 仅封面页之后使用 | 遵循 PDF 技能最佳实践 |
| 内容范围 | 八大模块全面覆盖 | 用户要求全面覆盖入门到进阶 |
| 纸张大小 | A4 | 中文文档标准尺寸 |
| 配色方案 | 深蓝色系（#1a1a2e / #0f3460） | 专业、沉稳 |

## 验证步骤

1. 运行脚本无报错
2. PDF 文件非空且大小合理
3. 中文字符正常显示（无方框/乱码）
4. 八个模块内容完整
5. 封面有页码跳过，正文页码从 1 开始
6. 目录与正文标题一致
