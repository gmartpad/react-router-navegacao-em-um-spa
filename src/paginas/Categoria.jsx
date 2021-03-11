import React, { useState, useEffect } from 'react'
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import SubCategoria from '../paginas/SubCategoria'
import { busca } from '../api/api' 
import '../assets/css/blog.css'

const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
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
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((i, k) => (
                            <Link to={`${url}/${i}`}>
                                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={i}>
                                    {i}
                                </li>
                            </Link>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria/>
                </Route>
            </Switch>    
        </>
    )
}

export default Categoria