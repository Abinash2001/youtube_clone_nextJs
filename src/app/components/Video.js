import styles from "@/app/styles/video.module.css"
import {AiFillEye} from "react-icons/ai";
import moment from "moment";
import numeral from 'numeral';
import axios from "axios";
import {useEffect, useState} from "react";
import { useRouter} from 'next/navigation'
const Video = (myData) => {
    const {id,snippet,contentDetails,statistics}=myData;

    // const res= axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)

    const[icon,setIcon]=useState([]);
    try {
        useEffect(()=>{
            axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${snippet.channelId}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((res)=>
                    setIcon(res.data.items[0])
                )
        },[]);
    }
    catch (error){
        console.log(error)
    }

    const convertDurationToNumeral = (duration) => {
        const match = duration?.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match || match.length < 4) {
            return 'Invalid duration format';
        }

        const hours = parseInt(match[1]?.replace('H', ''), 10) || 0;
        const minutes = parseInt(match[2]?.replace('M', ''), 10) || 0;
        const seconds = parseInt(match[3]?.replace('S', ''), 10) || 0;

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds > 59) {
            return 'Invalid duration values';
        }

        const totalMinutes = hours * 60 + minutes;
        const displayHours = Math.floor(totalMinutes / 60);
        const displayMinutes = totalMinutes % 60;
        if(displayHours==0)
        {
            return numeral(displayMinutes).format('00') + ':' + numeral(seconds).format('00');
        }
        return numeral(displayHours).format('0') + ':' + numeral(displayMinutes).format('00') + ':' + numeral(seconds).format('00');
    };
    const router=useRouter()
    const handleVideoClick=()=> {
        router.push(`/watchScreen/${id}`)
    }

    return (
        <>
            <div className={styles.video} onClick={handleVideoClick}>
                <div className={styles.top}>
                    <img src={snippet.thumbnails.medium.url} alt=""/>
                    <span>{convertDurationToNumeral(contentDetails.duration)}</span>
                </div>
                <div className={styles.video_title}>
                    {snippet.title}
                </div>
                <div className={styles.video_details}>
                    <span><AiFillEye className={styles.icon}/> {numeral(statistics.viewCount).format('0a').toUpperCase()} • </span>
                    <span> {moment(snippet.publishedAt).fromNow()}</span>
                </div>
                <div className={styles.video_channel}>
                    <img src={icon.snippet?.thumbnails.default.url} alt=""/>
                    <p>{snippet.channelTitle}</p>
                </div>
            </div>
        </>
    );
};

export default Video;