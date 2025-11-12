import { useState } from "react";
import styles from "./follow.module.css";

const Follow = () => {
  const [follow, setFollow] = useState(true);

  function switchFollow() {
    setFollow(!follow);
    // if (follow) {
    //   setFollow(false);
    // } else {
    //   setFollow(true);
    // }
  }

  return (
    <div className={styles["profile"]}>
        <div className={styles["name_profile"]}>
            User Name 
        </div>
      

        <button
          onClick={switchFollow}
          className={follow ? styles["on-follow"] : styles["off-follow"]}
            >
          {follow ? "Follow" : "Unfollow"}
        </button> 
    </div>



  )
};

export default Follow;
