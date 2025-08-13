import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom';

function AccountType() {

    const navigate = useNavigate()
     const [selected, setSelected] = useState('');

  return (
    <div className="w-full lg:w-5/12 mx-auto mt-13 lg:mt-10 mb-8 lg:px-10 py-4 bg-white  rounded-md">
        <h1 className='text-2xl font-semibold mb-6'>
            Which account would you like to create?
        </h1>

        <div className='flex flex-col gap-5'>
            {/* Customer */}
            <div 
            onClick={() => setSelected('buyer')}
            className={`flex items-center px-5 py-2 lg:py-4 border rounded-md cursor-pointer transition-all duration-150 ${
            selected === 'buyer' ? 'border-gray-800' : 'border-gray-300'
          } hover:border-gray-500`}>
                <input 
                type="radio" 
                name="account"
                value="supplier"
                checked={selected === 'buyer'}
                onChange={() => setSelected('buyer')} 
                className='accent-black scale-150 text-2xl text-black'/>
                <div className='px-8'>
                    <h1 className='text-xl font-medium'>Customer</h1>
                    <p className='text-xs'>
                        Access over 200 million products from 200,000 sellers
                        </p>
                </div>
                
            </div>

            {/* Seller */}
            <div 
            onClick={() => setSelected('supplier')}
            className={`flex items-center px-5 py-2 lg:py-4 border rounded-md cursor-pointer transition-all duration-150 ${
            selected === 'supplier' ? 'border-gray-800' : 'border-gray-300'
          } hover:border-gray-500`}>
                <input 
                type="radio" 
                name="account"
                value="supplier"
                checked={selected === 'supplier'}
                onChange={() => setSelected('supplier')}
                className='accent-black scale-150 text-2xl text-black'/>
                <div className='px-8'>
                    <h1 className='text-xl font-medium'>Seller</h1>
                    <p className='text-xs'>
                        Sell your products to 40 million business customers worldwide
                        </p>
                </div>
                
            </div>
        </div>

        <div>
        <button
          onClick={() => {  navigate('/signup', { state: { role: selected } });   }}
          disabled={!selected}
          className={`mt-16 w-full py-3 px-4 font-semibold text-white rounded-3xl transition cursor-pointer 
            ${selected ? 'bg-blue-500 hover:bg-blue-500' : 'bg-blue-300  cursor-not-allowed'}`}>
          Continue
        </button>
        </div>

         <div className=' flex gap-2 justify-start items-center py-3'>
            <h1 className='text-textcolor text-sm'>Already have an account?</h1>
            <button
            onClick={() => navigate('/signin')} 
            className='text-sm font-semibold underline cursor-pointer'>
                Sign in
            </button>
        </div>
    </div>
  )
}

export default AccountType