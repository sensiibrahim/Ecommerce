import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="flex flex-col justify-between items-center sm:hidden  w-60 h-[100vh] ">

    <div className="flex flex-col capitalize text-1xl px-4 py-5 font-semibold text-black justify-between gap-3 self-start cursor-pointer   ">
            Login
            <div>Register</div>
          </div>

    </div>
    </>
  )
}

export default Sidebar