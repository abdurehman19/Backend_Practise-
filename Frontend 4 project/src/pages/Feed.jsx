import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRPlWzR86Xg8pC8XAz_FTllGOta5N0-nDOMsPp96btw&s=10",
            caption: "Test Image"
        }
    ])


    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {

                setPosts(res.data.posts)
            })
    }, [])
    return (

        <section className='feed-section'>
            <Navbar />
            {posts.map((post) => (
                <div key={post.id} className='post'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))}

        </section>

    )
}

export default Feed