import React from 'react'
import assets from '../assets/asset'

const Hero = () => {
  return (
    <>
    <main className='flex items-center destop-view justify-center h-auto p-5'>
        <div className='flex max-w-full w-full'>
        <section className='flex-1 max-w-[600px] justify-center p-5 items-center flex flex-col'>
            <div className='text-justify flex flex-col m-auto items-center'>
            <h3 className='inspiration-regular mb-3'>Welcome to our blog</h3>
            <p className='ponnala-regular text-xl '>This space is dedicated to sharing <br /> 
            News, Events and History of the <br /> Metropolitan Battalion Council.</p>
            </div>
            <div className='flex gap-10 flex-wrap mt-5'>
                <img className='max-w-full h-auto' src={assets.image3} alt="metro1" />
                <img className='max-w-full h-auto' src={assets.image2} alt="metro 2" />
                <img className='max-w-full h-auto' src={assets.image1} alt="metro 3" />
            </div>
        </section>
        <section className='flex-1 flex justify-center items-center px-10 py-0'>
            <img className='max-w-full h-auto' src={assets.image4} alt="" />
        </section>
        </div>
    </main>

    {/* Hero mobile view */}
    <main className='mobile-view'>
    <section className='mt-10 m-auto w-[90%]'>
            <div className=' flex flex-col m-auto w-[80%] items-center'>
            <h3 className='inspiration-regular mb-3'>Welcome to our blog</h3>
            <p className='ponnala-regular text-xl '>This space is dedicated to sharing 
            News, Events and History of the Metropolitan Battalion Council.</p>
            </div>
        
        </section>

        <section className='flex-1 mt-6  flex justify-center items-center px-10 py-0'>
            <img className='max-w-full h-auto' src={assets.image4} alt="" />
        </section>

        <div className='grid gap-8 grid-cols-3 flex-wrap mt-5 m-auto w-[95%]'>
            <div><img className='w-full' src={assets.image3} alt="Metro 1" /></div>
            <div> <img className='w-full' src={assets.image2} alt="Metro 2" /></div>
            <div><img className='w-full' src={assets.image1} alt="Metro 3" /></div>
                {/* <img className='' src={assets.image3} alt="" />
                */}
            </div>
        

            </main>
    </>
  )
}

export default Hero