'use client'
import styles from "@/app/page.module.css"
import Video from "@/app/components/Video";
// import {useEffect, useState} from "react";
// import axios from "axios";

const url=process.env.NEXT_JS_YT_KEY;

const Page =() => {
//     const[myData,setMyData]=useState([]);
//     useEffect(()=>{
//         axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=searchSortUnspecified&key=AIzaSyD07G-f9LrntvejUoB1r99q83g0mrC3dOY")
//             .then((res)=>
//                 setMyData(res.data.items)
//                 // console.log(res.data.items)
//             )
//     },[]);

    return (
        <>
            {/*{*/}
                // <div className={styles.main}>
            <Video/>
            {/*    //*/}
            {/*    //     /!*{*!/*/}
            {/*    //     /!*    myData.map((curElem,index)=>{*!/*/}
            {/*    //     /!*    // console.log({...curElem})*!/*/}
            {/*    //     /!*    //     console.log(index)*!/*/}
            {/*    //     /!*    return <Video data={curElem}/>*!/*/}
            {/*    //     /!*})*!/*/}
            {/*    //     /!*}*!/*/}
                // </div>
            {/*}*/}
        </>
    )
};
export default Page;