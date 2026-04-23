import { Link } from 'react-router-dom';
import { Code, Brain, BarChart2, MessageSquare, Award, ChevronRight } from 'lucide-react';

const Home = () => {
  // 10个梯度项目数据
  const projects = [
    { id: 1, title: '销售数据分析', description: '基础数据处理与可视化', level: '初级' },
    { id: 2, title: '客户分群分析', description: '聚类算法应用', level: '初级' },
    { id: 3, title: '股票趋势预测', description: '时间序列分析', level: '中级' },
    { id: 4, title: '电商用户行为分析', description: '用户画像构建', level: '中级' },
    { id: 5, title: '营销效果评估', description: 'A/B测试分析', level: '中级' },
    { id: 6, title: '供应链优化', description: '线性规划应用', level: '高级' },
    { id: 7, title: '金融风险评估', description: '分类算法应用', level: '高级' },
    { id: 8, title: '医疗数据预测', description: '回归分析应用', level: '高级' },
    { id: 9, title: '社交媒体情感分析', description: '自然语言处理', level: '高级' },
    { id: 10, title: '推荐系统构建', description: '协同过滤算法', level: '高级' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Python数据分析AI训练平台
            </h1>
            <p className="text-xl mb-8">
              基于Cloudflare免费架构，实现"3步认知+10个梯度项目+AI错题倒逼"的Python数据分析实操训练，零成本、零运维、打开浏览器即可使用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/guide" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center">
                开始学习
              </Link>
              <Link to="/projects" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
                项目实战
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 核心特色 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">浏览器端Python</h3>
              <p className="text-gray-600">无需后端服务器，直接在浏览器中运行Python代码</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI智能陪练</h3>
              <p className="text-gray-600">严格的AI提示词规范，引导式学习而非直接给答案</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10个梯度项目</h3>
              <p className="text-gray-600">从初级到高级的完整项目体系，覆盖数据分析全领域</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">零成本部署</h3>
              <p className="text-gray-600">基于Cloudflare免费套餐，无需任何付费服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10个梯度项目 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">10个梯度项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{project.id}. {project.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.level === '初级' ? 'bg-green-100 text-green-800' : project.level === '中级' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {project.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>查看详情</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">学习路径</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">第一天：底层认知</h3>
                  <p className="text-gray-600">学习数据分析思维模型、行业争议和辨析题，建立正确的数据分析认知框架</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2-11天：项目实战</h3>
                  <p className="text-gray-600">每天完成一个梯度项目，从初级到高级，逐步掌握数据分析技能</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI错题倒逼</h3>
                  <p className="text-gray-600">通过AI陪练功能，针对错误进行深入分析，强化学习效果</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始你的数据分析之旅</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            零成本、零运维，打开浏览器即可开始学习。从基础到高级，掌握Python数据分析核心技能。
          </p>
          <Link to="/guide" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-block">
            立即开始
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
