import React from 'react'
import Container from './Container'
import  Link  from 'next/link';

const Header = () => {
  return (
    <header>
     <Container/>
<h1>NepSopping</h1>

<ul>
  <li>
  
    <Link href='/'>Home</Link>
  </li>
  <li>
    <Link href='/store'>Store</Link>
  </li>
</ul>
      
    </header>
  )
}

export default Header
