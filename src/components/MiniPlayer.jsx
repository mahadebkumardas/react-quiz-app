import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleButton() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <>
      <div
        className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        ref={buttonRef}
        onClick={toggleButton}
      >
        <span className={`material-icons-outlined ${classes.open}`}>
          play_circle_filled
        </span>
        <span
          className={`material-icons-outlined ${classes.close}`}
          onClick={toggleButton}
        >
          close
        </span>
        <ReactPlayer
          className={classes.playerD}
          url={videoUrl}
          width="300px"
          height="168px"
          playing={status}
          controls
        />
        <p>{title}</p>
      </div>
    </>
  );
}
