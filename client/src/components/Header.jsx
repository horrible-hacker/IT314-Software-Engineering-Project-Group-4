import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <nav className="bg-green-600 text-white p-3 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            <h1 className="flex flex-wrap">
              <span className="text-white">Real</span>
              <span className="text-slate-200">Estate</span>
            </h1>
          </Link>
        </div>

        <div className='p-5'></div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4">
          <li><Link to="/" className="text-white text-sm hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="text-white text-sm hover:text-gray-200">About</Link></li>
          <Link to="/profile">{currentUser ? (<img className='rounded-full h-7 w-7 object-cover' referrerPolicy="no-referrer" src={currentUser.avatar} alt='profile'/>): (<li><div className="bg-green-500 text-white px-3 py-2 rounded-full text-sm hover:bg-green-400">Sign in</div></li>)}</Link>
          {/*referrerPolicy="no-referrer"*/}
        </ul>
      </div>
    </nav>
  );
}
