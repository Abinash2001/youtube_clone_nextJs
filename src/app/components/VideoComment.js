"use cline"
import styles from "@/app/styles/videoComments.module.css"
import Comment from "@/app/components/Comment";
import {useEffect, useState} from "react";
import axios from "axios";
const VideoComment = (data) => {
    // console.log(data?.snippet?.channelId)
    const[comment,setComment]=useState([]);
    // try {
    //     useEffect(()=>{
    //         axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${data?.id}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
    //             .then((resComm)=>
    //                     setComment(resComm?.data?.items)
    //                 // console.log(resComm.data.items)
    //             )
    //     },[]);
    // }
    // catch (error){
    //     console.log(error)
    // }
    useEffect(() => {
        if (data?.id) {
            axios
                .get(
                    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${data?.id}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`
                )
                .then((resComm) => {
                    setComment(resComm?.data?.items);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [data?.id]);
    console.log(comment)

    const [visibleComments, setVisibleComments] = useState(0);
    const [showAllComments, setShowAllComments] = useState(false);
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
                        comment.slice(0, visibleComments).map((curElem,index) => {
                            return <Comment key={index} {...curElem} />;
                        })
                    }
                    {
                        window.innerWidth <= 884 && visibleComments < comment.length && (
                            <button onClick={() => setVisibleComments(visibleComments + comment.length)}>
                                Show More
                            </button>
                        )
                    }
                    {
                        visibleComments === comment.length && (
                            <button onClick={() => setVisibleComments(0)}>
                                Show Less
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default VideoComment;
