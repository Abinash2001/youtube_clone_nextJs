'use client'
import styles from "@/app/styles/navbar.module.css"
// import { RiMenu4Line } from "react-icons/all"
import { AiOutlineAlignCenter , AiOutlineSearch,AiOutlineVideoCameraAdd,AiOutlineBell,AiOutlineUser} from "react-icons/ai";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
const Header = () => {
    const [input,setInput]=useState('')
    const router=useRouter()
    const handleSubmit=(e)=> {
        e.preventDefault()
        router.push(`/search/${input}`)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.start}>
                <AiOutlineAlignCenter className={styles.icon}/>
                <Image src="/logo1.png"  alt="my logo" width={200} height={70}/>
            </div>
            <div className={styles.center}>
                <form className={styles.search} onSubmit={handleSubmit}>
                    <input type="search" placeholder="Search" value={input} onChange={e=>setInput(e.target.value)}/>
                    <button type="submit"><AiOutlineSearch className={styles.search_icon}/></button>
                </form>
            </div>
            <div className={styles.end}>
                <AiOutlineVideoCameraAdd className={styles.icon}/>
                <AiOutlineBell className={styles.icon}/>
                <AiOutlineUser className={styles.icon}/>
            </div>

        </nav>
    );
};

export default Header;