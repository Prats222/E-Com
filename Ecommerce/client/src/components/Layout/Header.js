import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdSwipeRight } from 'react-icons/md';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import Dashboard from './../../pages/user/Dashboard';
import Searchinput from '../Form/Searchinput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import {Badge} from 'antd'
import {MdOutlineShoppingCartCheckout} from 'react-icons/md';
import {IoWatch} from 'react-icons/io5';
import {FcMultipleSmartphones} from 'react-icons/fc'

const Header = () => {
  const [auth,setAuth]= useAuth()
  const categories = useCategory()
  const [cart]= useCart()
  const handleLogout=() =>{
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removeItem('auth');
    toast.success("Logout Succesfull");
  }

  return (
    <nav className="navbar navbar-expand-lg "  style={{
      backgroundColor: '#c7af7e',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
    }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand aand">
          <MdSwipeRight style={{ fontSize: '24px' }}/> <IoWatch style={{ fontSize: '27px' }}/> <em><strong>PRAT</strong></em>-<span style={{ color: 'red' }}>SHOP</span> <FcMultipleSmartphones style={{ fontSize: '27px' }}/>

            
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <Searchinput />
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>

<li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle"
    to={"/categories"}
    data-bs-toggle="dropdown"
  >
    Categories
  </Link>
  <ul className="dropdown-menu">
  <li>
  <Link className="dropdown-item" to={"/categories"}>
          All Categories
        </Link>

  </li>

    {categories.map((c) => (
      <li key={c._id}>
        <Link className="dropdown-item" to={`/category/${c.slug}`}>
          {c.name}
        </Link>
        
      </li>
    ))}
  </ul>
</li>

            {
            !auth.user ? (<>
              <li className="nav-item">
              <NavLink to="/register" className="nav-link" activeClassName="active">
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeClassName="active">
                Login
              </NavLink>
            </li>

            </>
            ) : (
              <>
              <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {auth?.user?.name}
  </NavLink>

  <ul className="dropdown-menu">
    <li><NavLink to={`/dashboard/${auth?.user?.role===1 ? 'admin' : 'user'}`} className="dropdown-item" >Dashboard</NavLink></li>
    <li>
              <NavLink onClick={handleLogout} to="/login" className="dropdown-item" activeClassName="active">
                LogOut
              </NavLink>   </li>
  </ul>
</li>
            </>)

            }
            <li className="nav-item">
            <Badge count={cart?.length} showZero>
            <NavLink to="/cart" className="nav-link" activeClassName="active">
               CART <MdOutlineShoppingCartCheckout />
              </NavLink>
    </Badge>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
