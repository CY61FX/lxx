import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, Book, Code, Users, Award, Home } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: '首页', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: '课程中心', path: '/courses', icon: <Book className="w-5 h-5" /> },
    { name: '学习中心', path: '/learning-center', icon: <Award className="w-5 h-5" /> },
    { name: '练习环境', path: '/practice', icon: <Code className="w-5 h-5" /> },
    { name: '社区论坛', path: '/community', icon: <Users className="w-5 h-5" /> },
    { name: '个人中心', path: '/profile', icon: <User className="w-5 h-5" /> },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">Python数据分析平台</span>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center space-x-1 text-neutral-600 hover:text-primary transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端导航 */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
