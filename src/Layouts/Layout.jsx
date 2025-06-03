import React from 'react'

function LayoutWrapper({children}) {
  return (
    <div className='max-w-[1280px] mx-auto px-10'>
        {children}
    </div>
  )
}

export default LayoutWrapper;