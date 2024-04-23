import Logo1 from "../images/Vectorlogo1.png";
import Logo2 from "../images/Vectorlogo2.png";
import Image1 from "../images/image1.png";
import { IconName } from '@heroicons/react';

const Header = () => {
  return (
   
      <nav className="flex items-center h-80px border-b-3px border-gray-800 shadow-lg">
        <div className="w-141px flex items-center">
          <img src={Logo1} alt="Logo 1" className="w-full ml-5 h-full " />
          <img src={Image1} alt="Image 1" className="h-auto ml-5" />
        </div>
        <div className="w-1395px h-45px flex items-center">
          <img src={Logo2} alt="Logo 2" className="w-79px ml-6" />
          <ul className="flex ml-10 space-x-4 items-center">
            <li>Lorem Ipsum</li>
            <li>Sed ut perspiciatis</li>
            <li>Quasi architecto</li>
          </ul>
        </div>
        <div className="w-3/10 ml-auto flex items-center space-x-5 ">
            <p className="button-select">Aide</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 button-select">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 button-select">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 button-select">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </div>
      </nav>
    
  );
};

export default Header;
