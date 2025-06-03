import React from 'react'
import {Facebook, Linkedin, Github, Globe} from 'lucide-react'


function HeroSection() {
  return (
    <div className="grid-bg">
        <section className="hero flex flex-wrap py-25">
            <div className="flex flex-col justify-center w-[50%]">
                <h1 className='text-4xl font-semibold mb-3'>I am Tahir </h1>
                <h2 className='text-7xl font-bold'>Web Developer + <br></br>UX Designer</h2>
                <p className='text-lg mt-4'>I create beautiful and functional websites that provide an exceptional user experience. If
                    you need a professional web developer or UX designer, I am here to help you achieve your goals.
                </p>
                <div className='mt-10 flex items-center gap-4'>
                  <button className='border-2 text-primary hover:bg-primary hover:text-white hover:border-primary px-8 py-[10px] rounded-sm'>Dowload CV</button>
                  <div className='flex gap-5 '>< Facebook className="border-2 border-primary text-primary rounded-4xl p-[6px] w-8 h-8"/> <Linkedin className="border-2 border-primary text-primary rounded-4xl p-[6px] w-8 h-8"/> <Github className="border-2 border-primary text-primary rounded-4xl p-[6px] w-8 h-8"/> <Globe className="border-2 border-primary text-primary rounded-4xl p-[6px] w-8 h-8"/></div>
                </div>
            </div>
            <div className='w-[50%] flex justify-center'>
                <img src="./images/tahir.png" alt="Tahir Shah" className='w-[400px] h-[400px] rounded-full object-cover shadow-lg' />
            </div>
            <div className='w-full mt-25 flex justify-between'>
                <div className='flex items-center gap-2'><h3 className='text-6xl font-bold'>04</h3><p className='w-[100px] heig'>Years of Experience</p></div>
                <div className='flex items-center gap-2'><h3 className='text-6xl font-bold'>50+</h3><p className='w-[100px] heig'>Successful Projects</p></div>
                <div className='flex items-center gap-2'><h3 className='text-6xl font-bold'>95%</h3><p className='w-[100px] heig'>Clint Satisfaction</p></div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection;