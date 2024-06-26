import React from 'react'
import { useAuth } from './hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

//poder seleccionar datos y si existen continue si no redireccione
// como el Protected esta dentro del Autprovider en el app.jsx el puede tener acceso al contexto 
export default function ProtectedRoute() {
    const {isAuthenticated, loading} = useAuth()
    if(loading) return <h1>Cargando..</h1>
    if(!isAuthenticated && !loading) return <Navigate to="/" replace /> // si el usuario no esta autenticado lo redirecciona a login
  return (
   <Outlet/> // si esta authenticado continue con el componente que esta adentro 
  )
}
