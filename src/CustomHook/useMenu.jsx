import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const [axiosSecure] = useAxiosSecure()
    // const [menu,setMenu] = useState([]);
    // const [loading,setLoading] = useState(true);
    // useEffect(() =>{
    //     fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/menus')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])

    const {data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menus');
            return res.data
        }
    })
    return [menu,loading,refetch]
};

export default useMenu;