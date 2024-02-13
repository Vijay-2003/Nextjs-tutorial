"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Fade, Zoom } from 'react-reveal'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  const handleroute = () => {
    router.push('/contact/1?name=hello&age=20');
  }

  return (
    <div className={styles.section}>
      <div className='container'>
        <div className='row'>
          <Fade left>
            <div className='col-lg-6'>
              <h1>NextJS is an Awesome Framework</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className='btn btn-warning mx-1'>Read more</button>
              <button onClick={() => handleroute()} className='btn btn-outline-primary' >Contact</button>
            </div>
          </Fade>
          <Zoom >
            <div className='col-lg-6'>
              <Image
                src="/next.jpg"
                width={400}
                height={410}
                alt="Picture"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default Home