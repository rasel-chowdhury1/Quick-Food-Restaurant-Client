import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token
// console.log(img_hosting_token)

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    // console.log("axiosSecure - ", axiosSecure)
    const [error,setError] = useState('');
    const { register, handleSubmit, formState: { errors },reset} = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log('this is image url data ',imgResponse)
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,category,recipe,price} = data;
                const newItem = {name,price: parseFloat(price),category,recipe,image:imgURL}
                console.log(newItem);

                axiosSecure.post('/menus',newItem)
                .then(data =>{
                    if(data.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully Added Item",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          reset()
                    }
                })
            }
            else{
               setError(imgResponse.error.message)
            }
        })
    };
    console.log(errors);

    return (
        <div className='w-full px-10'>
            <Helmet title='Quick Food || Add Item'/>
            <SectionTitle subHeading={"What's new"} heading={"Add an Item"}/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </div>
                    <input type="text" placeholder="Recipe name"
                     {...register("name", {required: true, maxLength: 120})}
                     className="input input-bordered w-full " />
                </label>

                <div className='flex my-4'>
                    <label className="form-control w-full mr-5 ">
                        <div className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </div>

                        <select defaultValue="Pick One"{...register("category", { required: true })}
                        className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Desserts</option>
                        </select>
                    </label>

                    <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </div>
                    <input type="num" placeholder="Price"
                      {...register("price", { required: true })}
                     className="input input-bordered w-full " />
                </label>
                </div>

                <label className="form-control my-4">
                    <div className="label">
                        <span className="label-text">Recipe Details*</span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </label>

                <label className="form-control w-full max-w-xs my-4">
                    <div className="label">
                        <span className="label-text">Item Image</span>
                    </div>
                    <input {...register("image", { required: true })}
                    type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <p className=''>{error}</p>
                </label>

                <input type="submit" value="Add Item" className='btn btn-sm mt-4'/>
                
            </form>
        </div>
    );
};

export default AddItem;