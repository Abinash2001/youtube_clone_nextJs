import styles from "@/app/styles/sidenav.module.css"
// import style from "@/app/styles/navbar.module.css"
import Link from "next/link";
import {AiOutlineHome,AiOutlinePlayCircle,AiOutlineHistory} from "react-icons/ai";
import {MdOutlineVideoLibrary,MdOutlineSubscriptions} from "react-icons/md";
const SideNav = () => {
    return (
        <div className={styles.container}>
           <div className={styles.navbarList}>
               <div className={styles.navbarItem}>
                   <Link href="/" className={styles.navbarLink}>
                       <AiOutlineHome className={styles.icon}/>
                       <span>Home</span>
                   </Link>
               </div>
               <div className={styles.navbarItem}>
                   <Link href="/" className={styles.navbarLink}>
                       <MdOutlineSubscriptions className={styles.icon}/>
                       <span>Subscription</span>
                   </Link>
               </div>
               <div className={styles.navbarItem}>
                   <Link href="/" className={styles.navbarLink}>
                       <MdOutlineVideoLibrary className={styles.icon}/>
                       <span>Library</span>
                   </Link>
               </div>
               <div className={styles.navbarItem}>
                   <Link href="/history" className={styles.navbarLink}>
                       <AiOutlineHistory className={styles.icon}/>
                       <span>History</span>
                   </Link>
               </div>
               <div className={styles.navbarItem}>
                   <Link href="/" className={styles.navbarLink}>
                       <AiOutlinePlayCircle className={styles.icon}/>
                       <span>Your Videos</span>
                   </Link>
               </div>
           </div>
        </div>
    );
};

export default SideNav;