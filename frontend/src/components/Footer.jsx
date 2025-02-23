/* eslint-disable no-unused-vars */
import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} />
            <p className='w-full md:w-2/3 text-gray-600'>
            wardrobe, outfit, ensemble, or supply of clothing.can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body?
            </p>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 333-22-888</li>
                <li>ShopPlusPLus@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@shopplusplus.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
