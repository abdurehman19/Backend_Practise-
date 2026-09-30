import React, { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRPlWzR86Xg8pC8XAz_FTllGOta5N0-nDOMsPp96btw&s=10",
            caption: "Test Image"
        }
    ])
    return (
        <section className='feed-section'>
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