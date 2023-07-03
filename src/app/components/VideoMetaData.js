"use client"
import React, {useEffect, useState} from 'react';
import {AiFillDislike, AiFillLike} from "react-icons/ai";
import styles from "@/app/styles/videoMetaData.module.css"
import numeral from "numeral";
import moment from "moment/moment";
import ShowMoreText from "react-show-more-text";
import axios from "axios";

const VideoMetaData = (data) => {
    const {contentDetails,snippet,statistics}=data;
    // console.log(data)

    // fetch data of channel icon
    const[icon,setIcon]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${snippet?.channelId}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((res)=>
                        setIcon(res?.data?.items[0])
                    // console.log(res?.data?.items)
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }
    // console.log(icon[0]?.snippet?.thumbnails?.default?.url)

    // fetch data and check channel is subcribe or not
    // const [subcribe,setSubcribe]=useState([])
    // useEffect(()=>{
    //     const accessToken = 'AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY';
    //
    //     const headers = {
    //         Authorization: `Bearer ${accessToken}`,
    //     };
    //     axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&forChannelId=${snippet?.channelId}&mine=true&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`,
    //         { headers })
    //         .then((response)=>
    //             // setSubcribe(response.data.items)
    //             console.log(response)
    //         )
    // },[])


    return (
        <>
            <div className={styles.videoMetaData}>
                <div className={styles.videoMetaData_top}>
                    <h2>{snippet?.title}</h2>
                    <div className={styles.view}>
                        <span>{numeral(data.statistics?.viewCount).format('0a').toUpperCase()} Views • {moment(snippet?.publishedAt).fromNow()}</span>
                        <div className={styles.like}>
                            <span>
                                <AiFillLike/>
                                {numeral(statistics?.likeCount).format('0a').toUpperCase()}
                            </span>
                            <span>
                                <AiFillDislike/>
                                {numeral(1000).format('0a').toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.videoMetaData_channel}>
                    <div className={styles.channel}>
                        <img src={icon?.snippet?.thumbnails?.default?.url} alt=""/>
                        <div className={styles.channelDetails}>
                            <h2>{snippet?.channelTitle}</h2>
                            {/*<span>{numeral(icon.statistics?.subscriberCount).format('0a').toUpperCase()} Subcriber</span>*/}
                            <span>{numeral(10000).format('0a').toUpperCase()} Subcriber</span>
                        </div>
                    </div>
                    <div className={styles.subcribe}>
                        <button>Subcribe</button>
                    </div>
                </div>
                <div className={styles.videoMetaData_description}>
                    <ShowMoreText
                        lines={3}
                        more={"Show More"}
                        less={"Show Less"}
                        anchorClass={styles.showMoreText}
                    >
                        {snippet?.description}
                    </ShowMoreText>
                </div>
            </div>
        </>
    );
};

export default VideoMetaData;