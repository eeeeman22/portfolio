import React from 'react'
import shoplyIMG from '../images/shop.ly.jpg'
import minesweepherGIF from '../images/minesweepher.gif'
import narwhalIMG from '../images/narwhal_thumb.jpg'
import gnomeIMG from '../images/auto-gnome-screenshot.png'

const Applications = () => {
  return (
    <>
      {/* // SHOP.LY */}

      <div>
        <img
          src={shoplyIMG}
          style={{
            height: '300px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></img>
        <br></br>
        <a
          href={'https://github.com/grey-octopus/project_greenfield'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop.ly
        </a>
        <p>Dynamic product detail page for an online shopping platform</p>
      </div>

      {/* // MINESWEEPHER */}

      <div>
        <img
          src={minesweepherGIF}
          style={{
            height: '300px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></img>
        <br></br>
        <a
          href={'http://minesweepher.herokuapp.com'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mineweepher
        </a>
        <p>Minesweeper clone that you can *almost* always win!</p>
      </div>

      {/* // NARWHAL API */}
      <div>
        <img
          src={narwhalIMG}
          style={{
            height: '300px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></img>
        <br></br>
        <a
          href={'https://github.com/Nonchalant-Narwhal/QAService'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Narwhal API
        </a>
        <p>Back end service for Shop.ly Questions and Answers component</p>
      </div>

      {/* //AUTO-GNOME */}

      <div>
        <img
          src={gnomeIMG}
          style={{
            height: '300px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></img>
        <br></br>
        <a
          href={'http://auto-gnome.herokuapp.com'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Auto-Gnome
        </a>
        <p>High Precision, auto incrementing metronome and drone</p>
      </div>
    </>
  )
}

export default Applications
