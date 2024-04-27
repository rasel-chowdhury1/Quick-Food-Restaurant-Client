import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { TiShoppingCart } from "react-icons/ti";
import useCart from '../../CustomHook/useCart';
import useAdmin from '../../CustomHook/useAdmin';

const Navbar = () => {
    const {user,Logout} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    console.log(cart)
    console.log('user is - ',user)
    const navOptions = <>
       <li><Link to='/'>HOME</Link></li>
       <li><Link to="/contact">CONTACT US</Link></li>
       {user && <li><Link to={ isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>DASHBOARD</Link></li>}
       <li><Link to="/menu">OUR MENU</Link></li>
       <li><Link to="/shop/salad">OUR SHOP</Link></li>
       <li><Link to='/dashboard/mycart'>
         <button className="btn">
            <TiShoppingCart/>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
         </button>
           </Link>
       </li>
       
       {
        user ? <>
        
        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-opacity-30 bg-black text-white rounded-box w-52">


                            {user ? (
                                <>
                                    <li className="pl-3">{user?.displayName}</li>
                                    <li>{isAdmin ? <><Link to='/dashboard/adminhome'>Admin</Link></>:<><Link>User</Link></>}</li>
                                    <li><Link to='/dashboard/mycart'>Order</Link></li>

                                    <li onClick={Logout}><a>Log Out</a></li>
                                </>
                            ) : (
                                <>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Register</a></li>
                                </>
                            )}

                        </ul>
                    </div>
                </>
        :<><li><Link to="/login">Login</Link></li>
        <li><Link className='text-white-400' to="/register">Sign UP</Link></li></>
       }
        
    </>
    return (
        <div className=''>
          <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-opacity-30 bg-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Quick Food
                        <br/>Restaurant</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOptions}
                    </ul>
                </div>
          </div>
        </div>
    );
};

export default Navbar;