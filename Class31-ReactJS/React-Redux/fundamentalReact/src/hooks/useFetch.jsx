import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        try {
            setError(null)
            setLoading(true);
            const res = await fetch(url);
            const resData = await res.json();
            setData(resData);
            setLoading(false)
            
        } catch (error) {
            setError("Something went wrong, please try again later");
            setLoading(false)
        }
    }

    return {data, loading, error}
}
