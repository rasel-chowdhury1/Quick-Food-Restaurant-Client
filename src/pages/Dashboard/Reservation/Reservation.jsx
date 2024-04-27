import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaPhone } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { useForm } from 'react-hook-form';
import useAuth from '../../../CustomHook/useAuth';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import Swal from 'sweetalert2';

const Reservation = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {register, handleSubmit, watch, formState: { errors },reset} = useForm()
    
    const onSubmit = data =>{
        
        const {date,time,guest,name,phone,email} = data;
        const newBooking = {BookingUser: user.email,date,time,guest,name,phone,email,price: 1550};
        console.log(newBooking)
        axiosSecure.post('/addBooking',newBooking)
        .then(data => {
            console.log(data)
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    title: "Successfully",
                    text: "Thank You for booking!",
                    icon: "success"
                  });
            }
        })
    }
    return (
        <div>
            <SectionTitle subHeading={"Reservation"} heading={"Book A Table"} />
             
            <div className='w-4/5 mx-auto my-4'>
               <form onSubmit={handleSubmit(onSubmit)} className='p-6 '>
                <div className='flex'>
                    <label className="form-control w-full mr-4">
                        <div className="label">
                            <span className="label-text">Date*</span>
                        </div>
                        <input {...register("date", { required: true })} type="date" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.date && <span>Enter a booking date</span>}
                    </label>
                    <label className="form-control w-full mr-4">
                        <div className="label">
                            <span className="label-text">Time*</span>
                        </div>
                        <input {...register("time", { required: true })} type="time" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.time && <span>Enter a booking time</span>}
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Guest*</span>
                        </div>
                        <select {...register("guest")} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 Person</option>
                            <option value="3">3 Person</option>
                            <option value="4">4 Person</option>
                            <option value="5">5 Person</option>
                        </select>
                    </label>
                </div>

                <div className='flex'>
                    <label className="form-control w-full mr-4">
                        <div className="label">
                            <span className="label-text">Name*</span>
                        </div>
                        <input {...register("name", { required: true })}type="text" placeholder=" Your name" className="input input-bordered w-full " />
                        {errors.name && <span>Enter Your name</span>}
                    </label>
                    <label className="form-control w-full mr-4">
                        <div className="label">
                            <span className="label-text">Phone*</span>
                        </div>
                        <input {...register("phone", { required: true })}type="text" placeholder=" Phone Number" className="input input-bordered w-full " />
                        {errors.phone && <span>This field is required</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email*</span>
                        </div>
                        <input {...register("email", { required: true })}type="email" placeholder=" Email" className="input input-bordered w-full " />
                        {errors.email && <span>This field is required</span>}
                    </label>
                </div>

                <div className='w-[300px] mx-auto my-6'>
                  <button type='submit' className="btn btn-wide bg-yellow-600 mx-auto">Book A Table <MdLibraryBooks /></button>
                </div>
               </form>
            </div>

            <SectionTitle subHeading={"Visit Us"} heading={"Our Location" } />

            <div className='w-4/5 flex md:flex-auto mx-auto justify-center text-center space-x-4'>
                <div className=' w-1/3 '>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className='mx-auto p-8 bg-slate-100 my-auto'>
                        <h3>PHONE</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className=' w-1/3'>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className=' mx-auto p-8 bg-slate-100 my-auto'>
                        <h3>ADDRESS</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className=' w-1/3'>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className='mx-auto p-8 bg-slate-100 my-auto'>
                        <h4 className='mb-2'>WORKING HOURS</h4>
                        <p className='text-xs'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-xs pb-2'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;