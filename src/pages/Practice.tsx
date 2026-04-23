import { Link } from 'react-router-dom'
import { Code, BarChart3, FileCode, ChevronRight } from 'lucide-react'

const Practice = () => {
  // 模拟实验项目数据
  const projects = [
    {
      id: 1,
      title: '销售数据分析',
      description: '分析销售数据，找出销售趋势和潜在机会',
      difficulty: '初级',
      status: 'completed',
      progress: 100
    },
    {
      id: 2,
      title: '客户细分',
      description: '使用聚类算法对客户进行细分',
      difficulty: '中级',
      status: 'in-progress',
      progress: 60
    },
    {
      id: 3,
      title: '预测销售',
      description: '使用时间序列分析预测未来销售趋势',
      difficulty: '高级',
      status: 'pending',
      progress: 0
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">练习环境</h1>

        {/* 练习模块 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/practice/editor"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Python编辑器</h3>
            <p className="text-neutral-500 mb-4">在线编写和执行Python代码，支持数据分析库</p>
            <div className="flex items-center text-primary">
              <span>开始使用</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </Link>

          <Link
            to="/practice/tools"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">数据分析工具</h3>
            <p className="text-neutral-500 mb-4">数据清洗、可视化、统计分析等工具</p>
            <div className="flex items-center text-primary">
              <span>开始使用</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </Link>

          <Link
            to="#"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FileCode className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">实验项目</h3>
            <p className="text-neutral-500 mb-4">基于真实场景的数据分析项目</p>
            <div className="flex items-center text-primary">
              <span>开始使用</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </Link>
        </div>

        {/* 实验项目 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">实验项目</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-neutral-500 text-sm mb-2">{project.description}</p>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${project.difficulty === '初级' ? 'bg-blue-100 text-blue-800' : project.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {project.difficulty}
                      </span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === 'completed' ? 'bg-green-100 text-green-800' : project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-neutral-100 text-neutral-800'}`}>
                      {project.status === 'completed' ? '已完成' : project.status === 'in-progress' ? '进行中' : '未开始'}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>完成进度</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                    {project.status === 'completed' ? '查看项目' : '开始项目'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice
