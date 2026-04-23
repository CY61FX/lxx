import { Link } from 'react-router-dom'
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Python数据分析平台</span>
            </div>
            <p className="text-neutral-300 mb-4">
              专为商务数据分析与应用专业的学生设计，提供完整的课程体系、互动式学习模块、学练测评一体化功能以及成就激励系统。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-primary transition-colors">首页</Link></li>
              <li><Link to="/courses" className="text-neutral-300 hover:text-primary transition-colors">课程中心</Link></li>
              <li><Link to="/learning-center" className="text-neutral-300 hover:text-primary transition-colors">学习中心</Link></li>
              <li><Link to="/practice" className="text-neutral-300 hover:text-primary transition-colors">练习环境</Link></li>
              <li><Link to="/community" className="text-neutral-300 hover:text-primary transition-colors">社区论坛</Link></li>
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">常见问题</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">学习资源</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">API文档</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">开发者社区</a></li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-neutral-300">北京市海淀区中关村大街1号</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-neutral-300">+86 10 8888 8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-neutral-300">contact@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-6 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Python数据分析平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
