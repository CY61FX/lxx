import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Play, Book, ChevronLeft, ChevronRight, MessageSquare, Download, Clock, Check, Menu, X } from 'lucide-react'

const CourseContent = () => {
  const { id, contentId } = useParams<{ id: string; contentId: string }>()
  
  // 模拟课程内容数据
  const course = {
    id: 1,
    title: 'Python数据分析基础',
    chapters: [
      {
        id: 1,
        title: 'Python基础',
        lessons: [
          { id: 1, title: 'Python简介', duration: '15:30', type: 'video', videoUrl: 'https://example.com/video1.mp4', completed: true },
          { id: 2, title: '变量和数据类型', duration: '20:15', type: 'video', videoUrl: 'https://example.com/video2.mp4', completed: true },
          { id: 3, title: '基本操作符', duration: '18:45', type: 'video', videoUrl: 'https://example.com/video3.mp4', completed: false },
          { id: 4, title: '控制流', duration: '25:20', type: 'video', videoUrl: 'https://example.com/video4.mp4', completed: false },
          { id: 5, title: '函数', duration: '22:10', type: 'video', videoUrl: 'https://example.com/video5.mp4', completed: false },
          { id: 6, title: '第1章练习', duration: '30:00', type: 'quiz', completed: false }
        ]
      },
      {
        id: 2,
        title: 'NumPy基础',
        lessons: [
          { id: 7, title: 'NumPy简介', duration: '12:30', type: 'video', videoUrl: 'https://example.com/video7.mp4', completed: false },
          { id: 8, title: 'NumPy数组', duration: '20:45', type: 'video', videoUrl: 'https://example.com/video8.mp4', completed: false },
          { id: 9, title: '数组操作', duration: '25:10', type: 'video', videoUrl: 'https://example.com/video9.mp4', completed: false },
          { id: 10, title: '数学函数', duration: '18:20', type: 'video', videoUrl: 'https://example.com/video10.mp4', completed: false },
          { id: 11, title: '第2章练习', duration: '30:00', type: 'quiz', completed: false }
        ]
      }
    ]
  }

  // 模拟讨论区数据
  const discussions = [
    {
      id: 1,
      user: '李明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20portrait&image_size=square',
      date: '2024-01-10',
      content: '老师，请问Python中的列表和元组有什么区别？',
      replies: [
        {
          id: 1,
          user: '张教授',
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20professor%20portrait&image_size=square',
          date: '2024-01-10',
          content: '列表是可变的，而元组是不可变的。这意味着你可以修改列表的内容，但不能修改元组的内容。'
        }
      ]
    },
    {
      id: 2,
      user: '王芳',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20female%20student%20portrait&image_size=square',
      date: '2024-01-09',
      content: '这节课的内容很清晰，感谢老师的讲解！',
      replies: []
    }
  ]

  // 状态管理
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(Number(contentId) || 1)
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1])

  // 切换章节展开/折叠
  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId) 
        : [...prev, chapterId]
    )
  }

  // 获取当前课程和章节
  const getCurrentLesson = () => {
    for (const chapter of course.chapters) {
      const lesson = chapter.lessons.find(l => l.id === currentLesson)
      if (lesson) {
        return { chapter, lesson }
      }
    }
    return { chapter: course.chapters[0], lesson: course.chapters[0].lessons[0] }
  }

  const { chapter, lesson } = getCurrentLesson()

  // 计算课程进度
  const calculateProgress = () => {
    const totalLessons = course.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0)
    const completedLessons = course.chapters.reduce((sum, chapter) => 
      sum + chapter.lessons.filter(lesson => lesson.completed).length, 0
    )
    return (completedLessons / totalLessons) * 100
  }

  // 切换到下一课
  const goToNextLesson = () => {
    const allLessons = course.chapters.flatMap(chapter => chapter.lessons)
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson)
    if (currentIndex < allLessons.length - 1) {
      setCurrentLesson(allLessons[currentIndex + 1].id)
    }
  }

  // 切换到上一课
  const goToPreviousLesson = () => {
    const allLessons = course.chapters.flatMap(chapter => chapter.lessons)
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson)
    if (currentIndex > 0) {
      setCurrentLesson(allLessons[currentIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* 课程导航栏 */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={`/courses/${course.id}`} className="text-primary hover:underline">
              {course.title}
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600">{chapter.title}</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-neutral-500 mr-2" />
              <span className="text-sm">{lesson.duration}</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm">{Math.round(calculateProgress())}% 完成</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* 侧边栏 */}
          <div className={`md:w-1/4 lg:w-1/5 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h3 className="font-semibold mb-4">课程大纲</h3>
              <div className="space-y-4">
                {course.chapters.map((chapter) => (
                  <div key={chapter.id}>
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex justify-between items-center text-left font-medium py-2"
                    >
                      <span>{chapter.title}</span>
                      {expandedChapters.includes(chapter.id) ? (
                        <ChevronRight className="w-5 h-5 text-neutral-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-neutral-500 rotate-[-90deg]" />
                      )}
                    </button>
                    {expandedChapters.includes(chapter.id) && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {chapter.lessons.map((lessonItem) => (
                          <li key={lessonItem.id}>
                            <Link
                              to={`/courses/${course.id}/content/${lessonItem.id}`}
                              className={`flex items-center py-2 px-3 rounded-md text-sm ${currentLesson === lessonItem.id ? 'bg-primary/10 text-primary' : 'hover:bg-neutral-100'}`}
                            >
                              {lessonItem.completed ? (
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                              ) : (
                                <div className="w-4 h-4 border border-neutral-300 rounded-full mr-2" />
                              )}
                              <span className="flex-1">{lessonItem.title}</span>
                              <span className="text-neutral-500 text-xs">{lessonItem.duration}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">{lesson.title}</h2>
              
              {/* 视频播放器 */}
              {lesson.type === 'video' && (
                <div className="mb-6">
                  <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <img
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20tutorial%20video%20thumbnail&image_size=landscape_16_9"
                      alt={lesson.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* 学习资料 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">学习资料</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center p-3 border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors">
                    <Book className="w-5 h-5 text-primary mr-3" />
                    <span className="flex-1">Python基础语法.pdf</span>
                    <Download className="w-4 h-4 text-neutral-500" />
                  </a>
                  <a href="#" className="flex items-center p-3 border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors">
                    <Book className="w-5 h-5 text-primary mr-3" />
                    <span className="flex-1">变量和数据类型练习.ipynb</span>
                    <Download className="w-4 h-4 text-neutral-500" />
                  </a>
                </div>
              </div>

              {/* 课程导航 */}
              <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                <button
                  onClick={goToPreviousLesson}
                  className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors"
                  disabled={currentLesson === 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>上一课</span>
                </button>
                <button
                  onClick={goToNextLesson}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  disabled={currentLesson === course.chapters.flatMap(c => c.lessons).length}
                >
                  <span>下一课</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 讨论区 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">讨论区</h3>
                <button className="flex items-center space-x-2 text-primary hover:underline">
                  <MessageSquare className="w-4 h-4" />
                  <span>发表讨论</span>
                </button>
              </div>
              <div className="space-y-6">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="border-b border-neutral-200 pb-6">
                    <div className="flex items-start space-x-4 mb-3">
                      <img
                        src={discussion.avatar}
                        alt={discussion.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{discussion.user}</h4>
                          <span className="text-neutral-500 text-sm">{discussion.date}</span>
                        </div>
                        <p className="text-neutral-600 mb-3">{discussion.content}</p>
                        {discussion.replies.length > 0 && (
                          <div className="ml-4 space-y-3">
                            {discussion.replies.map((reply) => (
                              <div key={reply.id} className="flex items-start space-x-3">
                                <img
                                  src={reply.avatar}
                                  alt={reply.user}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-semibold text-sm">{reply.user}</h5>
                                    <span className="text-neutral-500 text-xs">{reply.date}</span>
                                  </div>
                                  <p className="text-neutral-600 text-sm">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        <button className="text-primary text-sm hover:underline mt-2">
                          回复
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContent
