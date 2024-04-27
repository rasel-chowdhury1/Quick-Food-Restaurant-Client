import React from 'react';
import { Helmet } from 'react-helmet-async';
import img from "../../../assets/contact/banner.jpg";
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaPhone } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register,handleSubmit,formState: { errors },reset} = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        const date = new Date();
        const  {name, email, phone, message} = data;
        const newMail = {name,email,phone,message,date};
        // console.log(newMail);
        axiosSecure.post('/mail',newMail)
        .then(data => {
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    title: "Thank You!!!",
                    text: "We are recived Your mail!",
                    icon: "success"
                  });
                navigate('/')
            }
        })
    }

    return (
        <div>
            <Helmet>
            <title>Quick Food || ContactUs</title>
            </Helmet>
            <BannerSection
                img={img}
                heading={"CONTACT US"}
                subHeading={"Would you like to try a dish?"}
            ></BannerSection>
            <SectionTitle
                heading={"OUR LOCATION"}
                subHeading={"Visit Us"}
            ></SectionTitle>

            <div className='w-3/5 flex md:flex-auto mx-auto justify-center text-center space-x-4'>
                <div className=' w-1/3'>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className=' w-4/5 mx-auto p-8 bg-slate-100 my-auto'>
                        <h3>PHONE</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className=' w-1/3'>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className=' w-4/5 mx-auto p-8 bg-slate-100 my-auto'>
                        <h3>ADDRESS</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className=' w-1/3'>
                    <div className='bg-yellow-400 '>
                        <p className='py-4'><FaPhone className='mx-auto' /></p>
                    </div>
                    <div className=' w-4/5 mx-auto p-8 bg-slate-100 my-auto'>
                        <h4 className='mb-2'>WORKING HOURS</h4>
                        <p className='text-xs'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-xs pb-2'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

           <SectionTitle
                heading={"CONTACT FORM"}
                subHeading={"Send Us a Message"}
            ></SectionTitle>

            <div className='w-3/5 mx-auto my-4 bg-[#D9D9D9]'>
               <form onSubmit={handleSubmit(onSubmit)} className='p-6 '>
                <div className='flex'>
                    <label className="form-control w-full mr-4">
                        <div className="label">
                            <span className="label-text">Name*</span>
                        </div>
                        <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        {errors.name&& <span>Enter your name</span>}
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email*</span>
                        </div>
                        <input type="email" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        {errors.email && <span>write email here</span>}
                    </label>
                </div>

                   <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Phone*</span>
                        </div>
                        <input type="number" {...register("phone", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                        {errors.phone && <span>write phone number here</span>}
                    </label>

                <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Message*</span>
                </div>
                <textarea {...register("message", { required: true })} className="textarea textarea-bordered h-24  mb-20" placeholder="Bio"></textarea>
                {errors.message && <span>write detail here</span>}
                </label>

                <div className='w-[300px] mx-auto'>
                  <input type='submit' value="Message"  className="btn btn-wide bg-yellow-400 mx-auto"></input>
                </div>

               </form>
            </div>
             
        </div>
    );
};

export default ContactUs;