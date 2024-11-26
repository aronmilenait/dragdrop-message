import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-12 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center border border-gray-100">
          <p className="text-gray-600 text-sm flex items-center">
            Made with 
            <FaHeart className="w-4 h-4 text-red-500 mx-1" />
            by
            <a 
              href="https://github.com/aronmilenait" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Milena Sol Aron
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

