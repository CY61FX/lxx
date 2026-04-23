# 技术架构文档

## 技术选型

### 前端技术
- **框架**：React 18 + TypeScript
- **构建工具**：Vite
- **CSS框架**：Tailwind CSS
- **路由**：React Router v6
- **状态管理**：Zustand
- **UI组件**：自定义组件 + Headless UI
- **代码编辑器**：Monaco Editor
- **数据可视化**：Chart.js
- **HTTP客户端**：Axios

### 后端技术
- **服务器**：Express.js + Node.js
- **数据库**：Supabase (PostgreSQL)
- **认证**：Supabase Auth
- **存储**：Supabase Storage
- **API设计**：RESTful API

### 部署
- **前端**：Cloudflare Pages
- **后端**：Supabase Edge Functions 或 Vercel Functions

## 文件结构设计

```
/src
  /assets            # 静态资源文件
  /components        # 通用组件
    /common          # 基础组件
    /layout          # 布局组件
    /course          # 课程相关组件
    /practice        # 练习环境组件
    /community       # 社区相关组件
  /hooks             # 自定义hooks
  /pages             # 页面组件
    /Home            # 首页
    /Courses         # 课程中心
    /CourseDetail    # 课程详情
    /CourseContent   # 课程内容
    /LearningCenter  # 学习中心
    /Practice        # 练习环境
    /PracticeEditor  # 代码编辑器
    /PracticeTools   # 数据分析工具
    /Community       # 社区论坛
    /Profile         # 个人中心
  /services          # API服务
  /store             # 状态管理
  /types             # TypeScript类型定义
  /utils             # 工具函数
  App.tsx            # 应用入口
  main.tsx           # 主渲染文件
  index.css          # 全局样式
```

## 数据结构设计

### 用户表 (users)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 用户唯一标识 |
| email | String | 用户邮箱 |
| password | String | 密码哈希 |
| name | String | 用户名 |
| role | String | 用户角色 (student/teacher/admin) |
| avatar | String | 头像URL |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 课程表 (courses)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 课程唯一标识 |
| title | String | 课程标题 |
| description | Text | 课程描述 |
| cover_image | String | 封面图片URL |
| category | String | 课程分类 |
| difficulty | String | 难度级别 |
| price | Decimal | 课程价格 |
| instructor_id | UUID | 讲师ID |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 章节表 (chapters)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 章节唯一标识 |
| course_id | UUID | 课程ID |
| title | String | 章节标题 |
| order | Integer | 章节顺序 |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 内容表 (contents)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 内容唯一标识 |
| chapter_id | UUID | 章节ID |
| type | String | 内容类型 (video/document/quiz) |
| title | String | 内容标题 |
| content_url | String | 内容URL |
| duration | Integer | 视频时长(秒) |
| order | Integer | 内容顺序 |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 学习进度表 (learning_progress)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 进度唯一标识 |
| user_id | UUID | 用户ID |
| course_id | UUID | 课程ID |
| content_id | UUID | 内容ID |
| completed | Boolean | 是否完成 |
| completed_at | Timestamp | 完成时间 |

### 作业表 (assignments)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 作业唯一标识 |
| course_id | UUID | 课程ID |
| title | String | 作业标题 |
| description | Text | 作业描述 |
| deadline | Timestamp | 截止时间 |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 作业提交表 (assignment_submissions)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 提交唯一标识 |
| assignment_id | UUID | 作业ID |
| user_id | UUID | 用户ID |
| submission_url | String | 提交内容URL |
| grade | Decimal | 评分 |
| feedback | Text | 反馈 |
| submitted_at | Timestamp | 提交时间 |

### 讨论表 (discussions)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 讨论唯一标识 |
| course_id | UUID | 课程ID (可为空，社区讨论) |
| user_id | UUID | 用户ID |
| title | String | 讨论标题 |
| content | Text | 讨论内容 |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 回复表 (replies)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 回复唯一标识 |
| discussion_id | UUID | 讨论ID |
| user_id | UUID | 用户ID |
| content | Text | 回复内容 |
| created_at | Timestamp | 创建时间 |
| updated_at | Timestamp | 更新时间 |

