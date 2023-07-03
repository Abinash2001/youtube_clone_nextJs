"use client"
import styles from "@/app/styles/watchScreen.css"
import VideoHorizontal from "@/app/components/VideoHorizontal";
import VideoMetaData from "@/app/components/VideoMetaData"
import VideoComment from "@/app/components/VideoComment"
import Comment from "@/app/components/Comment";
import {useParams} from "next/navigation";
import axios from "axios";
import {useEffect, useState} from "react";
import Video from "@/app/components/Video";
const Page = () => {
    const {id}=useParams()

    // fetch data for for video detail
    const[data,setData]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((res)=>
                    setData(res.data.items[0])
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }
    const {contentDetails,snippet,statistics}=data


    // fetch data for for related video detail
    const[relatedVideo,setRelatedVideo]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${id}&type=video&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((videoRes)=>
                    setRelatedVideo(videoRes.data.items)
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }

    return (
        <>
            <div className="container">
                <div className="leftContaoner">
                    <div className="watchScreen">
                        <iframe
                            src={`https://www.youtube.com/embed/${id}`}
                            frameborder="0"
                            title={snippet?.title}
                            allowFullScreen
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                    <VideoMetaData {...data}/>
                    <VideoComment {...data}/>
                </div>
                <div className="rightContainer">
                    {
                        relatedVideo.map((curElem,index)=>{
                            return <VideoHorizontal {...curElem}/>
                        })
                    }
                </div>
            </div>
        </>
    );
};
export default Page;