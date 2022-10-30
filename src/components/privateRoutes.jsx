import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
const PrivateRoutes = ({auth, setAuth, authHandler}) => { 

return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes