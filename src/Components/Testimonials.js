import React from 'react'
import image1 from '../testimonial1.png'
import image2 from '../testimonial2.png'
import image3 from '../testimonial3.webp'
import image4 from '../testimonial4.webp'
import image5 from '../testimonial5.webp'
import image6 from '../testimonial6.webp'
import image7 from '../testimonial7.png'

const Testimonials = () => {
  return (
    <div className='mt-20 ml-10 mr-10 md:ml-20 md:mr-20'>

      <div className='flex flex-col w-full md:w-6/12 gap-4'>
        <div className='text-[#4c2f2f] font-semibold'>TESTIMONIALS</div>
        <div className='text-[34px] bg-clip-text text-transparent bg-custom-gradient font-semibold'>Devling deep into the world of online presence, seeking kerdos</div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-10 md:gap-6'>
        <div className='flex flex-col gap-4'>
            <div>
                <img src={image6} width={420} height={360} alt='textimonial' className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Sep 2024</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Landing Page</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <img src={image5} alt='textimonial' width={420} height={360} className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
            <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Sep 2024</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Landing Page</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <img src={image3} width={420} height={360} alt='textimonial' className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
            <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Sep 2024</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Landing Page</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <img src={image4} width={420} height={360} alt='textimonial' className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
            <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Sep 2024</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Landing Page</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Development</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div>
                <img src={image7} width={420} height={360} alt='textimonial' className='rounded-[10px]'/>
            </div>
            <div className='flex flex-row gap-2'>
            <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Sep 2024</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Landing Page</p>
                <p className='text-[12px] text-zinc-600 border-zinc-700 border p-1 rounded-[15px] font-medium'>Development</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
