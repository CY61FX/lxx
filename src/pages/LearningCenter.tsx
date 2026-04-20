import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Book, Clock, Check, AlertCircle, Award, BarChart2, Calendar } from 'lucide-react'

const LearningCenter = () => {
  // 模拟学习进度数据
  const learningProgress = {
    totalCourses: 5,
    completedCourses: 2,
    inProgressCourses: 3,
    totalLessons: 120,
    completedLessons: 45,
    totalHours: 60,
    completedHours: 25
  }

  // 模拟课程进度数据
  const courses = [
    {
      id: 1,
      title: 'Python数据分析基础',
      instructor: '张教授',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      totalHours: 40,
      completedHours: 30,
      status: 'in-progress',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: '商务数据可视化',
      instructor: '李老师',
      progress: 100,
      totalLessons: 18,
      completedLessons: 18,
      totalHours: 30,
      completedHours: 30,
      status: 'completed',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20visualization%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: '机器学习在商务中的应用',
      instructor: '王博士',
      progress: 30,
      totalLessons: 20,
      completedLessons: 6,
      totalHours: 35,
      completedHours: 10.5,
      status: 'in-progress',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20business%20application%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 4,
      title: 'Python编程进阶',
      instructor: '赵老师',
      progress: 100,
      totalLessons: 16,
      completedLessons: 16,
      totalHours: 25,
      completedHours: 25,
      status: 'completed',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20advanced%20programming%20course%20cover&image_size=landscape_4_3'
    },
    {
      id: 5,
      title: '商务数据分析实战',
      instructor: '刘教授',
      progress: 10,
      totalLessons: 22,
      completedLessons: 2,
      totalHours: 38,
      completedHours: 3.8,
      status: 'in-progress',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20practice%20course%20cover&image_size=landscape_4_3'
    }
  ]

  // 模拟作业数据
  const assignments = [
    {
      id: 1,
      courseId: 1,
      courseTitle: 'Python数据分析基础',
      title: '第3章练习：数据清洗',
      description: '使用Pandas对提供的数据集进行清洗和预处理',
      deadline: '2024-01-20',
      status: 'pending',
      submittedAt: null,
      grade: null
    },
    {
      id: 2,
      courseId: 3,
      courseTitle: '机器学习在商务中的应用',
      title: '第2章练习：线性回归',
      description: '使用scikit-learn实现线性回归模型，并分析结果',
      deadline: '2024-01-25',
      status: 'pending',
      submittedAt: null,
      grade: null
    },
    {
      id: 3,
      courseId: 1,
      courseTitle: 'Python数据分析基础',
      title: '第2章练习：NumPy数组操作',
      description: '使用NumPy完成各种数组操作练习',
      deadline: '2024-01-15',
      status: 'submitted',
      submittedAt: '2024-01-14',
      grade: null
    },
    {
      id: 4,
      courseId: 4,
      courseTitle: 'Python编程进阶',
      title: '第4章练习：装饰器',
      description: '实现几个实用的Python装饰器',
      deadline: '2024-01-10',
      status: 'graded',
      submittedAt: '2024-01-09',
      grade: 95
    }
  ]

  // 状态管理
  const [activeTab, setActiveTab] = useState('progress')

  // 计算总体学习进度
  const overallProgress = (learningProgress.completedLessons / learningProgress.totalLessons) * 100

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">学习中心</h1>

        {/* 学习概览卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-neutral-500 font-medium">总课程</h3>
              <Book className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{learningProgress.totalCourses}</div>
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-sm">
                {learningProgress.completedCourses} 已完成
              </span>
              <span className="text-neutral-400 text-sm mx-2">·</span>
              <span className="text-blue-500 text-sm">
                {learningProgress.inProgressCourses} 进行中
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-neutral-500 font-medium">学习进度</h3>
              <BarChart2 className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{Math.round(overallProgress)}%</div>
            <div className="mt-2">
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>{learningProgress.completedLessons} / {learningProgress.totalLessons} 课时</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-neutral-500 font-medium">学习时长</h3>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{learningProgress.completedHours}h</div>
            <div className="text-sm text-neutral-500 mt-2">
              总时长: {learningProgress.totalHours}h
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-neutral-500 font-medium">待完成作业</h3>
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{assignments.filter(a => a.status === 'pending').length}</div>
            <div className="text-sm text-neutral-500 mt-2">
              已提交: {assignments.filter(a => a.status === 'submitted' || a.status === 'graded').length}
            </div>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'progress' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              学习进度
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'assignments' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
            >
              作业管理
            </button>
          </div>
        </div>

        {/* 学习进度标签页 */}
        {activeTab === 'progress' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">我的课程</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${course.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {course.status === 'completed' ? '已完成' : '进行中'}
                        </span>
                      </div>
                      <p className="text-neutral-500 text-sm mb-4">{course.instructor}</p>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>学习进度</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-neutral-500 mb-4">
                        <span>{course.completedLessons} / {course.totalLessons} 课时</span>
                        <span>{course.completedHours}h / {course.totalHours}h</span>
                      </div>
                      <Link
                        to={`/courses/${course.id}/content/1`}
                        className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        继续学习
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 作业管理标签页 */}
        {activeTab === 'assignments' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">作业管理</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        作业名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        课程
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        截止日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {assignments.map((assignment) => (
                      <tr key={assignment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-neutral-900">{assignment.title}</div>
                          <div className="text-sm text-neutral-500">{assignment.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            to={`/courses/${assignment.courseId}`}
                            className="text-primary hover:underline"
                          >
                            {assignment.courseTitle}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-neutral-900">{assignment.deadline}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {assignment.status === 'pending' ? '待提交' : assignment.status === 'submitted' ? '已提交' : '已评分'}
                          </span>
                          {assignment.grade && (
                            <div className="text-sm font-medium mt-1">
                              分数: {assignment.grade}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-primary hover:underline mr-3">
                            查看
                          </button>
                          {assignment.status === 'pending' && (
                            <button className="text-primary hover:underline">
                              提交
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LearningCenter
