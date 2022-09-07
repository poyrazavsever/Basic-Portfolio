import React from 'react'

function About() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>

      <h2 className='font-normal text-lg text-black rounded-sm'>
        About <span className='text-red-400 font-medium'> Me.</span>
      </h2>

      <div className='w-3/4 flex flex-col justify-center items-center gap-12 my-12 text-sm'>

        <p>I'm Poyraz Avsever. I am 16 years old. I'm studying in a science high school. My hobbies are mostly computer related. Apart from that, I like to play computer games, play football and listen to music.</p>

        <p>When choosing my dream job, I looked at whether I liked it or not, rather than the money I would earn. Because I will do that job all my life, and I am aware that if I do it without love, I will get bored and tired after a while. Even though I started software as a hobby, I realized that I really enjoyed doing this job. In short, I can write code and deal with the computer all my life without getting bored.</p>

        <p>My primary goal for now is to get into university. I want computer engineering as a department. I want to improve myself as much as possible about software and master certain areas. I hope I will get better places in my future life, realize my dreams and have a good job.</p>

      </div>


    </div>
  )
}

export default About