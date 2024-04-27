import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors },reset} = useForm();
    return (
        <div className='w-full px-10'>
            <Helmet title='Quick Food || Add Item'/>
            <SectionTitle subHeading={"Fillup Form"} heading={"Update Item "}/>

            <form >
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
                    {/* <p className=''>{error}</p> */}
                </label>

                <input type="submit" value="Add Item" className='btn btn-sm mt-4'/>
                
            </form>
        </div>
    );
};

export default UpdateItem;