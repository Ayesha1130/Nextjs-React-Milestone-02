import React from 'react'
import Image from 'next/image'


const Skills = () => {
  return (
    <div className='flex flex-col items-center mt-32'>
        <h1 className='text-5xl sm:text-5x1 text-center mb-4 animate-bounce'>My Skills</h1>
        <div className='flex flex-wrap justify-center md:flex-row'>
            {[
              { src: "/image/html.png",  alt:"HTML" },
              { src: "/image/css.png", alt:"CSS"},
              { src: "/image/java.png", alt:"JAVASCRIPT"},
              { src: "/image/ts.png", alt:"TYPESCRIPT"},
              { src: "/image/tail.png", alt:"TAILWIND"},
              { src: "/image/next.png", alt:"NEXTJS"},
                
            ].map((skill, index)=>(
                <div key={index} className='m-4'>
                    <Image
                    src={skill.src}
                    className='rounded-full drop-shadow-[0-35px-35px-rgba(136,0,0,0.98)] transition-transform hover:scale-150'
                    alt={skill.alt}
                    width={200}
                    height={200} />

                </div>
            )
            )}

        </div>
      
    </div>
  );
};

export default Skills


