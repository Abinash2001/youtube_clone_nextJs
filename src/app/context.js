'use client'
import {createContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext=createContext()
const AppProvider=({children})=>{
        const[myData,setMyData]=useState([]);
        useEffect(()=>{
            axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=searchSortUnspecified&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY")
                .then((res)=>
                        setMyData(res.data.items)
                    // console.log(res.data.items)
                )
        },[]);
    return <AppContext.AppProvider value={myData}>{children}</AppContext.AppProvider>
};
    export {AppContext,AppProvider};