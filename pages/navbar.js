import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex items-center flex-wrap">
        <button
          className='mt-[16px] ml-[31px] cursor-pointer inline-flex pl-[3px] cursor-pointer hover:bg-[#d5fd02] rounded bg-[#111112] rounded-[37px] text-white hover:text-white outline-none'
          onClick={handleClick}
        >
          <Image src="/burgur.png" width="74px" height="76px" className="ml-2"/>
        </button>
        <div class="ml-[60px] mt-[20px]">
          <Image src="/logo_text.png" width="194px" height="24px" />
        </div>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full p-9 rounded text-white items-center justify-center hover:text-[#d5fd02] '>
                HOME
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full p-9 rounded text-white items-center justify-center hover:text-[#d5fd02]'>
                ESPORTS
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full p-9 rounded text-white items-center justify-center hover:text-[#d5fd02]'>
                NFT HUB
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full p-9 rounded text-white items-center justify-center hover:text-[#d5fd02]'>
                MY PROFILE
              </a>
            </Link>
            <div className='bg-[#d5fd02] p-9 cursor-pointer hover:opacity-80'>
              <svg className="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}