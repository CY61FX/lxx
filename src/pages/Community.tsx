import { useState } from 'react'
import { MessageSquare, HelpCircle, ChevronDown, ChevronUp, Search, User, Clock, Heart, MessageCircle } from 'lucide-react'

const Community = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState('discussions')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [expandedDiscussion, setExpandedDiscussion] = useState<number | null>(null)

  // 讨论区数据
  const discussions = [
    {
      id: 1,
      title: 'Python数据分析库推荐',
      content: '大家好，我是一名商务数据分析专业的学生，想了解一下有哪些常用的Python数据分析库？除了Pandas和NumPy之外，还有哪些值得学习的库？',
      user: '李明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20portrait&image_size=square',
      date: '2024-01-15',
      category: '学习讨论',
      replies: 12,
      likes: 8,
      repliesList: [
        {
          id: 1,
          user: '王芳',
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20female%20student%20portrait&image_size=square',
          date: '2024-01-15',
          content: '除了Pandas和NumPy，还有Matplotlib、Seaborn用于数据可视化，Scikit-learn用于机器学习，这些都是非常常用的库。'
        },
        {
          id: 2,
          user: '张伟',
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=male%20student%20portrait&image_size=square',
          date: '2024-01-15',
          content: '我推荐学习Plotly，它可以创建交互式图表，非常适合商务展示。'
        }
      ]
    },
    {
      id: 2,
      title: '如何处理缺失值？',
      content: '在分析销售数据时，遇到了很多缺失值，请问有哪些处理缺失值的方法？哪种方法效果最好？',
      user: '陈静',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=female%20student%20portrait&image_size=square',
      date: '2024-01-14',
      category: '技术问题',
      replies: 8,
      likes: 5,
      repliesList: []
    },
    {
      id: 3,
      title: '分享一个数据分析项目',
      content: '我最近完成了一个基于Python的销售数据分析项目，使用了Pandas和Matplotlib，分析了公司过去一年的销售数据，发现了一些有趣的趋势。想和大家分享一下我的经验。',
      user: '刘强',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20man%20portrait&image_size=square',
      date: '2024-01-13',
      category: '项目分享',
      replies: 15,
      likes: 12,
      repliesList: []
    }
  ]

  // 问答区数据
  const questions = [
    {
      id: 1,
      title: 'Python中如何高效处理大型数据集？',
      content: '我在处理一个包含100万行数据的CSV文件时，使用Pandas读取非常慢，有什么方法可以提高处理速度？',
      user: '赵小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20portrait&image_size=square',
      date: '2024-01-15',
      answers: 5,
      likes: 10,
      status: '已解决'
    },
    {
      id: 2,
      title: '如何用Matplotlib创建美观的商务图表？',
      content: '我需要为课程作业创建一些商务风格的图表，但是Matplotlib默认的样式不够美观，有什么方法可以美化图表？',
      user: '孙小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20female%20student%20portrait&image_size=square',
      date: '2024-01-14',
      answers: 3,
      likes: 6,
      status: '未解决'
    },
    {
      id: 3,
      title: '机器学习模型选择问题',
      content: '我在做一个客户流失预测模型，应该选择哪种机器学习算法？数据量大约有10万条记录。',
      user: '周大伟',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=male%20student%20portrait&image_size=square',
      date: '2024-01-13',
      answers: 7,
      likes: 15,
      status: '已解决'
    }
  ]

  // 分类选项
  const categories = ['全部', '学习讨论', '技术问题', '项目分享', '求职经验', '其他']

  // 切换讨论展开/折叠
  const toggleDiscussion = (id: number) => {
    setExpandedDiscussion(expandedDiscussion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">社区论坛</h1>

        {/* 标签页导航 */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'discussions' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>讨论区</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'questions' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5" />
                <span>问答区</span>
              </div>
            </button>
          </div>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="搜索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              发布
            </button>
          </div>
        </div>

        {/* 讨论区 */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold text-lg mr-2">{discussion.title}</h3>
                          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                            {discussion.category}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-neutral-500 mb-2">
                          <span>{discussion.user}</span>
                          <span className="mx-2">·</span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {discussion.date}
                          </span>
                        </div>
                        <p className="text-neutral-600 mb-4">{discussion.content}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-neutral-500 hover:text-primary transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{discussion.likes}</span>
                          </button>
                          <button
                            onClick={() => toggleDiscussion(discussion.id)}
                            className="flex items-center space-x-1 text-neutral-500 hover:text-primary transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {discussion.repliesList.length > 0 && (
                      <button
                        onClick={() => toggleDiscussion(discussion.id)}
                        className="text-neutral-500 hover:text-primary"
                      >
                        {expandedDiscussion === discussion.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    )}
                  </div>
                  
                  {/* 回复列表 */}
                  {expandedDiscussion === discussion.id && discussion.repliesList.length > 0 && (
                    <div className="mt-4 pl-16 border-t border-neutral-200 pt-4 space-y-4">
                      {discussion.repliesList.map((reply) => (
                        <div key={reply.id} className="flex space-x-3">
                          <img
                            src={reply.avatar}
                            alt={reply.user}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center text-sm mb-1">
                              <span className="font-medium">{reply.user}</span>
                              <span className="mx-2 text-neutral-400">·</span>
                              <span className="text-neutral-500">{reply.date}</span>
                            </div>
                            <p className="text-neutral-600 text-sm">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex space-x-3">
                        <img
                          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar&image_size=square"
                          alt="You"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <textarea
                            placeholder="写下你的回复..."
                            className="w-full border border-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            rows={3}
                          ></textarea>
                          <div className="flex justify-end mt-2">
                            <button className="bg-primary text-white font-medium py-1 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                              回复
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 问答区 */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={question.avatar}
                    alt={question.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{question.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${question.status === '已解决' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {question.status}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <span>{question.user}</span>
                      <span className="mx-2">·</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {question.date}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">{question.content}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-neutral-500 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{question.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-neutral-500 hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{question.answers} 个回答</span>
                      </button>
                      <button className="text-primary hover:underline">
                        查看回答
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
