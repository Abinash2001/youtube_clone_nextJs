import {AiFillEye} from "react-icons/ai";
import styles from "@/app/styles/video.module.css"
import {useContext} from "react";
import {AppContext} from "@/app/context";

const Video = () => {
    const data=useContext(AppContext);
    console.log('abinash')
    console.log(data)
    // console.log(curElem.snippet)
    // const {snippet}=curElem;
    // console.log(snippet)
    return (
        <>
            {/*{data}*/}
            {/*<div className={styles.video}>*/}
            {/*    <div className={styles.top}>*/}
            {/*        <img src="https://i.ytimg.com/vi/lpsLAP4x-tk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAtNfPqLTXUZdAS58gB_5HHM0Abg" alt=""/>*/}
            {/*        <img src={snippet.thumbnails.default.url} alt=""/>*/}
            {/*        <span>05:00</span>*/}
            {/*    </div>*/}
            {/*    <div className={styles.video_title}>*/}
            {/*        {snippet.title}*/}
            {/*    </div>*/}
            {/*    <div className={styles.video_details}>*/}
            {/*        <span><AiFillEye className={styles.icon}/> 6M •</span>*/}
            {/*        <span> 6 days ago</span>*/}
            {/*    </div>*/}
            {/*    <div className={styles.video_channel}>*/}
            {/*        <img src="https://yt3.ggpht.com/ytc/AGIKgqPmVT6_YQd7RIhhoy9So5Jk9Iqw8pzivKCfLPm_Yg=s68-c-k-c0x00ffffff-no-rj" alt=""/>*/}
            {/*        <p>{snippet.channelTitle}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default Video;