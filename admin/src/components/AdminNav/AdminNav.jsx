import './AdminNav.css'
import { assets } from '../../assets/assets'
const AdminNav = () => {
    return (
        <div className="admin-nav">
            <img className="logo" src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
    )
}

export default AdminNav
