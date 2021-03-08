import React, { useState, useEffect } from 'react'
import { busca } from '../api/api'
import { Link } from 'react-router-dom'

const ListaPost = ( { url } ) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        busca(url, setPosts)
    }, [])

    return (
        <section className="posts container">
            {posts.map((i,k) =>
                <Link key={k} className={`cartao-post cartao-post--${i.categoria}`} >
                    <article key={i.id}>
                        <h3 className="cartao-post__titulo" >
                            {i.title}
                        </h3>
                        <p className="cartao-post__meta" >
                            {i.metadescription}
                        </p>
                    </article>
                </Link>
            )}
        </section>
    )
}

export default ListaPost