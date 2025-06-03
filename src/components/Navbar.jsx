import React from 'react'

function NavMenus() {
  const navMenu =['Services', 'Works', 'Resume', 'Skills', 'Testimonials', 'Contact', 'Help'];


  return (
    <div>
        <nav className="navbar py-6">
            <div className="container flex justify-between">
                <h1 className='text-2xl font-bold'>TahirFolio</h1>
                <ul>
                  {navMenu.map((item, index) => (
                    <li key={item} className={`inline-block mx-4 ${index === navMenu.length - 1 ? 'px-7  bg-gradient-to-r from-[#7142D1] to-[#7142d14d] hover:text-[#FFFFFF] py-2 rounded-sm' : ''}`}>
                      <a href={`#${item.toLowerCase()}`} className={`text-lg hover:text-[#7142d1] ${index === navMenu.length-1 ? 'hover:text-white': ''}`}>{item}</a>
                    </li>
                  ))}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavMenus;
