import React from 'react'

export const Footer = () => {

   let footerStyle ={
        position : "relative",
        top : "100vh",
        width : "100%" ,
        backgroundColor : "red",
        border : "2px solid red"

    }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
<p className='text-center'>
Copyright &copy; pratyush

</p>
        
    </footer>
  )
}
