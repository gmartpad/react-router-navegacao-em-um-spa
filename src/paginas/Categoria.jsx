import React, { useState, useEffect } from 'react'
import { useParams, Route, useRouteMatch } from 'react-router-dom'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import { busca } from '../api/api' 
import '../assets/css/blog.css'

const Categoria = () => {
    const { id } = useParams()
    const { path } = useRouteMatch()
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias/>
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
            </Route>
        </>
    )
}

export default Categoria