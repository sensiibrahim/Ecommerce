import React from 'react'

const Main = () => {
  return (
    <div className='flex justify-between items-center container mx-auto py-10 ' >
      <div className=" flex flex-col gap-5   justify-between   ">
        <h2 className='text-4xl capitalize ' >WE SELL GOODS</h2>
        <p className=' m-0 p-0 '  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quo!</p>
        <button className='bg-green-950 text-white font-semibold p-5 w-60 rounded-full hover:bg-green-800 transition-all  ' > See Collection </button>
      </div>
      <img width={'41%'} height={'30%'} src="https://houseofjewellery.pk/cdn/shop/products/Img_9.png?v=1655377164" alt="" className=''  />
    </div>
  )
}

export default Main