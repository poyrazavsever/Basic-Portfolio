import React from 'react'

function RepoItem({name, link, date}) {
  return (

    <a href={link}  target="_blank"  rel='noreferrer' className='flex gap-4 dark:text-white transition-all duration-200 justify-between p-2 border-b border-gray-300 hover:bg-red-200 dark:border-gray-500 hover:dark:bg-gray-300 hover:dark:text-black'>

        <h2 className='text-sm lg:text-base'>
            {name}
        </h2>
          
        <h4>{date}</h4>
    </a>
  )
}

export default RepoItem