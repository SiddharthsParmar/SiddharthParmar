import React from 'react'
// import Image from 'next/image'
// import heroImage from '../../public/Siddharth_Photo.png'
{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
const Introduction = () => {
  return (
    <div className='flex flex-wrap  mt-30 w-full gap-4'>

<span><h1 className='text-9xl font-semibold '>Hi,</h1></span>
<span><h1 className='text-9xl font-semibold'><p>I&apos;m </p></h1></span>
<div className='w-25 m-0  mb-1.5' id='image'>
    {/* <img src='https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg'></img> */}
     {/* <Image width={50} height={50} src={"https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"} /> */}

    </div>
<span><h1 className='text-9xl font-semibold'>Siddharth Parmar</h1></span>
<div className='flex flex-wrap  w-full gap-4 '>
<span><h2 className='text-8xl text-gray-500 font-semibold'>
 a</h2></span>
<span><h2 className='text-8xl text-gray-500 font-semibold'>Self</h2></span>
<span><h2 className='text-8xl text-gray-500 font-semibold'>Motivated</h2>

</span>
<div className='flex items-center'>

<div className='border-1 px-14  py-2 h-14 rounded-full flex items-center justify-between gap-1.5'>
    <div className='w-7 h-7 flex rounded-4xl bg-green-400 items-center justify-center'>
        <div className='bg-white w-3 h-3  rounded-full'>

        </div>
    </div>
    <div className=''><h1>Open To work</h1></div>
</div>
</div>

</div>
<span className='flex flex-wrap items-center justify-between gap-18'><h1 className='text-9xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700'>Full Stack Developer </h1>

</span>

    </div>
  )
}

export default Introduction