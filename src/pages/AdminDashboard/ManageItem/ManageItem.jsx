import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../CustomHook/useMenu';
import { FaAngleDoubleRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from './../../../CustomHook/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors },reset} = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        console.log('this is update form')
        // const formData = new FormData()
        // formData.append('image', data.image[0])

        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(imgResponse => {
        //     if(imgResponse.success){
        //         const imgURL = imgResponse.data.display_url;
        //         const {name,category,recipe,price} = data;
        //         const newItem = {name,price: parseFloat(price),category,recipe,image:imgURL}
        //         console.log(newItem);

        //         axiosSecure.post('/menu',newItem)
        //         .then(data =>{
        //             if(data.data.insertedId){
        //                 Swal.fire({
        //                     position: "top-end",
        //                     icon: "success",
        //                     title: "Successfully Added Item",
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                   });
        //                   reset()
        //             }
        //         })
        //     }
        // })
    };

    const handleUpdateButton = () =>{
        alert('clicked update button')
    }

    const handleDeleteButton = (id) =>{
        Swal.fire({
            title: "Are you sure",
            text: "Order Item delete from Your cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes,delete it!"
        })
        .then( (result) =>{
            if(result.isConfirmed){
               axiosSecure.delete(`/menu/${id}`)
               .then(res =>{
                  console.log('deleted res', res.data)
                  if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        "Deleted",
                        "Your manage item has been deleted",
                        "Successfully"
                    )
                  }
               })
            }
        })
    }


    return (
        <div className='w-full'>
            <SectionTitle subHeading="Hurry Up" heading="Manage All Items"/>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='uppercase'>
                    <tr>
                        <th>#</th>
                        <th>item </th>
                        <th>category</th>
                        <th>price</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>

                        {menu.map((item,index)=> <tr key={item._id}>
                            <td>
                                {index+1}
                            </td>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                </div>
                                <div>
                            </div>
                            </div>
                            </td>
                            <td>{item.category}</td>
                            <td>${item.price}</td>
                            <td>
                               <NavLink to="/dashboard/updateItem" className="btn btn-ghost btn-xs text-xl text-orange-400"><FaEdit /></NavLink>
                            </td>
                            <td>
                            <button onClick={()=>handleDeleteButton(item._id)} className="btn btn-ghost btn-xs text-xl text-orange-400"><FaTrashAlt /></button>
                            </td>
                        </tr>)}
                        
                        
                    </tbody>
                    
                </table>
            </div>

        </div>
    );
};

export default ManageItem;