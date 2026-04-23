import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, ChevronDown, Search } from 'lucide-react'

const Courses = () => {
  // 模拟课程数据
  const courses = [
    {
      id: 1,
      title: 'Python数据分析基础',
      description: '从零开始学习Python数据分析，掌握NumPy、Pandas等核心库',
      instructor: '张教授',
      rating: 4.8,
      students: 1200,
      price: 99,
      category: 'Python基础',
      difficulty: '初级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: '商务数据可视化',
      description: '使用Matplotlib和Seaborn创建专业的数据可视化图表',
      instructor: '李老师',
      rating: 4.6,
      students: 850,
      price: 79,
      category: '数据可视化',
      difficulty: '中级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20visualization%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: '机器学习在商务中的应用',
      description: '学习如何将机器学习技术应用于商务决策',
      instructor: '王博士',
      rating: 4.9,
      students: 600,
      price: 129,
      category: '机器学习',
      difficulty: '高级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20business%20application%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 4,
      title: 'Python编程进阶',
      description: '深入学习Python高级特性，包括装饰器、生成器、上下文管理器等',
      instructor: '赵老师',
      rating: 4.7,
      students: 950,
      price: 89,
      category: 'Python基础',
      difficulty: '中级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20advanced%20programming%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 5,
      title: '商务数据分析实战',
      description: '通过真实案例学习商务数据分析方法和技巧',
      instructor: '刘教授',
      rating: 4.8,
      students: 750,
      price: 109,
      category: '商务分析',
      difficulty: '中级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20practice%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 6,
      title: '大数据分析与处理',
      description: '学习如何处理和分析大规模数据集',
      instructor: '陈博士',
      rating: 4.6,
      students: 500,
      price: 119,
      category: '数据分析',
      difficulty: '高级',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Big%20data%20analysis%20course%20cover&image_size=landscape_4_3'
    }
  ]

  // 状态管理
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部')
  const [sortBy, setSortBy] = useState('热度')
  const [searchTerm, setSearchTerm] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // 课程分类选项
  const categories = ['全部', 'Python基础', '数据分析', '数据可视化', '机器学习', '商务分析']
  // 难度选项
  const difficulties = ['全部', '初级', '中级', '高级']
  // 排序选项
  const sortOptions = ['热度', '最新', '价格低到高', '价格高到低', '评分']

  // 过滤和排序课程
  const filteredCourses = courses
    .filter(course => {
      const matchesCategory = selectedCategory === '全部' || course.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === '全部' || course.difficulty === selectedDifficulty
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesDifficulty && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case '热度':
          return b.students - a.students
        case '最新':
          return b.id - a.id
        case '价格低到高':
          return a.price - b.price
        case '价格高到低':
          return b.price - a.price
        case '评分':
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">课程中心</h1>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="搜索课程..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 bg-neutral-100 hover:bg-neutral-200 transition-colors px-4 py-2 rounded-lg"
              >
                <Filter className="w-5 h-5" />
                <span>筛选</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* 筛选选项 */}
          {isFilterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">课程分类</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">难度级别</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">排序方式</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 课程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <span className="bg-neutral-100 text-neutral-600 text-xs font-medium px-2 py-1 rounded">
                    {course.difficulty}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-600 text-sm">{course.instructor}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-medium">{course.rating}</span>
                    <span className="text-neutral-400 text-sm ml-1">({course.students})</span>
                  </div>
                </div>
                <div className="text-primary font-bold">¥{course.price}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 空状态 */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-500">没有找到符合条件的课程</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses
