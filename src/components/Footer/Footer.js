import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

function Footer() {

  return (
    <footer className='mt-5'>
      <p className='mb-0'>
        Created by <GitHubIcon />
        <a href="http://www.github.com/MininduSenadheera" target="_blank" rel="noreferrer"> Minindu Senadheera</a>
      </p>
    </footer>
  )
}

export default Footer
