"use cline"
import styles from "@/app/styles/videoComments.module.css"
import Comment from "@/app/components/Comment";
import {useEffect, useState} from "react";
import axios from "axios";
import Video from "@/app/components/Video";
const VideoComment = (data) => {
    const[comment,setComment]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${data?.id}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((resComm)=>
                        setComment(resComm?.data?.items)
                    // console.log(resComm.data.items)
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }
    // console.log(comment)
    return (
        <>
            <div className={styles.comments}>
                <p>{data.statistics?.commentCount} Comments</p>
                <div className={styles.comment_form}>
                    {/*<img src={icon?.snippet?.thumbnails?.default?.url} alt=""/>*/}
                    {/*<form onSubmit={handleComment}>*/}
                    <form className={styles.form}>
                        <input type="text" placeholder="Write a comment..."/>
                        <button>Comment</button>
                    </form>
                </div>
                <div className="comment_list">
                    {
                        comment.map((curElem)=>{
                            return <Comment {...curElem}/>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default VideoComment;