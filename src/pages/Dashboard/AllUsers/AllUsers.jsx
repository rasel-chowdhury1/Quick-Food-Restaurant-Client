import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';

const AllUsers = () => {
    
  const token = localStorage.getItem('access-token');

    // const {refetch,data: users=[]} = useQuery({
    //     queryFn: async () =>{
    //         const response = await fetch("https://bistro-boss-restaurant-server-lovat.vercel.app/users")
    //         return response.json();
    //     }
    //    })

       const {data: users=[],refetch} = useQuery({
        queryFn: async () =>{
            const response = await fetch("https://bistro-boss-restaurant-server-lovat.vercel.app/users", {
              headers: {
                authorization: `bearer ${token}`
              }
            })
            return response.json();
        }
       })

       console.log(users)

    const handleMakeAdmin = user => {
        console.log(user._id)
        fetch(`https://bistro-boss-restaurant-server-lovat.vercel.app/users/admin/${user._id}`, {
          method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an admin Now!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }

    
    return (
        <div >
            <Helmet>
                <title>Quick Food || All Users</title>
            </Helmet>
            <div >
              <SectionTitle subHeading={"How Many?"} heading={"Manage all Users"}/>
            </div>                 
            <div className='w-4/5 mx-auto mt-4'>
              <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>
              <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user,index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roll === 'admin' ? 'admin' 
                                : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600 text-white "><FaUserShield /></button>}</td>
                                <td><button className="btn btn-ghost bg-red-600 text-white "><FaTrashAlt /></button></td>
                              </tr>)
                        }
                      
                    </tbody>
                  </table>
              </div>
            </div>
      </div>
    );
};

export default AllUsers;