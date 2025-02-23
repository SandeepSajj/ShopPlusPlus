/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Fashion is all about expressing yourself through clothing, whether its following trends or creating your own unique style. Some key aspects of fashion in clothing include:
            Trendy vs. Timeless, Trends change quickly, but classics like a white shirt, black dress, or well-fitted jeans never go out of style.
            Fabric Matters Cotton for comfort, wool for warmth, silk for luxury—choosing the right fabric makes all the difference.</p>
          <p>Fashion is the creation of clothing, accessories, and more that people use to express themselves and their identities. Fashion can also refer to the styles and trends that are popular at a given time. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>helps establish a strong brand identity, foster a unified company culture, and ensure alignment among team members, stakeholders, and customers, and prioritizing customer satisfaction while striving to meet their specific needs through a user-friendly online shopping experience. </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>systematic process of evaluating and monitoring the quality of clothing items throughout the production and distribution chain, shipping and customer service. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>it allows customers to browse and purchase items from the comfort of their own home, anytime, without needing to physically visit a store. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>providing a seamless, personalized experience throughout the buying journey, including detailed product information, easy navigation, responsive communication, flexible return policies, and proactive assistance to ensure customer satisfaction and loyalty, and ultimately leads to higher customer satisfaction and loyalty. </p>
        </div>
      </div>
      <NewletterBox/>
    </div>
  )
}

export default About
