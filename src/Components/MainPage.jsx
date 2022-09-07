import React from 'react'
import TechItem from './TechItem'
import Repos from "./Repo"

function MainPage() {
    return (
        <div className='w-full h-screen flex flex-col justify-start items-center gap-24 lg:gap12 dark:bg-gray-800'>

            <div className='flex flex-col justify-start items-center gap-4 '>
                <h1 className='font-normal text-xl text-black dark:text-white rounded-sm'>
                    Hey, I'm <span className='font-medium text-red-400'>Poyraz Avsever!</span>
                </h1>
                <h4 className='font-medium text-gray-500 dark:text-gray-100 text-sm'>Web Developer</h4>
                <div className='flex w-3/4 lg:w-1/2 mx-auto flex-col justify-center items-start gap-5'>
                    <p className='text-base  pt-4 dark:text-white'>A developer based in Turkey. A Front-End developer Always eager to learn something new, but also lazy. The computer is his best friend and confidant. Do you want to know him?</p>
                    <a href="/about" className='bg-red-400 dark:bg-gray-500 text-sm text-white px-3 py-2 transition-all duration-300 rounded-sm hover:bg-red-600 hover:dark:bg-gray-300 hover:dark:text-black'>Get to know him ...</a>
                </div>
            </div>


            <div className='flex flex-col justify-start items-center gap-6 py-12 dark:bg-gray-800'>
                <h2 className='font-normal text-lg text-black dark:text-white rounded-sm'>
                    Technologies <span className='text-red-400   font-medium'> I use.</span>
                </h2>

                <div className='flex px-8 w-3/4 mx-auto gap-5 flex-wrap justify-center dark:bg-gray-800'>
                    <TechItem imageLink="Tech/python.png" />
                    <TechItem imageLink="Tech/html.png" />
                    <TechItem imageLink="Tech/css3.png" />
                    <TechItem imageLink="Tech/bootstrap.png" />
                    <TechItem imageLink="Tech/tailwind.png" />
                    <TechItem imageLink="Tech/git.png" />
                    <TechItem imageLink="Tech/figma.png" />
                    <TechItem imageLink="Tech/adobe-photoshop.png" />
                    <TechItem imageLink="Tech/node-js.png" />
                    <TechItem imageLink="Tech/flask.png" />
                    <TechItem imageLink="Tech/react.png" />
                </div>
            </div>



            <div className='flex w-full flex-col justify-start items-center gap-8 py-12 dark:bg-gray-800'>

                <h2 className='font-normal text-lg text-black dark:text-white rounded-sm '>
                    My <span className='text-red-400 font-medium'> Portfolio.</span>

                    <span className='text-xs pl-2 text-gray-600 dark:text-gray-300'>Scroll Down.</span>
                </h2>

                <div className='w-3/4 lg:w-1/2'>
                    <Repos />
                </div>

            </div>

        </div> 
    )
}

export default MainPage