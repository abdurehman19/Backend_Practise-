import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()

    const formdata = new FormData(e.target)

    axios
      .post('http://localhost:3000/create-post', formdata)
      .then((res) => {
        console.log(res)
        navigate('/feed')
      })
      .catch((err) => {
        console.log(err)
        alert('Error creating post')
      })
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handlesubmit} encType='multipart/form-data'>
        <input type='file' name='image' accept='image/*' required />
        <input type='text' name='caption' placeholder='Enter Post Caption' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Createpost
