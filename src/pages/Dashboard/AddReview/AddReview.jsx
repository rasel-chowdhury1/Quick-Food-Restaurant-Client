import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { BiSolidPaperPlane } from "react-icons/bi";
import useAuth from '../../../CustomHook/useAuth';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReview = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    console.log(user.email)
    const [rating,setRating] = useState(2);
    const { register, handleSubmit, formState: { errors },reset} = useForm();


    const handleRatingChange = (value) => {
        setRating(value);
      };
    
      const onSubmit = (data) => {
        console.log(data)
        
        const {name,suggestion,details} = data;
        const newReview = {author:user.displayName, name,suggestion,details,rating};
        console.log(newReview)

        axiosSecure.post('/addReview', newReview)
        .then(data =>{
            if(data.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank You for the Review!!!",
                    showConfirmButton: false,
                    timer: 1500
                })
            reset()
            }
        })

      }

    return (
        <div>
            <SectionTitle subHeading={"Sharing is Caring!!!"} heading={"GIVE A REVIEW..."}></SectionTitle>
            <div className='w-4/5 mx-auto bg-gray-300 py-8'>
                <h3 className='uppercase text-2xl font-semibold text-center my-6'>rate us!</h3>
                <div className='text-center mb-8'>
                    <div className="rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <input
                        key={value}
                        type="radio"
                        name="rating-2"
                        className={`mask mask-star-2 mx-2 text-xl bg-orange-400 ${rating === value ? 'checked' : ''}`}
                        checked={rating === value}
                        onChange={() => handleRatingChange(value)}
                        />
                   ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto ' >
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text font-semibold">Which recipe you liked most?</span>
                        </div>
                        <input type="text" placeholder="Recipe you liked most"
                        {...register("name", {required: true, maxLength: 120})}
                        className="input input-bordered w-full " />
                        {errors.name && <span className='text-orange-400'>You liked recipe name </span>}
                    </label>

                    
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text font-semibold">Do you have any suggestion for us?</span>
                        </div>
                        <input type="text" placeholder="Sugggestion"
                        {...register("suggestion", { maxLength: 120})}
                        className="input input-bordered w-full " />
                    </label>

                    <label className="form-control my-4">
                        <div className="label">
                            <span className="label-text font-semibold">Kindly express your care in a short way.</span>
                        </div>
                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Review in detail"></textarea>
                        {errors.details && <span className='text-orange-400'>please atleast some express </span>}
                    </label>

                    <button type="submit" className=" text-white text-xl btn btn-warning my-4 ">Send Review <BiSolidPaperPlane /></button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;