import React from 'react'

const Experience = () => {
  return (
   <>
   <h1 className='text-5xl'>Experience</h1>
   <div className='h-screen flex gap-5 mt-5'>
   

   <div className='w-50 h-70  shadow-md border-1 border-gray-400 flex items-center gap-5 p-5 flex-col mt-5 rounded-xl '>
    <div className='h-30  w-30 rounded-full bg-[url("https://media.licdn.com/dms/image/v2/C4D0BAQFZbNXT8lPSHg/company-logo_200_200/company-logo_200_200/0/1630519288446?e=2147483647&v=beta&t=_MPL9px08_zNBMgCUID42RptjbTvDAX6_dbsTS1qLyI")] bg-cover' >

    </div>
    <div className='flex flex-col items-center'>
        <h1 className='text-xl'>club ide</h1>
        <p className='text-gray-500'>Frontend lead</p>
    </div>
    

   </div>
   <div className='w-50 h-70  shadow-md border-1 border-gray-400 flex items-center gap-5 p-5 flex-col mt-5 rounded-xl '>
    <div className='h-30  w-30 rounded-full bg-[url("https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1")] bg-cover' >

    </div>
    <div className='flex flex-col items-center'>
        <h1 className='text-xl'>SIH 2024
        </h1>
        <p className='text-gray-500'>Finalist</p>
    </div>
    

   </div>
   
   </div>

   
   
   </>
  )
}

export default Experience