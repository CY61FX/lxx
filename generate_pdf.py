#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Python数据分析学习路线 PDF 生成脚本
"""

import os
import platform
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    KeepTogether, Table, TableStyle, Flowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ============================================================
# 1. 字体注册
# ============================================================

def register_cjk_font():
    """注册 CJK 字体，返回字体名称映射"""
    # CID 内置字体 - 华文宋体
    pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'))

    # 尝试注册系统 TTF 字体
    ttf_font = None
    ttf_candidates = [
        '/usr/share/fonts/opentype/smiley-sans/SmileySans-Oblique.ttf',
        '/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc',
        '/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc',
        '/usr/share/fonts/truetype/wqy/wqy-microhei.ttc',
    ]
    for font_path in ttf_candidates:
        if os.path.exists(font_path):
            try:
                pdfmetrics.registerFont(TTFont('TitleFont', font_path, subfontIndex=0))
                ttf_font = 'TitleFont'
                break
            except Exception:
                continue

    if ttf_font:
        registerFontFamily(ttf_font, normal=ttf_font, bold=ttf_font, italic=ttf_font)

    return {
        'sans': ttf_font if ttf_font else 'STSong-Light',
        'serif': 'STSong-Light',
    }


# ============================================================
# 2. 专业样式
# ============================================================

PRIMARY_COLOR = HexColor('#1a1a2e')
ACCENT_COLOR = HexColor('#0f3460')
LIGHT_ACCENT = HexColor('#2b6cb0')
TEXT_COLOR = HexColor('#333333')
SUBTLE_COLOR = HexColor('#666666')
DIVIDER_COLOR = HexColor('#cccccc')

def get_professional_styles(fonts):
    """返回专业样式字典"""
    sans = fonts['sans']
    serif = fonts['serif']
    return {
        'CoverTitle': ParagraphStyle(
            'CoverTitle', fontName=sans, fontSize=30, leading=40,
            textColor=PRIMARY_COLOR, spaceAfter=10, alignment=TA_CENTER, wordWrap='CJK'
        ),
        'CoverSubtitle': ParagraphStyle(
            'CoverSubtitle', fontName=sans, fontSize=15, leading=22,
            textColor=ACCENT_COLOR, spaceAfter=10, alignment=TA_CENTER, wordWrap='CJK'
        ),
        'CoverInfo': ParagraphStyle(
            'CoverInfo', fontName=serif, fontSize=11, leading=16,
            textColor=SUBTLE_COLOR, spaceAfter=6, alignment=TA_CENTER, wordWrap='CJK'
        ),
        'H1': ParagraphStyle(
            'H1', fontName=sans, fontSize=20, leading=28,
            textColor=PRIMARY_COLOR, spaceBefore=18, spaceAfter=8, wordWrap='CJK'
        ),
        'H2': ParagraphStyle(
            'H2', fontName=sans, fontSize=14, leading=20,
            textColor=ACCENT_COLOR, spaceBefore=14, spaceAfter=6, wordWrap='CJK'
        ),
        'H3': ParagraphStyle(
            'H3', fontName=serif, fontSize=12, leading=17,
            textColor=PRIMARY_COLOR, spaceBefore=10, spaceAfter=4, wordWrap='CJK'
        ),
        'Body': ParagraphStyle(
            'Body', fontName=serif, fontSize=10.5, leading=17,
            textColor=TEXT_COLOR, spaceBefore=0, spaceAfter=6, wordWrap='CJK'
        ),
        'Bullet': ParagraphStyle(
            'Bullet', fontName=serif, fontSize=10, leading=16,
            textColor=HexColor('#444444'), spaceBefore=1, spaceAfter=2,
            leftIndent=18, bulletIndent=6, wordWrap='CJK'
        ),
        'BulletSub': ParagraphStyle(
            'BulletSub', fontName=serif, fontSize=9.5, leading=15,
            textColor=HexColor('#555555'), spaceBefore=1, spaceAfter=1,
            leftIndent=36, bulletIndent=24, wordWrap='CJK'
        ),
        'TOCModule': ParagraphStyle(
            'TOCModule', fontName=sans, fontSize=12, leading=20,
            textColor=PRIMARY_COLOR, spaceBefore=8, spaceAfter=2,
            leftIndent=0, wordWrap='CJK'
        ),
        'TOCSection': ParagraphStyle(
            'TOCSection', fontName=serif, fontSize=10.5, leading=17,
            textColor=TEXT_COLOR, spaceBefore=1, spaceAfter=1,
            leftIndent=24, wordWrap='CJK'
        ),
        'TOCTitle': ParagraphStyle(
            'TOCTitle', fontName=sans, fontSize=22, leading=30,
            textColor=PRIMARY_COLOR, spaceBefore=0, spaceAfter=12,
            alignment=TA_CENTER, wordWrap='CJK'
        ),
        'Footer': ParagraphStyle(
            'Footer', fontName=serif, fontSize=8, leading=10,
            textColor=HexColor('#999999'), alignment=TA_CENTER
        ),
    }


# ============================================================
# 3. 装饰分隔线
# ============================================================

class ColoredDivider(Flowable):
    """带颜色的装饰分隔线"""
    def __init__(self, width, height=2, color=ACCENT_COLOR,
                 dash=None, space_before=6, space_after=6):
        Flowable.__init__(self)
        self.width = width
        self.height = height
        self.color = color
        self.dash = dash
        self.spaceBefore = space_before
        self.spaceAfter = space_after

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.height)
        if self.dash:
            self.canv.setDash(*self.dash)
        self.canv.line(0, 0, self.width, 0)


# ============================================================
# 4. 课程大纲数据
# ============================================================

COURSE_OUTLINE = [
    {
        "module": "模块一：Python 编程基础与环境搭建",
        "sections": [
            {
                "title": "1.1 开发环境配置",
                "points": [
                    "Python 安装与版本管理（pyenv / Anaconda / Miniconda）",
                    "IDE 选择与配置（VS Code / PyCharm / JupyterLab）",
                    "虚拟环境管理（venv / conda env）",
                    "包管理工具（pip / conda / uv）",
                ]
            },
            {
                "title": "1.2 Python 核心语法",
                "points": [
                    "数据类型与数据结构（list / tuple / dict / set）",
                    "控制流（if / for / while / comprehensions）",
                    "函数定义与高阶函数（lambda / map / filter / functools）",
                    "模块与包（import 机制 / __init__.py / 相对导入）",
                ]
            },
            {
                "title": "1.3 面向对象编程",
                "points": [
                    "类与对象（class / __init__ / self）",
                    "继承、多态、封装",
                    "魔术方法（__str__ / __repr__ / __len__ / __getitem__）",
                    "数据类（dataclasses / attrs）",
                ]
            },
            {
                "title": "1.4 Python 进阶特性",
                "points": [
                    "迭代器与生成器",
                    "装饰器",
                    "上下文管理器（with 语句）",
                    "类型注解（Type Hints）",
                    "异常处理与日志（logging）",
                ]
            },
        ]
    },
    {
        "module": "模块二：NumPy 科学计算",
        "sections": [
            {
                "title": "2.1 ndarray 核心概念",
                "points": [
                    "数组创建（array / arange / linspace / zeros / ones）",
                    "数组属性（shape / dtype / ndim / size）",
                    "索引与切片（基本索引 / 布尔索引 / 花式索引）",
                ]
            },
            {
                "title": "2.2 数组运算",
                "points": [
                    "向量化运算与广播机制（Broadcasting）",
                    "数学运算（sum / mean / std / min / max / argmax）",
                    "线性代数（dot / matmul / det / inv / eig）",
                    "随机数生成（random 模块 / seed / 分布）",
                ]
            },
            {
                "title": "2.3 高级应用",
                "points": [
                    "数组重塑（reshape / transpose / flatten）",
                    "拼接与分割（concatenate / stack / split）",
                    "文件 I/O（loadtxt / savetxt / npy / npz）",
                    "性能优化（向量化 vs 循环 / 内存布局 C-order vs F-order）",
                ]
            },
        ]
    },
    {
        "module": "模块三：Pandas 数据处理",
        "sections": [
            {
                "title": "3.1 数据结构基础",
                "points": [
                    "Series 创建与操作",
                    "DataFrame 创建（dict / list / numpy array / 读取文件）",
                    "索引体系（Index / MultiIndex / set_index / reset_index）",
                ]
            },
            {
                "title": "3.2 数据读取与写入",
                "points": [
                    "CSV / Excel / JSON / Parquet 读写",
                    "SQL 数据库交互（SQLAlchemy / read_sql）",
                    "HTML 表格解析 / 剪贴板读取",
                ]
            },
            {
                "title": "3.3 数据清洗与预处理",
                "points": [
                    "缺失值处理（isna / fillna / dropna / interpolate）",
                    "重复值处理（duplicated / drop_duplicates）",
                    "数据类型转换（astype / to_datetime / to_numeric）",
                    "字符串处理（str 访问器 / 正则表达式）",
                ]
            },
            {
                "title": "3.4 数据筛选与变换",
                "points": [
                    "条件筛选（布尔索引 / query / loc / iloc）",
                    "排序（sort_values / sort_index）",
                    "列操作（assign / apply / map / pipe）",
                    "数据合并（merge / join / concat / combine_first）",
                ]
            },
            {
                "title": "3.5 分组聚合",
                "points": [
                    "groupby 基础与高级用法",
                    "聚合函数（agg / transform / apply）",
                    "透视表与交叉表（pivot_table / crosstab）",
                    "窗口函数（rolling / expanding / ewm）",
                ]
            },
            {
                "title": "3.6 时序数据处理",
                "points": [
                    "DatetimeIndex 与时间序列",
                    "重采样（resample / asfreq）",
                    "时区处理（tz_localize / tz_convert）",
                    "时间偏移与周期（Period / DateOffset）",
                ]
            },
        ]
    },
    {
        "module": "模块四：数据可视化",
        "sections": [
            {
                "title": "4.1 Matplotlib 基础",
                "points": [
                    "Figure 与 Axes 体系",
                    "折线图 / 散点图 / 柱状图 / 直方图 / 饼图",
                    "图表定制（标题 / 标签 / 图例 / 颜色 / 样式）",
                    "子图布局（subplot / subplots / GridSpec）",
                ]
            },
            {
                "title": "4.2 Seaborn 统计可视化",
                "points": [
                    "分布图（distplot / kdeplot / histplot）",
                    "关系图（scatterplot / lineplot / relplot）",
                    "分类图（barplot / boxplot / violinplot / swarmplot）",
                    "热力图与聚类图（heatmap / clustermap）",
                    "主题与调色板（set_theme / palette）",
                ]
            },
            {
                "title": "4.3 交互式可视化",
                "points": [
                    "Plotly 基础（Figure / Trace / Layout）",
                    "交互式图表（go.Scatter / go.Bar / go.Pie）",
                    "Plotly Express 快速绑定",
                    "Dash / Streamlit 数据应用搭建入门",
                ]
            },
            {
                "title": "4.4 高级可视化技巧",
                "points": [
                    "地理数据可视化（Folium / GeoPandas）",
                    "网络图可视化（NetworkX + matplotlib）",
                    "大规模数据可视化（Datashader / Vaex）",
                    "可视化最佳实践与配色理论",
                ]
            },
        ]
    },
    {
        "module": "模块五：统计学基础",
        "sections": [
            {
                "title": "5.1 描述统计",
                "points": [
                    "集中趋势（均值 / 中位数 / 众数）",
                    "离散程度（方差 / 标准差 / 极差 / IQR）",
                    "分布形态（偏度 / 峰度）",
                    "相关性分析（Pearson / Spearman / Kendall）",
                ]
            },
            {
                "title": "5.2 概率论基础",
                "points": [
                    "随机变量与概率分布",
                    "常见离散分布（二项 / 泊松 / 几何）",
                    "常见连续分布（正态 / 指数 / 均匀 / 卡方）",
                    "大数定律与中心极限定理",
                    "Python 实现（scipy.stats）",
                ]
            },
            {
                "title": "5.3 推断统计",
                "points": [
                    "参数估计（点估计 / 区间估计 / 置信区间）",
                    "假设检验基础（原假设 / 备择假设 / p 值 / 显著性水平）",
                    "t 检验（单样本 / 独立样本 / 配对样本）",
                    "卡方检验（拟合优度 / 独立性检验）",
                    "ANOVA 方差分析（单因素 / 多因素）",
                    "非参数检验（Mann-Whitney U / Kruskal-Wallis）",
                ]
            },
            {
                "title": "5.4 回归分析",
                "points": [
                    "线性回归（OLS / statsmodels）",
                    "多元回归与变量选择",
                    "逻辑回归",
                    "回归诊断（残差分析 / 多重共线性 / 异方差检验）",
                ]
            },
        ]
    },
    {
        "module": "模块六：机器学习入门",
        "sections": [
            {
                "title": "6.1 机器学习概论",
                "points": [
                    "监督学习 / 无监督学习 / 强化学习",
                    "训练集 / 验证集 / 测试集划分",
                    "交叉验证（KFold / StratifiedKFold）",
                    "评估指标（准确率 / 精确率 / 召回率 / F1 / AUC-ROC）",
                    "过拟合与欠拟合 / 正则化（L1 / L2）",
                ]
            },
            {
                "title": "6.2 监督学习算法",
                "points": [
                    "线性回归与多项式回归",
                    "逻辑回归",
                    "决策树（CART / 剪枝策略）",
                    "随机森林与 Bagging",
                    "梯度提升（XGBoost / LightGBM / CatBoost）",
                    "SVM 支持向量机",
                    "KNN K近邻",
                ]
            },
            {
                "title": "6.3 无监督学习算法",
                "points": [
                    "K-Means 聚类",
                    "层次聚类",
                    "DBSCAN 密度聚类",
                    "PCA 主成分分析",
                    "t-SNE / UMAP 降维可视化",
                ]
            },
            {
                "title": "6.4 特征工程",
                "points": [
                    "特征提取（数值 / 类别 / 文本 / 时间特征）",
                    "特征编码（One-Hot / Label Encoding / Target Encoding）",
                    "特征缩放（StandardScaler / MinMaxScaler / RobustScaler）",
                    "特征选择（过滤法 / 包裹法 / 嵌入法）",
                    "Pipeline 构建（sklearn.pipeline）",
                ]
            },
            {
                "title": "6.5 模型部署入门",
                "points": [
                    "模型持久化（pickle / joblib）",
                    "REST API 部署（FastAPI / Flask）",
                    "ONNX 模型导出",
                ]
            },
        ]
    },
    {
        "module": "模块七：数据工程与工具链",
        "sections": [
            {
                "title": "7.1 SQL 与数据库",
                "points": [
                    "SQL 基础语法（SELECT / JOIN / GROUP BY / 子查询）",
                    "窗口函数（ROW_NUMBER / RANK / LAG / LEAD）",
                    "查询优化（索引 / 执行计划 / EXPLAIN）",
                    "Python 数据库交互（SQLAlchemy / psycopg2 / sqlite3）",
                ]
            },
            {
                "title": "7.2 大数据处理工具",
                "points": [
                    "Polars 高性能 DataFrame（LazyFrame / 惰性求值）",
                    "DuckDB 嵌入式分析数据库",
                    "Apache Spark 基础（PySpark / RDD / DataFrame）",
                    "数据格式进阶（Parquet / Arrow / ORC）",
                ]
            },
            {
                "title": "7.3 数据工程流水线",
                "points": [
                    "ETL 概念与设计模式",
                    "Apache Airflow 工作流编排",
                    "dbt 数据转换",
                    "数据质量监控（Great Expectations）",
                ]
            },
            {
                "title": "7.4 版本控制与协作",
                "points": [
                    "Git 基础（commit / branch / merge / PR）",
                    "DVC 数据版本控制",
                    "MLflow 实验追踪与模型注册",
                    "Jupyter Notebook 最佳实践",
                ]
            },
            {
                "title": "7.5 云计算与部署",
                "points": [
                    "Docker 容器化基础",
                    "云平台概览（AWS / GCP / 阿里云）",
                    "数据仓库概念（BigQuery / Redshift / Snowflake）",
                ]
            },
        ]
    },
    {
        "module": "模块八：综合项目实战",
        "sections": [
            {
                "title": "8.1 项目一：电商用户行为分析",
                "points": [
                    "数据采集与清洗",
                    "用户画像构建（RFM 模型）",
                    "购买转化漏斗分析",
                    "可视化仪表盘搭建",
                ]
            },
            {
                "title": "8.2 项目二：金融风控与信用评分",
                "points": [
                    "特征工程（WOE / IV 特征筛选）",
                    "逻辑回归 / XGBoost 违约预测",
                    "模型评估（KS 值 / ROC-AUC / Gini 系数）",
                    "评分卡模型构建",
                ]
            },
            {
                "title": "8.3 项目三：社交媒体舆情分析",
                "points": [
                    "数据采集（API / 爬虫）",
                    "中文文本预处理（jieba 分词 / 去停用词）",
                    "情感分析（TF-IDF / 词云 / 主题模型 LDA）",
                    "舆情趋势可视化",
                ]
            },
            {
                "title": "8.4 项目四：推荐系统入门",
                "points": [
                    "协同过滤（User-CF / Item-CF）",
                    "基于内容的推荐",
                    "矩阵分解（SVD / ALS）",
                    "评估指标（Precision@K / NDCG / 覆盖率）",
                ]
            },
            {
                "title": "8.5 学习资源与进阶方向",
                "points": [
                    "推荐书籍与在线课程",
                    "Kaggle 竞赛指南",
                    "技术社区与博客",
                    "认证考试（CDA / PMP / AWS Data Analytics）",
                ]
            },
        ]
    },
]


# ============================================================
# 5. PDF 构建函数
# ============================================================

CONTENT_WIDTH = A4[0] - 4 * cm  # 左右边距各 2cm


def build_cover_page(story, styles):
    """构建封面页"""
    story.append(Spacer(1, 6 * cm))
    story.append(Paragraph("Python数据分析学习路线", styles['CoverTitle']))
    story.append(Spacer(1, 0.6 * cm))
    story.append(ColoredDivider(CONTENT_WIDTH, height=3, color=ACCENT_COLOR))
    story.append(Spacer(1, 0.6 * cm))
    story.append(Paragraph("从入门到进阶的完整课程大纲", styles['CoverSubtitle']))
    story.append(Spacer(1, 2.5 * cm))
    story.append(Paragraph(
        "涵盖：数据处理与可视化 | 统计学基础 | 机器学习入门 | 数据工程与工具链",
        styles['CoverInfo']
    ))
    story.append(Spacer(1, 1.2 * cm))
    story.append(Paragraph("2026 版", styles['CoverInfo']))
    story.append(PageBreak())  # 唯一的 PageBreak


def build_toc(story, styles, outline):
    """构建目录页"""
    story.append(Paragraph("目  录", styles['TOCTitle']))
    story.append(ColoredDivider(CONTENT_WIDTH, height=2, color=ACCENT_COLOR))
    story.append(Spacer(1, 0.5 * cm))

    for module in outline:
        story.append(Paragraph(module['module'], styles['TOCModule']))
        for section in module['sections']:
            story.append(Paragraph(section['title'], styles['TOCSection']))

    story.append(Spacer(1, 0.5 * cm))
    story.append(ColoredDivider(CONTENT_WIDTH, height=1, color=DIVIDER_COLOR, dash=[3, 3]))


def build_content(story, styles, outline):
    """构建正文内容"""
    for i, module in enumerate(outline):
        # 模块标题
        story.append(Paragraph(module['module'], styles['H1']))
        story.append(ColoredDivider(CONTENT_WIDTH, height=2, color=ACCENT_COLOR))
        story.append(Spacer(1, 0.3 * cm))

        # 小节
        for section in module['sections']:
            story.append(Paragraph(section['title'], styles['H2']))
            for point in section['points']:
                story.append(Paragraph(f"•  {point}", styles['Bullet']))

        # 模块间分隔（最后一个模块不加）
        if i < len(outline) - 1:
            story.append(Spacer(1, 0.6 * cm))
            story.append(ColoredDivider(
                CONTENT_WIDTH, height=1,
                color=DIVIDER_COLOR, dash=[3, 3]
            ))
            story.append(Spacer(1, 0.3 * cm))


def add_page_number(canvas, doc):
    """在每页底部添加页码（跳过封面页）"""
    if doc.page > 1:
        canvas.saveState()
        canvas.setFont('STSong-Light', 8)
        canvas.setFillColor(HexColor('#999999'))
        page_num = doc.page - 1  # 封面不计页码
        canvas.drawCentredString(A4[0] / 2, 1.5 * cm, f"- {page_num} -")
        canvas.restoreState()


# ============================================================
# 6. 主函数
# ============================================================

def main():
    output_path = '/workspace/Python数据分析学习路线.pdf'

    # 1. 注册字体
    fonts = register_cjk_font()

    # 2. 获取样式
    styles = get_professional_styles(fonts)

    # 3. 创建文档
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=2 * cm,
        rightMargin=2 * cm,
        topMargin=2 * cm,
        bottomMargin=2.5 * cm,
    )

    # 4. 构建内容
    story = []
    build_cover_page(story, styles)
    build_toc(story, styles, COURSE_OUTLINE)
    build_content(story, styles, COURSE_OUTLINE)

    # 5. 生成 PDF
    doc.build(story, onFirstPage=lambda c, d: None, onLaterPages=add_page_number)
    print(f"PDF 已生成: {output_path}")


if __name__ == '__main__':
    main()
