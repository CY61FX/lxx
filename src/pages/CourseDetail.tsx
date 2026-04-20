import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Play, Book, Clock, Users, Star, ChevronDown, ChevronUp, Calendar, Award } from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>()
  
  // 模拟课程详情数据
  const course = {
    id: 1,
    title: 'Python数据分析基础',
    description: '本课程旨在帮助商务数据分析与应用专业的学生掌握Python数据分析的核心技能，从基础语法到高级数据分析库的应用。通过理论学习和实战练习，学生将能够使用Python解决实际商务数据分析问题。',
    instructor: '张教授',
    instructorTitle: '数据科学教授',
    instructorBio: '张教授拥有10年数据分析教学经验，曾在多家知名企业担任数据分析师，专注于商务数据分析和机器学习应用。',
    instructorAvatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20professor%20portrait&image_size=square',
    rating: 4.8,
    students: 1200,
    price: 99,
    category: 'Python基础',
    difficulty: '初级',
    duration: 40,
    lectures: 24,
    level: '初级',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover&image_size=landscape_16_9',
    learningObjectives: [
      '掌握Python基础语法和数据结构',
      '熟练使用NumPy进行数值计算',
      '掌握Pandas进行数据处理和分析',
      '学习使用Matplotlib和Seaborn进行数据可视化',
      '能够使用Python解决实际商务数据分析问题'
    ],
    prerequisites: [
      '基本的计算机操作能力',
      '对数据分析有兴趣',
      '无需编程经验'
    ],
    chapters: [
      {
        id: 1,
        title: 'Python基础',
        lessons: [
          { id: 1, title: 'Python简介', duration: '15:30', type: 'video' },
          { id: 2, title: '变量和数据类型', duration: '20:15', type: 'video' },
          { id: 3, title: '基本操作符', duration: '18:45', type: 'video' },
          { id: 4, title: '控制流', duration: '25:20', type: 'video' },
          { id: 5, title: '函数', duration: '22:10', type: 'video' },
          { id: 6, title: '第1章练习', duration: '30:00', type: 'quiz' }
        ]
      },
      {
        id: 2,
        title: 'NumPy基础',
        lessons: [
          { id: 7, title: 'NumPy简介', duration: '12:30', type: 'video' },
          { id: 8, title: 'NumPy数组', duration: '20:45', type: 'video' },
          { id: 9, title: '数组操作', duration: '25:10', type: 'video' },
          { id: 10, title: '数学函数', duration: '18:20', type: 'video' },
          { id: 11, title: '第2章练习', duration: '30:00', type: 'quiz' }
        ]
      },
      {
        id: 3,
        title: 'Pandas基础',
        lessons: [
          { id: 12, title: 'Pandas简介', duration: '15:20', type: 'video' },
          { id: 13, title: 'Series和DataFrame', duration: '22:30', type: 'video' },
          { id: 14, title: '数据读取和写入', duration: '20:15', type: 'video' },
          { id: 15, title: '数据清洗', duration: '25:40', type: 'video' },
          { id: 16, title: '数据分组和聚合', duration: '28:10', type: 'video' },
          { id: 17, title: '第3章练习', duration: '30:00', type: 'quiz' }
        ]
      },
      {
        id: 4,
        title: '数据可视化',
        lessons: [
          { id: 18, title: 'Matplotlib简介', duration: '18:20', type: 'video' },
          { id: 19, title: '基本图表绘制', duration: '25:30', type: 'video' },
          { id: 20, title: 'Seaborn简介', duration: '15:10', type: 'video' },
          { id: 21, title: '高级可视化', duration: '22:45', type: 'video' },
          { id: 22, title: '第4章练习', duration: '30:00', type: 'quiz' }
        ]
      },
      {
        id: 5,
        title: '实战项目',
        lessons: [
          { id: 23, title: '商务数据分析项目', duration: '30:15', type: 'video' },
          { id: 24, title: '课程总结', duration: '15:00', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: '李明',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20portrait&image_size=square',
        rating: 5,
        date: '2024-01-10',
        comment: '课程内容非常详细，张教授讲解清晰，从基础到进阶都有覆盖。通过这门课程，我掌握了Python数据分析的核心技能，现在能够独立完成数据分析任务了。'
      },
      {
        id: 2,
        user: '王芳',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20female%20student%20portrait&image_size=square',
        rating: 4,
        date: '2024-01-05',
        comment: '课程质量很高，内容结构合理，适合初学者。不过有些章节的练习难度可以再提高一些，以更好地巩固所学知识。'
      },
      {
        id: 3,
        user: '张伟',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=male%20student%20portrait&image_size=square',
        rating: 5,
        date: '2023-12-28',
        comment: '这是我学过的最好的Python数据分析课程之一，张教授的讲解非常专业，实战项目也很有针对性，对我的学习帮助很大。'
      }
    ]
  }

  // 状态管理
  const [activeTab, setActiveTab] = useState('details')
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1])

  // 切换章节展开/折叠
  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId) 
        : [...prev, chapterId]
    )
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* 课程封面 */}
      <div className="relative h-64 md:h-80 bg-neutral-800">
        <img
          src={course.coverImage}
          alt={course.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-6 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{course.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-primary/80 px-3 py-1 rounded-full text-sm">{course.category}</span>
              <span className="bg-neutral-700/80 px-3 py-1 rounded-full text-sm">{course.difficulty}</span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{course.rating}</span>
                <span className="ml-2 text-neutral-300">({course.students} 人学习)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 课程信息 */}
          <div className="lg:col-span-2">
            {/* 标签页导航 */}
            <div className="border-b border-neutral-200 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'details' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
                >
                  课程详情
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'curriculum' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
                >
                  课程大纲
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}
                >
                  学生评价
                </button>
              </div>
            </div>

            {/* 课程详情标签页 */}
            {activeTab === 'details' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">课程介绍</h2>
                  <p className="text-neutral-600 leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">学习目标</h2>
                  <ul className="space-y-2">
                    {course.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">前置要求</h2>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-neutral-100 text-neutral-600 p-1 rounded-full mr-3 mt-1">
                          <Book className="w-4 h-4" />
                        </div>
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">讲师信息</h2>
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{course.instructor}</h3>
                      <p className="text-neutral-500 mb-2">{course.instructorTitle}</p>
                      <p className="text-neutral-600">{course.instructorBio}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 课程大纲标签页 */}
            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">课程大纲</h2>
                  <div className="text-neutral-500">
                    <span className="mr-4"><Clock className="inline w-4 h-4 mr-1" /> {course.duration} 小时</span>
                    <span><Book className="inline w-4 h-4 mr-1" /> {course.lectures} 课时</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {course.chapters.map((chapter) => (
                    <div key={chapter.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full flex justify-between items-center p-4 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                      >
                        <h3 className="font-semibold">{chapter.title}</h3>
                        {expandedChapters.includes(chapter.id) ? (
                          <ChevronUp className="w-5 h-5 text-neutral-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-500" />
                        )}
                      </button>
                      {expandedChapters.includes(chapter.id) && (
                        <div className="p-4 border-t border-neutral-200">
                          <ul className="space-y-2">
                            {chapter.lessons.map((lesson) => (
                              <li key={lesson.id} className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded">
                                <div className="flex items-center">
                                  {lesson.type === 'video' ? (
                                    <Play className="w-5 h-5 text-primary mr-3" />
                                  ) : (
                                    <Book className="w-5 h-5 text-secondary mr-3" />
                                  )}
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="text-neutral-500 text-sm">{lesson.duration}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 学生评价标签页 */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="text-center mr-8">
                    <div className="text-4xl font-bold text-primary">{course.rating}</div>
                    <div className="flex justify-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${star <= Math.round(course.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                        />
                      ))}
                    </div>
                    <div className="text-neutral-500 mt-1">{course.students} 人评价</div>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center mb-2">
                        <span className="w-8">{star}星</span>
                        <div className="flex-1 bg-neutral-200 rounded-full h-2 mr-4">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${(star === 5 ? 60 : star === 4 ? 30 : star === 3 ? 8 : star === 2 ? 2 : 0)}%` }}
                          ></div>
                        </div>
                        <span className="text-neutral-500">{star === 5 ? '60%' : star === 4 ? '30%' : star === 3 ? '8%' : star === 2 ? '2%' : '0%'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="border-b border-neutral-200 pb-6">
                      <div className="flex items-center mb-3">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{review.user}</h4>
                          <div className="flex items-center mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                              />
                            ))}
                            <span className="text-neutral-500 text-sm ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 课程购买侧边栏 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-2">¥{course.price}</div>
                <div className="text-neutral-500 text-sm">一次性付费，终身学习</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-neutral-500 mr-3" />
                  <span>{course.duration} 小时课程内容</span>
                </div>
                <div className="flex items-center">
                  <Book className="w-5 h-5 text-neutral-500 mr-3" />
                  <span>{course.lectures} 课时</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-neutral-500 mr-3" />
                  <span>自购买之日起终身访问</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-neutral-500 mr-3" />
                  <span>完成后获得证书</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to={`/courses/${course.id}/content/1`}
                  className="block w-full bg-primary text-white font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  立即开始学习
                </Link>
                <button className="block w-full border border-primary text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-colors text-center">
                  加入收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 缺少的Check组件
export const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default CourseDetail
