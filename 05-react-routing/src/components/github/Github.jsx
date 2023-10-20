import React, { useEffect, useState } from 'react';
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Akhlaquea01').then(response => response.json()).then(data => {
    //         setData(data);
    //     });
    // }, []);
    const data = useLoaderData();
    return (
        <>
            <div className='text-center m-4'>Github Followers:{data?.followers}</div>
            <img src={data?.avatar_url} alt='atts' />
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Akhlaquea01");
    return response.json();
};