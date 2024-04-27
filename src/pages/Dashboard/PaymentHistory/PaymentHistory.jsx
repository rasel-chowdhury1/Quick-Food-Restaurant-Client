import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../CustomHook/useAuth';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [payment,setPayment] = useState([])

    axiosSecure.get(`/payments/${user.email}`)
    .then(data => setPayment(data.data))



    return (
        <div>
            <SectionTitle subHeading={"At a Glance!"} heading={"Payment History"}/>
            <div className='w-4/5 mx-auto p-8 bg-slate-50'>
                <h3 className='font-bold uppercase'>Total Payments: {payment.length}</h3>
                <div className="overflow-x-auto py-4 ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-600 ">
                            <tr className='font-semibold text-white uppercase'>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                payment.map(pay => <tr key={pay._Id}>
                                    <th>{pay.email}</th>
                                    <td>{pay.transactionId}</td>
                                    <td className='text-center'>{pay.price}</td>
                                    <td>{pay.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;