import React from 'react'
import { AiFillQuestionCircle, AiFillCode, AiOutlineAim } from "react-icons/ai"

function About() {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center dark:bg-gray-800'>

      <h2 className='font-normal text-lg text-black dark:text-white rounded-sm'>
        About <span className='text-red-400 font-medium'> Me.</span>
      </h2>

      <div className='w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-12 my-12 text-sm'>

        <div className='flex gap-6'>
          <AiFillQuestionCircle className='text-6xl text-red-400 ' />
          <p className='dark:text-white'>
            I'm Poyraz Avsever. I'm studying in a science high school. My hobbies are mostly computer related. Apart from that, I like to play computer games, play football and listen to music.
          </p>
        </div>

        <div className='flex gap-6'>
          <AiFillCode className='text-9xl text-red-400 '/>
          <p className='dark:text-white'>
            When choosing my dream job, I looked at whether I liked it or not, rather than the money I would earn. Because I will do that job all my life, and I am aware that if I do it without love, I will get bored and tired after a while. Even though I started software as a hobby, I realized that I really enjoyed doing this job. In short, I can write code and deal with the computer all my life without getting bored.</p>
        </div>

        <div className='flex gap-6'>
          <AiOutlineAim className='text-7xl text-red-400 '/>
          <p className='dark:text-white'>
            My primary goal for now is to get into university. I want computer engineering as a department. I want to improve myself as much as possible about software and master certain areas. I hope I will get better places in my future life, realize my dreams and have a good job.</p>
        </div>


      </div>


    </div>
  )
}

export default About