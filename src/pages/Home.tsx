import { Link } from 'react-router-dom';
import { Book, Code, BarChart3, Database, TrendingUp, Zap, Calendar, Clock, Award } from 'lucide-react';

export default function Home() {
  // 模拟课程分类数据
  const courseCategories = [
    { id: 1, name: 'Python基础', icon: <Code className="w-8 h-8" />, description: 'Python编程语言基础语法和核心概念' },
    { id: 2, name: '数据分析', icon: <BarChart3 className="w-8 h-8" />, description: '使用Python进行数据清洗、分析和可视化' },
    { id: 3, name: '机器学习', icon: <TrendingUp className="w-8 h-8" />, description: '机器学习算法原理和实践应用' },
    { id: 4, name: '数据可视化', icon: <Zap className="w-8 h-8" />, description: '使用Matplotlib、Seaborn等工具创建数据可视化' },
    { id: 5, name: '数据库', icon: <Database className="w-8 h-8" />, description: 'SQL数据库操作和数据管理' },
    { id: 6, name: '商务分析', icon: <Book className="w-8 h-8" />, description: '基于数据分析的商务决策支持' },
  ];

  // 模拟推荐课程数据
  const recommendedCourses = [
    { id: 1, title: 'Python数据分析入门', instructor: '张教授', difficulty: '初级', rating: 4.8, students: 1200, cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20charts%20and%20code&image_size=landscape_4_3' },
    { id: 2, title: '商务数据可视化实战', instructor: '李博士', difficulty: '中级', rating: 4.6, students: 850, cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20visualization%20course%20cover%20with%20dashboard&image_size=landscape_4_3' },
    { id: 3, title: '机器学习在商务中的应用', instructor: '王教授', difficulty: '高级', rating: 4.9, students: 620, cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20business%20application%20course%20cover&image_size=landscape_4_3' },
    { id: 4, title: 'SQL数据库与数据管理', instructor: '赵老师', difficulty: '初级', rating: 4.7, students: 980, cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20course%20cover%20with%20database%20schema&image_size=landscape_4_3' },
  ];

  // 模拟最新动态数据
  const latestNews = [
    { id: 1, title: '平台新增10门数据分析课程', date: '2024-01-15', description: '新增Python进阶、数据挖掘等热门课程，满足不同层次学习需求' },
    { id: 2, title: '实践环境功能升级', date: '2024-01-10', description: '新增实时数据可视化工具，支持更多Python库和数据分析功能' },
    { id: 3, title: '冬季学习挑战活动开始', date: '2024-01-05', description: '参与学习挑战，完成课程获得限量徽章和学习奖励' },
    { id: 4, title: '教师招募计划启动', date: '2023-12-28', description: '诚邀数据分析领域专家加入，共同打造优质课程内容' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              掌握Python数据分析，开启商务智能未来
            </h1>
            <p className="text-xl mb-8">
              专为商务数据分析与应用专业学生设计的在线教育平台，提供系统化的课程体系、互动式学习模块和实践环境。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center">
                浏览课程
              </Link>
              <Link to="/practice" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center">
                实践环境
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 课程分类 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${category.name}`}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-neutral-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 推荐课程 */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">推荐课程</h2>
            <Link to="/courses" className="text-blue-600 hover:underline font-medium">
              查看全部
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={course.cover} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{course.instructor}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm px-2 py-1 rounded-full ${course.difficulty === '初级' ? 'bg-green-100 text-green-800' : course.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {course.difficulty}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-neutral-400 text-sm ml-2">({course.students})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">最新动态</h2>
          <div className="max-w-3xl mx-auto">
            {latestNews.map((news, index) => (
              <div key={news.id} className="flex mb-8 relative">
                {index < latestNews.length - 1 && (
                  <div className="absolute left-6 top-8 w-0.5 h-full bg-neutral-200"></div>
                )}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold mr-4">{news.title}</h3>
                    <span className="text-neutral-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <p className="text-neutral-600">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 平台特色 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">平台特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">完整的课程体系</h3>
              <p className="text-neutral-600">从基础到进阶的系统化课程，覆盖Python数据分析全领域</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">互动式学习模块</h3>
              <p className="text-neutral-600">实时代码编辑、数据可视化和实验项目，提升实践能力</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">学练测评一体化</h3>
              <p className="text-neutral-600">学习、练习、测评无缝衔接，巩固知识掌握程度</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">成就激励系统</h3>
              <p className="text-neutral-600">徽章、排行榜和学习成就，激发学习动力和成就感</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}