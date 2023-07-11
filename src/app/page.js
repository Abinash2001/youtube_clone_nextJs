'use client'
import styles from "@/app/page.module.css"
import Video from "@/app/components/Video";
import {useEffect, useState} from "react";
import axios from "axios";

// const url=process.env.NEXT_JS_YT_KEY;

const Page =() => {
    const[myData,setMyData]=useState([]);
    try {
        useEffect(()=>{
            axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY")
                .then((res)=>
                    setMyData(res.data.items)
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }
    return (
        <>
            {
                <div className={styles.main}>
                     {
                         myData.map((curElem,index)=>{
                         return <Video key={index} {...curElem}/>
                     })
                     }
                 </div>
            }
        </>
    )
};
export default Page;