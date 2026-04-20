import { useState } from 'react'
import { User, Settings, Award, Book, Calendar, ChevronDown, ChevronUp, Edit, Save, Upload } from 'lucide-react'

const Profile = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState('info')
  const [isEditing, setIsEditing] = useState(false)
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null)

  // 个人信息数据
  const userInfo = {
    name: '张三',
    email: 'zhangsan@example.com',
    studentId: '2021001',
    major: '商务数据分析与应用',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20portrait&image_size=square',
    bio: '热爱数据分析，希望将来成为一名数据分析师。'
  }

  // 成就数据
  const achievements = [
    {
      id: 1,
      name: 'Python基础入门',
      description: '完成Python基础课程',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20beginner%20badge&image_size=square',
      unlockedAt: '2024-01-10',
      progress: 100
    },
    {
      id: 2,
      name: '数据分析新手',
      description: '完成数据分析基础课程',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20badge&image_size=square',
      unlockedAt: '2024-01-15',
      progress: 100
    },
    {
      id: 3,
      name: '可视化大师',
      description: '完成数据可视化课程',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20badge&image_size=square',
      unlockedAt: null,
      progress: 60
    }
  ]

  // 学习记录数据
  const learningRecords = [
    {
      id: 1,
      courseTitle: 'Python数据分析基础',
      instructor: '张教授',
      completedAt: '2024-01-10',
      certificateUrl: '#'
    },
    {
      id: 2,
      courseTitle: '商务数据可视化',
      instructor: '李老师',
      completedAt: '2024-01-15',
      certificateUrl: '#'
    },
    {
      id: 3,
      courseTitle: '机器学习在商务中的应用',
      instructor: '王博士',
      completedAt: null,
      certificateUrl: null
    }
  ]

  // 切换成就展开/折叠
  const toggleAchievement = (id: number) => {
    setExpandedAchievement(expandedAchievement === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">个人中心</h1>

        {/* 个人信息卡片 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={userInfo.avatar}
                  alt={userInfo.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 shadow-md">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-1 text-primary hover:underline"
                >
                  <Edit className="w-4 h-4" />
                  <span>{isEditing ? '取消' : '编辑'}</span>
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <span className="w-24 text-neutral-500">邮箱:</span>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userInfo.email}
                      className="border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  ) : (
                    <span>{userInfo.email}</span>
                  )}
                </div>
                <div className="flex">
                  <span className="w-24 text-neutral-500">学号:</span>
                  <span>{userInfo.studentId}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-neutral-500">专业:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userInfo.major}
                      className="border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  ) : (
                    <span>{userInfo.major}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 mb-1">个人简介:</span>
                  {isEditing ? (
                    <textarea
                      value={userInfo.bio}
                      className="border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                      rows={3}
                    />
                  ) : (
                    <p>{userInfo.bio}</p>
                  )}
                </div>
              </div>
              {isEditing && (
                <div className="mt-4">
                  <button className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                    保存
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'info' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>个人信息</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'achievements' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>成就系统</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'records' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              <div className="flex items-center space-x-2">
                <Book className="w-5 h-5" />
                <span>学习记录</span>
              </div>
            </button>
          </div>
        </div>

        {/* 个人信息标签页 */}
        {activeTab === 'info' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">账号设置</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">基本信息</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>用户名</span>
                    <span className="text-neutral-500">{userInfo.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>邮箱</span>
                    <span className="text-neutral-500">{userInfo.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>学号</span>
                    <span className="text-neutral-500">{userInfo.studentId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>专业</span>
                    <span className="text-neutral-500">{userInfo.major}</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <h3 className="font-medium mb-4">安全设置</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>修改密码</span>
                    <button className="text-primary hover:underline">修改</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>绑定手机</span>
                    <button className="text-primary hover:underline">绑定</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>第三方账号</span>
                    <div className="flex space-x-4">
                      <button className="text-neutral-500 hover:text-primary">微信</button>
                      <button className="text-neutral-500 hover:text-primary">QQ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <h3 className="font-medium mb-4">通知设置</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>课程更新通知</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>作业截止通知</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>社区消息通知</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 成就系统标签页 */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">我的成就</h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="flex items-center p-4 cursor-pointer" onClick={() => toggleAchievement(achievement.id)}>
                      <img
                        src={achievement.icon}
                        alt={achievement.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{achievement.name}</h3>
                          {achievement.unlockedAt ? (
                            <span className="text-green-500 text-sm">已解锁</span>
                          ) : (
                            <span className="text-yellow-500 text-sm">进行中</span>
                          )}
                        </div>
                        <p className="text-neutral-500 text-sm mb-2">{achievement.description}</p>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform ${expandedAchievement === achievement.id ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedAchievement === achievement.id && (
                      <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">解锁进度</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          {achievement.unlockedAt && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500">解锁时间</span>
                              <span>{achievement.unlockedAt}</span>
                            </div>
                          )}
                          <div>
                            <span className="text-neutral-500 block mb-2">解锁条件</span>
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>完成Python基础课程</li>
                              <li>通过课程考试</li>
                              <li>完成所有练习</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">排行榜</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="px-4 py-2 text-left">排名</th>
                      <th className="px-4 py-2 text-left">用户</th>
                      <th className="px-4 py-2 text-left">成就点数</th>
                      <th className="px-4 py-2 text-left">等级</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%201&image_size=square"
                            alt="用户1"
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span>李四</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">1250</td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          钻石
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%202&image_size=square"
                            alt="用户2"
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span>王五</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">1120</td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          钻石
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 bg-blue-50">
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src={userInfo.avatar}
                            alt={userInfo.name}
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span className="font-medium">{userInfo.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">980</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                          白金
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%203&image_size=square"
                            alt="用户3"
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span>赵六</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">850</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                          白金
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img
                            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%204&image_size=square"
                            alt="用户4"
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span>钱七</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">720</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                          白金
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 学习记录标签页 */}
        {activeTab === 'records' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">学习记录</h2>
            <div className="space-y-4">
              {learningRecords.map((record) => (
                <div key={record.id} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{record.courseTitle}</h3>
                    {record.completedAt ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        已完成
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        进行中
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neutral-500">讲师: {record.instructor}</span>
                    {record.completedAt && (
                      <span className="text-neutral-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        完成于: {record.completedAt}
                      </span>
                    )}
                  </div>
                  {record.certificateUrl && (
                    <div className="flex justify-end">
                      <a
                        href={record.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-primary hover:underline"
                      >
                        <Book className="w-4 h-4" />
                        <span>查看证书</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
