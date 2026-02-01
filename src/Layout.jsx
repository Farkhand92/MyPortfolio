import Header from './components/Header.jsx'
import { Outlet , Link} from 'react-router-dom'
import { FaGithub, FaLinkedin ,FaPhoneAlt, FaHome} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import ScrollToTop from './components/ScrollToTop.jsx';

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <main className="relative w-full min-h-screen bg-gradient-to-br from-black to-gray-900 overflow-x-hidden">
      
      {/* Social Icons - fixed to top right - Responsive sizing */}
      <div className="fixed top-2 sm:top-3 md:top-4  xl:top-8 right-0 bg-gradient-to-br from-violet-800 to-indigo-900 flex gap-2 sm:gap-3 items-center px-3 sm:px-4 py-2 rounded-l-full shadow-lg z-50 border-2 border-white/30 backdrop-blur-sm social-icons">
        <Link 
          to="/"
          className="text-white hover:text-red-500 transition-all duration-200 hover:scale-110" 
          title="Home"
        >
          <FaHome size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
        <Link 
          to="/contactUs"
          className="text-white hover:text-amber-300 transition-all duration-200 hover:scale-110" 
          title="Contact us"
        >
          <FaPhoneAlt size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
        <a 
          href="https://www.linkedin.com/in/farkhand-waqar-84117335a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-500 transition-all duration-200 hover:scale-110" 
          title="LinkedIn"
        >
          <FaLinkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a 
          href="https://github.com/Farkhand92" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-800 transition-all duration-200 hover:scale-110" 
          title="GitHub"
        >
          <FaGithub size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a 
          href="/mfw.docx" 
          target="_blank" 
          download="Farkhand_Resume.docx"
          rel="noopener noreferrer" 
          className="text-white hover:text-green-600 transition-all duration-200 hover:scale-110" 
          title="Resume"
        >
          <HiDocumentText size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </div>

      {/* Main Layout Container */}
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        
        {/* Header / Sidebar */}
        <Header />
        
        {/* Main Content Area with proper responsive spacing */}
        <div className="flex-1 md:ml-[280px] lg:ml-[320px] xl:ml-[400px] 2xl:ml-[450px] outlet p-2 sm:p-3 md:p-4 lg:p-6 h-screen">
          <div className="w-full  mx-auto min-h-screen flex justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Layout;