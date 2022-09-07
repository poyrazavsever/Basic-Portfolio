import React from 'react'

function RepoItem({name, link, date}) {
  return (

    <div className='flex gap-4 items-center transition-all duration-200 p-2 border-b border-gray-300 hover:bg-red-200'>

        <a href={link} target="_blank" className='text-sm w-3/4' rel='noreferrer'>
            {name}
        </a>
          
        <h4 className='text-sm'>{date}</h4>
    </div>
  )
}

export default RepoItem