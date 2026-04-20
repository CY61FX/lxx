import { useState } from 'react'
import { Upload, Download, BarChart3, Table, PieChart, LineChart, FileText } from 'lucide-react'

const PracticeTools = () => {
  // 状态管理
  const [activeTool, setActiveTool] = useState('cleaning')
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [dataPreview, setDataPreview] = useState<Record<string, string | number>[]>([])
  const [chartType, setChartType] = useState('bar')
  const [analysisType, setAnalysisType] = useState('descriptive')

  // 模拟数据
  const mockData = [
    { id: 1, name: '张三', age: 25, salary: 5000, department: '销售' },
    { id: 2, name: '李四', age: 30, salary: 6000, department: '技术' },
    { id: 3, name: '王五', age: 35, salary: 7000, department: '销售' },
    { id: 4, name: '赵六', age: 28, salary: 5500, department: '技术' },
    { id: 5, name: '钱七', age: 32, salary: 6500, department: '管理' }
  ]

  // 工具选项
  const tools = [
    { id: 'cleaning', name: '数据清洗', icon: <Table className="w-5 h-5" /> },
    { id: 'visualization', name: '数据可视化', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'analysis', name: '统计分析', icon: <FileText className="w-5 h-5" /> },
    { id: 'import-export', name: '数据导入/导出', icon: <Upload className="w-5 h-5" /> }
  ]

  // 图表类型选项
  const chartTypes = [
    { id: 'bar', name: '柱状图', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'pie', name: '饼图', icon: <PieChart className="w-4 h-4" /> },
    { id: 'line', name: '折线图', icon: <LineChart className="w-4 h-4" /> }
  ]

  // 分析类型选项
  const analysisTypes = [
    { id: 'descriptive', name: '描述性统计' },
    { id: 'correlation', name: '相关性分析' },
    { id: 'regression', name: '回归分析' }
  ]

  // 模拟文件上传
  const handleFileUpload = () => {
    setUploadedFile('sales_data.csv')
    setDataPreview(mockData)
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">数据分析工具</h1>

        {/* 工具选择 */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${activeTool === tool.id ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-100'}`}
            >
              {tool.icon}
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        {/* 工具内容 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* 数据清洗工具 */}
          {activeTool === 'cleaning' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">数据清洗</h2>
              
              {/* 文件上传 */}
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-500 mb-4">点击或拖拽文件到此处上传</p>
                <button
                  onClick={handleFileUpload}
                  className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  选择文件
                </button>
              </div>

              {/* 数据预览 */}
              {uploadedFile && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">数据预览</h3>
                    <span className="text-sm text-neutral-500">{uploadedFile}</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-neutral-50">
                          {Object.keys(dataPreview[0]).map((key) => (
                            <th key={key} className="border border-neutral-200 px-4 py-2 text-left">
                              {key}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataPreview.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                            {Object.values(row).map((value, idx) => (
                              <td key={idx} className="border border-neutral-200 px-4 py-2">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 清洗选项 */}
              {uploadedFile && (
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-4">清洗选项</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="remove-na" className="mr-2" />
                      <label htmlFor="remove-na">移除缺失值</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="remove-duplicates" className="mr-2" />
                      <label htmlFor="remove-duplicates">移除重复值</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="normalize" className="mr-2" />
                      <label htmlFor="normalize">标准化数据</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="encode" className="mr-2" />
                      <label htmlFor="encode">编码分类变量</label>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                      执行清洗
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 数据可视化工具 */}
          {activeTool === 'visualization' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">数据可视化</h2>
              
              {/* 图表类型选择 */}
              <div className="flex flex-wrap gap-4">
                {chartTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setChartType(type.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${chartType === type.id ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                  >
                    {type.icon}
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>

              {/* 数据选择 */}
              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold mb-4">数据选择</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">X轴字段</label>
                    <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="name">姓名</option>
                      <option value="department">部门</option>
                      <option value="age">年龄</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Y轴字段</label>
                    <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="salary">工资</option>
                      <option value="age">年龄</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">颜色分组</label>
                    <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="department">部门</option>
                      <option value="none">无</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 图表预览 */}
              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold mb-4">图表预览</h3>
                <div className="h-80 bg-neutral-50 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-500">图表将在此处显示</p>
                  </div>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-4">
                <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                  生成图表
                </button>
                <button className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-6 rounded-lg hover:bg-neutral-200 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>下载图表</span>
                </button>
              </div>
            </div>
          )}

          {/* 统计分析工具 */}
          {activeTool === 'analysis' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">统计分析</h2>
              
              {/* 分析类型选择 */}
              <div className="flex flex-wrap gap-4">
                {analysisTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setAnalysisType(type.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${analysisType === type.id ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>

              {/* 分析选项 */}
              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold mb-4">分析选项</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">分析字段</label>
                    <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="salary">工资</option>
                      <option value="age">年龄</option>
                    </select>
                  </div>
                  {analysisType === 'correlation' && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">相关字段</label>
                      <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="age">年龄</option>
                        <option value="salary">工资</option>
                      </select>
                    </div>
                  )}
                  {analysisType === 'regression' && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">自变量</label>
                      <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="age">年龄</option>
                        <option value="department">部门</option>
                      </select>
                    </div>
                  )}
                  {analysisType === 'regression' && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">因变量</label>
                      <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="salary">工资</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* 分析结果 */}
              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold mb-4">分析结果</h3>
                <div className="bg-neutral-50 p-4 rounded">
                  <pre className="text-sm font-mono">
{analysisType === 'descriptive' && `
统计描述:

工资:
- 均值: 6000.00
- 标准差: 707.11
- 最小值: 5000.00
- 最大值: 7000.00
- 中位数: 6000.00

年龄:
- 均值: 30.00
- 标准差: 3.87
- 最小值: 25.00
- 最大值: 35.00
- 中位数: 30.00
`}
{analysisType === 'correlation' && `
相关性分析:

工资与年龄的相关系数: 0.97

p值: 0.003

结论: 工资与年龄呈显著正相关
`}
{analysisType === 'regression' && `
回归分析:

模型: 工资 = 3500 + 83.33 * 年龄

R²: 0.94

p值: 0.003

结论: 年龄对工资有显著影响
`}
                  </pre>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-4">
                <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                  执行分析
                </button>
                <button className="flex items-center space-x-2 bg-neutral-100 text-neutral-700 font-medium py-2 px-6 rounded-lg hover:bg-neutral-200 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>下载结果</span>
                </button>
              </div>
            </div>
          )}

          {/* 数据导入/导出工具 */}
          {activeTool === 'import-export' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">数据导入/导出</h2>
              
              {/* 数据导入 */}
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold mb-4">数据导入</h3>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-500 mb-4">点击或拖拽文件到此处上传</p>
                  <p className="text-sm text-neutral-400 mb-4">支持 CSV, Excel, JSON 格式</p>
                  <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                    选择文件
                  </button>
                </div>
              </div>

              {/* 数据导出 */}
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold mb-4">数据导出</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">导出格式</label>
                    <select className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="csv">CSV</option>
                      <option value="excel">Excel</option>
                      <option value="json">JSON</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">导出内容</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="export-all" className="mr-2" checked />
                        <label htmlFor="export-all">导出所有数据</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="export-filtered" className="mr-2" />
                        <label htmlFor="export-filtered">仅导出筛选后的数据</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="flex items-center space-x-2 bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>导出数据</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PracticeTools
