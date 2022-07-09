import React, { useEffect, useState } from 'react'
import countapi from 'countapi-js';
import './Footer.css'

function Footer() {
  const [count, setCount] = useState();

  useEffect(() => {
    countapi.visits('global').then((result) => {
      setCount(result.value);
    });
  }, [])

    return (
      <footer className='mt-5'>
        <h6>Page visits: {count}</h6>
        <div className="copyright-text">
          <p>All rights reserved.
            <br></br>
            Created by
            <a href="http://www.github.com/MininduSenadheera" target="_blank" rel="noreferrer"> Minindu Senadheera</a>
          </p>
        </div>
      </footer>
    )
}

export default Footer
