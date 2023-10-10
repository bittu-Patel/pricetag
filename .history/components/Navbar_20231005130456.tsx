import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
  <nav className='nav'>
    <Link href="/" className='flex items-center gap-1'>
    <Image 
   src="/assets/icons/logo.svg"
   width={27}
   height={27}
   alt='logo'
  
   />
 <p className='nav-logo'>Price
  <span className='text-primary'>Tag</span>
  
   </p>
    </Link>
    <div clas>

    </div>

  </nav>

    </header>
  )
}

export default Navbar