### 成就表 (achievements)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 成就唯一标识 |
| name | String | 成就名称 |
| description | Text | 成就描述 |
| icon | String | 成就图标 |
| requirement | JSON | 达成条件 |

### 用户成就表 (user_achievements)
| 字段名 | 数据类型 | 描述 |
|-------|---------|------|
| id | UUID | 记录唯一标识 |
| user_id | UUID | 用户ID |
| achievement_id | UUID | 成就ID |
| unlocked_at | Timestamp | 解锁时间 |

## 功能模块拆解与技术实现

### 1. 认证模块
- **实现方式**：使用Supabase Auth提供的邮箱/密码认证和第三方认证
- **核心功能**：
  - 用户注册/登录
  - 密码重置
  - 会话管理
  - 权限控制

### 2. 课程模块
- **实现方式**：React组件 + Supabase数据库
- **核心功能**：
  - 课程列表展示与筛选
  - 课程详情查看
  - 课程内容播放与学习
  - 学习进度跟踪

### 3. 练习环境模块
- **实现方式**：Monaco Editor + 后端代码执行服务
- **核心功能**：
  - Python代码在线编辑与执行
  - 数据分析工具集成
  - 实验项目管理

### 4. 社区模块
- **实现方式**：React组件 + Supabase数据库
- **核心功能**：
  - 讨论帖子发布与回复
  - 问答功能
  - 内容搜索

### 5. 成就系统模块
- **实现方式**：React组件 + Supabase数据库
- **核心功能**：
  - 成就解锁与展示
  - 等级系统
  - 排行榜

## API 接口设计

### 认证接口
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/logout` - 用户登出
- `POST /api/auth/reset-password` - 密码重置

### 课程接口
- `GET /api/courses` - 获取课程列表
- `GET /api/courses/:id` - 获取课程详情
- `GET /api/courses/:id/chapters` - 获取课程章节
- `GET /api/courses/:id/contents/:contentId` - 获取课程内容

### 学习进度接口
- `GET /api/learning-progress` - 获取用户学习进度
- `POST /api/learning-progress` - 更新学习进度

### 作业接口
- `GET /api/assignments` - 获取作业列表
- `GET /api/assignments/:id` - 获取作业详情
- `POST /api/assignments/:id/submit` - 提交作业
- `GET /api/assignments/:id/submissions` - 获取作业提交

### 社区接口
- `GET /api/discussions` - 获取讨论列表
- `POST /api/discussions` - 创建讨论
- `GET /api/discussions/:id` - 获取讨论详情
- `POST /api/discussions/:id/replies` - 回复讨论

### 成就接口
- `GET /api/achievements` - 获取成就列表
- `GET /api/users/:id/achievements` - 获取用户成就

## 技术实现重点与难点

### 1. 在线代码编辑器
- **技术选型**：Monaco Editor
- **实现难点**：
  - 代码执行环境的安全性
  - 执行结果的实时反馈
  - 代码示例的管理

### 2. 数据分析工具集成
- **技术选型**：Chart.js + 后端数据处理
- **实现难点**：
  - 大型数据集的处理
  - 数据可视化的性能优化
  - 交互式数据分析功能

### 3. 学习进度跟踪
- **技术选型**：Supabase数据库 + React状态管理
- **实现难点**：
  - 实时进度更新
  - 多设备同步
  - 学习行为分析

### 4. 成就系统
- **技术选型**：Supabase数据库 + React组件
- **实现难点**：
  - 成就触发条件的设计
  - 实时成就解锁
  - 排行榜的性能优化

### 5. 部署与性能优化
- **技术选型**：Cloudflare Pages + Supabase Edge Functions
- **实现难点**：
  - 前端资源的优化
  - 后端API的响应速度
  - 全球访问的性能

## 安全性考虑

### 前端安全
- 使用HTTPS协议
- 输入验证与XSS防护
- 敏感信息加密
- CSP (Content Security Policy)配置

### 后端安全
- API权限控制
- 密码哈希存储
- SQL注入防护
- 速率限制
- 数据备份与恢复

### 数据安全
- 数据加密存储
- 访问控制
- 数据脱敏
- 合规性要求