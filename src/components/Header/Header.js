import React from 'react'

import './Header.css'
import clouds from '../../assets/clouds.png'
import campanha from '../../assets/logo-camapanha-red-tagline.png'
const Header = () => {
          return (
                    <div className='header'>
                              <div className='header__right'>
                                        <img src={campanha} alt='' />
                              </div>
                              <div className='header__left'>
                                        <img src={clouds} alt='' />
                              </div>
                    </div>
          )
}

export default Header