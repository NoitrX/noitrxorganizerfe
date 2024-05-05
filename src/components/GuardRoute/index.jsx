import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function GuestOnlyRoute({ children }) {
    let { token } = useSelector((state) => state.auth)

    if (!token) return <Navigate to={'/login'} replace={true} />

    return children || <Outlet />
}