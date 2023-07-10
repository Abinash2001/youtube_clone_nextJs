import styles from "@/app/styles/search.module.css"
import {AiFillEye} from "react-icons/ai";
import numeral from "numeral";
import moment from "moment/moment";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

const Search = (searchData) => {
    const {id,snippet}=searchData
    const [videoLikeDuration,setVideoLikeDuration]=useState([])
    try {
        useEffect(()=>{
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=${id?.videoId}&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY`)
                .then((res)=>
                    setVideoLikeDuration(res.data.items[0])
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
        router.push(`/watchScreen/${id?.videoId}`)
    }
    return (
        <div className={styles.container} onClick={handleVideoClick}>
            <div className={styles.image}>
                <img src={snippet?.thumbnails?.medium?.url} alt=""/>
                <span>{convertDurationToNumeral(videoLikeDuration?.contentDetails?.duration)}</span>
            </div>
            <div className={styles.videoDetails}>
                <p className={styles.title}>
                    {snippet?.title}
                </p>
                <div className={styles.details}>
                    <AiFillEye className={styles.icon}/> {numeral(videoLikeDuration?.statistics?.viewCount).format('0a').toUpperCase()} •
                    {moment(snippet.publishedAt).fromNow()}
                </div>
                <div className="videoHorizontal_channel">
                    <p>{snippet?.channelTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Search;