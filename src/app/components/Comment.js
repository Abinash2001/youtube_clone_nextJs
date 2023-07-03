import styles from "@/app/styles/comment.module.css"
import moment from "moment/moment";

const Comment = (data) => {
    console.log(data)
    return (
        <div className={styles.comment}>
            <img src={data.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt=""/>
            <div className={styles.commentBody}>
                <p className={styles.userDetails}>{data.snippet?.topLevelComment?.snippet?.authorDisplayName} • {moment(data.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</p>
                <p>{data.snippet?.topLevelComment?.snippet?.textDisplay}</p>
            </div>
        </div>
    );
};

export default Comment;