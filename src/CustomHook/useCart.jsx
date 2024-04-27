import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCart = email => {
   const {user, loading} = useContext(AuthContext);
   const token = localStorage.getItem('access-token');

   const {refetch,data: cart=[]} = useQuery({
    queryKey: ['cart',user?.email],
    enabled: !loading,
    queryFn: async () =>{
        const response = await fetch(`https://bistro-boss-restaurant-server-lovat.vercel.app/carts?email=${user.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return response.json();
    }
   })

   return [cart,refetch]
}

export default useCart;