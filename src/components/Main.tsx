import React from 'react'
import Image from 'next/image'

const Main:React.FC = () => {
  return (
    <div className='flex flex-col  items-center mt-32 '>

        <h1 className='text-4xl sm:text-5xl text-center  mb-4" animate-bounce '>
          Hello ! Ayesha Iqbal Here
        </h1>
        < h2 className='text-3xl sm:text-4xl text-center mb-6'> <span className='animate-pulse '>Full Stuck Developer</span></h2>
        <Image src="/image/ash_profile.jpg" className="rounded-full transition-transform hover:scale-110 " alt="Ayesha Iqbal" width={200} height={200}/>
        
      <p className='text-center sm:py-12  sm:w-3/4 lg:w-1/2 mx-auto line-clamp-3'>
        I am a passionate and dedicated software developer with a keen eye for detail and a strong foundation in programming languages. I am always eager to learn and improve my skills. I am currently available for freelance projects and collaborations.
      </p>
    </div>
  )
}

export default Main