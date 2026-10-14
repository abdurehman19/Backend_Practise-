import React from 'react'
import axios from "axios"

const Createpost = () => {

  const handlesubmit = async(e)=>{
    e.preventDefault()
  }

  return (

    <section className='create-post-section'>

      <h1>Create Post</h1>

      <form >

         <input type="file" name='image' accept='image/*' />

         <input type="text" name='caption' placeholder='Enter Post Caption' required />

         <button type='submit'>Submit</button>

      </form>

    </section>

  )
}

export default Createpost