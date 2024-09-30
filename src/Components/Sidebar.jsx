import React from 'react'
import Logo1 from '../assets/Logo1.png'
import Home from '../assets/HomeOutline.png'
import Search from '../assets/SearchOutline.png'
import Members from '../assets/User.png'
import Export from '../assets/Import Export.png';
import Summary from '../assets/Summary.png';
import Notification from '../assets/Notification.png'
import Profile from '../assets/Profile with dropdown.png';




const Sidebar = () => {
  return (
      <div className=' pt-10   pl-10 '>
        <div className='flex justify-between' >
            <div className='flex items-center gap-5'>
            <img src={Logo1} alt="Logo" />
            <h1 className='font-semibold'>Calendar</h1>
            </div>

            <div className='flex gap-4 items-center'>
                <img src={Notification} alt="" />
                <img src={Profile} alt="" />
            </div>

        

        </div>

    <div className='mt-10'>
        <div className=''>
            <div className='flex items-center gap-5  m-5'>
                <img src={Home} alt="Logo" />
                <p>Home</p>
            </div>
            <div className='flex items-center gap-5 m-5'>
                <img src={Search} alt="Logo" />
                <p>Search</p>
            </div>
            <div className='flex items-center gap-5 m-5 w-40 p-2 bg-[#E3F2DA] rounded-lg cursor-pointer'>
                <img src={Members} alt="Logo" />
                <p>Members</p>
            </div>
            <div className='flex items-center gap-5 m-5'>
                <img src={Export} alt="Logo" />
                <p>Import/Export</p>
            </div>

            <div className='flex items-center gap-5 m-5'>
                <img src={Summary} alt="Logo" />
                <p>Summary</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Sidebar