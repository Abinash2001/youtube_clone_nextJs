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
    // console.log(icon.snippet.thumbnails.default.url)
    // // Extract the channel icon URL from the response
    // const iconUrl = icon.snippet.thumbnails.default.url;

    const convertDurationToNumeral=(duration)=> {
        const match = duration.match(/PT(\d+)M(\d+)S/);
        if (!match || match.length < 3) {
            return 'Invalid duration format';
        }

        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);

        if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds > 59) {
            return 'Invalid duration values';
        }


        return numeral(minutes).format('00') + ':' + numeral(seconds).format('00');
    }
    const router=useRouter()
    // const navigate = useNavigate();
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