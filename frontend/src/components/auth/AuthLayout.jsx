import React from 'react'
import Header from './Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Rectange from '../../assets/Maskgroup.png'

import Alibaba from '../../assets/Alibaba.png'


function AuthLayout() {
  return (
    <div>
        <Header />
        <div className='flex px-8 lg:px-12 h-full '>
            {/* Right Side */}
            
             <Outlet  />    
        </div>
          <Footer className="pt-20 hidden lg:block" />
    </div>
  )
}

export default AuthLayout