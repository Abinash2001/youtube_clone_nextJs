"use client"
import styles from "@/app/styles/searchScreen.css"
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import VideoHorizontal from "@/app/components/VideoHorizontal";
import Search from "@/app/components/Search";
const Page = () => {
    const {query}=useParams()
    const[searchData,setSearchData]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((res)=>
                    setSearchData(res.data.items)
                    // console.log(res.data.items)
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }
    return (
        <>
            <div>
                {
                    searchData.map((curElem,index)=>{
                        return <Search key={index}{...curElem}/>
                    })
                }
            </div>
        </>
    );
};

export default Page;