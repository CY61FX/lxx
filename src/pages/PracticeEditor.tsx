import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Save, Download, Upload, Code, ChevronDown, ChevronUp } from 'lucide-react'

const PracticeEditor = () => {
  // 状态管理
  const [code, setCode] = useState(`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建示例数据
data = {
    '月份': ['1月', '2月', '3月', '4月', '5月', '6月'],
    '销售额': [10000, 12000, 15000, 18000, 20000, 25000],
    '利润': [2000, 2400, 3000, 3600, 4000, 5000]
}

# 创建DataFrame
df = pd.DataFrame(data)

# 打印数据
print("销售数据:")
print(df)

# 计算总销售额和总利润
total_sales = df['销售额'].sum()
total_profit = df['利润'].sum()

print(f"\n总销售额: {total_sales}")
print(f"总利润: {total_profit}")
print(f"利润率: {total_profit/total_sales*100:.2f}%")

# 绘制销售额和利润图表
plt.figure(figsize=(10, 6))
plt.plot(df['月份'], df['销售额'], label='销售额', marker='o')
plt.plot(df['月份'], df['利润'], label='利润', marker='s')
plt.title('销售趋势')
plt.xlabel('月份')
plt.ylabel('金额')
plt.legend()
plt.grid(True)
plt.show()`)
  const [output, setOutput] = useState('')
  const [isExecuting, setIsExecuting] = useState(false)
  const [showExamples, setShowExamples] = useState(false)

  // 示例代码
  const examples = [
    {
      title: '数据清洗',
      code: `import pandas as pd

# 创建示例数据
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七'],
    '年龄': [25, None, 30, 35, 40],
    '工资': [5000, 6000, None, 8000, 9000],
    '部门': ['销售', '技术', '销售', '技术', '管理']
}

df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 处理缺失值
df['年龄'] = df['年龄'].fillna(df['年龄'].mean())
df['工资'] = df['工资'].fillna(df['工资'].mean())

print("\n处理后的数据:")
print(df)

# 按部门分组计算平均工资
dept_avg = df.groupby('部门')['工资'].mean()
print("\n各部门平均工资:")
print(dept_avg)`
    },
    {
      title: '数据可视化',
      code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 创建示例数据
data = {
    '类别': ['A', 'B', 'C', 'D', 'E'],
    '数值1': [10, 20, 30, 40, 50],
    '数值2': [15, 25, 35, 45, 55]
}

df = pd.DataFrame(data)

# 设置风格
sns.set(style="whitegrid")

# 绘制柱状图
plt.figure(figsize=(10, 6))
sns.barplot(x='类别', y='数值1', data=df, label='数值1')
sns.barplot(x='类别', y='数值2', data=df, label='数值2')
plt.title('柱状图示例')
plt.legend()
plt.show()

# 绘制散点图
plt.figure(figsize=(10, 6))
sns.scatterplot(x='数值1', y='数值2', data=df, s=100)
plt.title('散点图示例')
plt.show()`
    },
    {
      title: '统计分析',
      code: `import pandas as pd
import numpy as np
from scipy import stats

# 创建示例数据
np.random.seed(42)
data = {
    'A组': np.random.normal(100, 10, 50),
    'B组': np.random.normal(105, 10, 50)
}

df = pd.DataFrame(data)

print("A组统计描述:")
print(df['A组'].describe())
print("\nB组统计描述:")
print(df['B组'].describe())

# t检验
statistic, p_value = stats.ttest_ind(df['A组'], df['B组'])
print(f"\nt检验结果:")
print(f"统计量: {statistic:.4f}")
print(f"p值: {p_value:.4f}")

if p_value < 0.05:
    print("两组数据存在显著差异")
else:
    print("两组数据不存在显著差异")`
    }
  ]

  // 执行代码
  const executeCode = () => {
    setIsExecuting(true)
    setOutput('正在执行...')
    
    // 模拟代码执行
    setTimeout(() => {
      setOutput(`销售数据:
   月份    销售额   利润
0   1月  10000  2000
1   2月  12000  2400
2   3月  15000  3000
3   4月  18000  3600
4   5月  20000  4000
5   6月  25000  5000

总销售额: 100000
总利润: 20000
利润率: 20.00%

图表已生成`)
      setIsExecuting(false)
    }, 1000)
  }

  // 加载示例代码
  const loadExample = (exampleCode: string) => {
    setCode(exampleCode)
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Python编辑器</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* 工具栏 */}
          <div className="bg-neutral-50 border-b border-neutral-200 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={executeCode}
                disabled={isExecuting}
                className="flex items-center space-x-2 bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="w-4 h-4" />
                <span>执行</span>
              </button>
              <button className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors">
                <Save className="w-4 h-4" />
                <span>保存</span>
              </button>
              <button className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors">
                <Download className="w-4 h-4" />
                <span>下载</span>
              </button>
              <button className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors">
                <Upload className="w-4 h-4" />
                <span>上传</span>
              </button>
            </div>
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>示例代码</span>
              {showExamples ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* 示例代码下拉菜单 */}
          {showExamples && (
            <div className="border-b border-neutral-200 p-4 bg-neutral-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {examples.map((example, index) => (
                  <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
                    <h3 className="font-semibold mb-2">{example.title}</h3>
                    <button
                      onClick={() => loadExample(example.code)}
                      className="text-primary text-sm hover:underline"
                    >
                      加载示例
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 编辑器和输出区域 */}
          <div className="flex flex-col md:flex-row">
            {/* 代码编辑器 */}
            <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-neutral-200">
              <div className="h-[600px]">
                <Editor
                  height="100%"
                  language="python"
                  theme="vs-light"
                  value={code}
                  onChange={setCode}
                  options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    tabSize: 4,
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>

            {/* 输出区域 */}
            <div className="md:w-1/2">
              <div className="p-4 border-b border-neutral-200 font-medium">
                输出结果
              </div>
              <div className="h-[546px] p-4 overflow-auto bg-neutral-50 font-mono text-sm">
                {output || '执行代码以查看输出'}
              </div>
            </div>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">提示</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>支持Python 3.8+语法</li>
            <li>内置了pandas、numpy、matplotlib、seaborn等数据分析库</li>
            <li>代码执行时间限制为30秒</li>
            <li>每个会话最多执行100次代码</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PracticeEditor
