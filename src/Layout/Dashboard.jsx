import React, { useContext } from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import { TiShoppingCart,TiHome } from "react-icons/ti";
import { IoMdWallet } from "react-icons/io";
import { FaCalendarAlt,FaShoppingBag,FaUtensils,FaBook,FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdReviews,MdLibraryBooks,MdMenu,MdContacts } from "react-icons/md";

import MyCart from './../pages/Dashboard/MyCart/MyCart';
import useCart from '../CustomHook/useCart';
import useAdmin from '../CustomHook/useAdmin';
import { TiThMenu } from "react-icons/ti";
const Dashboard = () => {

    const [cart] = useCart()
    
    //TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin, isAdminLoading] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] text-start drawer-button lg:hidden"><TiThMenu className='' /></label>
                <Outlet></Outlet>
            </div> 

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content ">
                {/* Sidebar content here */}
                {
                    isAdmin ? <>
                    <li><NavLink  to="/dashboard/adminhome" ><IoHome /> Admin Home</NavLink></li>
                    <li><NavLink  to="/dashboard/addItem"><FaUtensils /> Add Items</NavLink ></li>
                    <li><NavLink  to="/dashboard/manageItems"><IoMdWallet /> Manage Items</NavLink ></li>
                    <li><NavLink  to="/dashboard/mycart"><TiShoppingCart/> MyCart 
                    <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink ></li>
                    <li><NavLink  to="/"><FaBook /> Manage Bookings</NavLink ></li>
                    <li><NavLink  to="/dashboard/allusers"><FaUsers /> All Users</NavLink ></li>
                    </>
                    :  <><li><NavLink  to="/dashboard/userhome" ><IoHome /> User Home</NavLink></li>
                    <li><NavLink  to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink ></li>
                    <li><NavLink  to="/dashboard/paymentHistory"><IoMdWallet /> Payment History</NavLink ></li>
                    <li><NavLink  to="/dashboard/mycart"><TiShoppingCart/> MyCart 
                    <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink ></li>
                    <li><NavLink  to="/dashboard/addReview"><MdReviews /> Add Review</NavLink ></li>
                    <li><NavLink  to="/dashboard/manageBooking"><MdLibraryBooks /> Manage Booking</NavLink ></li></>
                }
                
                
                <div className="divider"></div>
                <li><NavLink  to="/"><TiHome /> Home</NavLink ></li>
                <li><NavLink  to="/menu"><MdMenu /> Menu</NavLink ></li>
                <li><NavLink  to="/shop/pizza"><FaShoppingBag /> Shop</NavLink ></li>
                <li><NavLink  to="/contact"><MdContacts /> Contact</NavLink ></li>
                </ul>
            
            </div>

        </div>
        // <div>
        //     <div className="drawer lg:drawer-open">
        //         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content flex flex-col items-center justify-center">
        //             <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        //             <Outlet></Outlet>
        //         </div> 
        //         <div className="drawer-side bg-[#D1A054] ">
        //             <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        //             <ul className="menu p-4 w-80 min-h-full  text-base-content">
        //             {/* Sidebar content here */}

                    // {
                    //     isAdmin ? <>
                    //     <li><NavLink  to="/dashboard/adminhome" ><IoHome /> Admin Home</NavLink></li>
                    //     <li><NavLink  to="/dashboard/addItem"><FaUtensils /> Add Items</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/manageItems"><IoMdWallet /> Manage Items</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/mycart"><TiShoppingCart/> MyCart 
                    //     <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink ></li>
                    //     <li><NavLink  to="/"><FaBook /> Manage Bookings</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/allusers"><FaUsers /> All Users</NavLink ></li>
                    //     </>
                    //     :  <><li><NavLink  to="/dashboard/userhome" ><IoHome /> User Home</NavLink></li>
                    //     <li><NavLink  to="/"><FaCalendarAlt /> Reservation</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/paymentHistory"><IoMdWallet /> Payment History</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/mycart"><TiShoppingCart/> MyCart 
                    //     <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink ></li>
                    //     <li><NavLink  to="/dashboard/addReview"><MdReviews /> Add Review</NavLink ></li>
                    //     <li><NavLink  to="/dashboard/manageBooking"><MdLibraryBooks /> Manage Booking</NavLink ></li></>
                    // }
                    
                    
                    // <div className="divider"></div>
                    // <li><NavLink  to="/"><TiHome /> Home</NavLink ></li>
                    // <li><NavLink  to="/menu"><MdMenu /> Menu</NavLink ></li>
                    // <li><NavLink  to="/shop/:category"><FaShoppingBag /> Shop</NavLink ></li>
                    // <li><NavLink  to="/contact"><MdContacts /> Contact</NavLink ></li>
        //             </ul>
                
        //         </div>
        //     </div>

        // </div>
    );
};

export default Dashboard;