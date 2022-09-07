import React from 'react'
import TechItem from './TechItem'
import Repos from "./Repo"

function MainPage() {
    return (
        <div className='w-full h-screen flex flex-col justify-start items-center gap-3'>

            <div className='flex flex-col justify-start items-center gap-4'>
                <h1 className='font-normal text-xl text-black rounded-sm'>
                    Hey, I'm <span className='font-medium text-red-400'>Poyraz Avsever!</span>
                </h1>
                <h4 className='font-semibold text-gray-500 text-sm'>Web Developer</h4>
                <div className='flex w-3/4 flex-col justify-center items-start gap-5'>
                    <p className='text-base mx-auto pt-4'>A developer based in Turkey. A Front-End developer Always eager to learn something new, but also lazy. The computer is his best friend and confidant. Do you want to know him?</p>
                    <a href="/about" className='bg-red-400 text-sm text-white px-3 py-2 transition-all duration-300 rounded-sm hover:bg-red-600'>Get to know him ...</a>
                </div>
            </div>


            <div className='flex flex-col justify-start items-center gap-6 py-12'>
                <h2 className='font-normal text-lg text-black rounded-sm'>
                    Technologies <span className='text-red-400 font-medium'> I use.</span>
                </h2>

                <div className='flex px-8 w-3/4 mx-auto gap-5 flex-wrap justify-center'>
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



            <div className='flex w-full flex-col justify-start items-center gap-8 py-12'>

                <h2 className='font-normal text-lg text-black rounded-sm'>
                    My <span className='text-red-400 font-medium'> Portfolio.</span>

                    <span className='text-xs pl-2 text-gray-500'>Scroll Down.</span>
                </h2>

                <div className='w-3/4'>
                    <Repos />
                </div>

            </div>

        </div> 
    )
}

export default MainPage