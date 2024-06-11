import './AdminNav.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const AdminNav = () => {
    const navigate = useNavigate()
    const { setToken, setRole } = useContext(StoreContext)
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        setToken('')
        setRole('')
        navigate('/')
    }
    return (
        <div className="admin-nav">
            <img className="logo" src={assets.admin_logo} alt="" />
            <div className='profile-logout'>
                <img className='profile' src={assets.profile_image} alt="" />
                <div onClick={logout} className='logout'>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default AdminNav
