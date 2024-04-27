import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import useBooking from '../../../CustomHook/useBooking';


const ManageBooking = () => {
    const [bookings,refetch] = useBooking();
    console.log(bookings.price)
    //how does reduce work
    const total = bookings.reduce((sum,item) =>parseFloat(item.price) + sum, 0)

    const handleDeleteButton = (id) =>{
        Swal.fire({
            title: "Are you sure",
            text: "booking Item delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes,delete it!"
        })
        .then(result =>{
            if(result.isConfirmed){
                fetch(`https://bistro-boss-restaurant-server-lovat.vercel.app/bookings/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                       refetch()
                       Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        text: "Successfully Deleted booking",
                      });
                    }
                })
            }
        })
        
        
    }

    return (
        <div>
            <SectionTitle subHeading={"Excellent Ambience"} heading={"MY BOOKINGS"}/>
            <Helmet>
                <title>Quick Food || Manage Booking</title>
            </Helmet>
            <div className='w-4/5 mx-auto p-4'>
                <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
                    <h2>Total Booking : {bookings.length}</h2>
                    <h2>Total Price : {total}</h2>     
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='uppercase'>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Name</th>
                            <th>Guest Member</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                        </thead>
                        <tbody>

                            {bookings.map((item,index) => <tr
                            key={item._id}>
                                <th>
                                {index+1}
                                </th>
                                <td>
                                  {item.name}
                                </td>
                                <td>
                                    {item.guest} guest
                                </td>
                                <td className='text-start'>${item.price}</td>
                                <th>
                                <button onClick={()=>handleDeleteButton(item._id)} className="btn btn-ghost btn-xs text-xl text-orange-400"><FaTrashAlt /></button>
                                </th>
                            </tr>
                            )}
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageBooking;