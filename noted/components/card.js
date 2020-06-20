import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import "../styles/styles.scss";
import CheckMarkSVG from "./check-mark";
import CancelSVG from "./cancel";
import PlaySVG from "./play";
import ProgressBar from "./progress-bar";

export default function Card(props) {
  let animation = useAnimation();

  // Turn x and y into animatable values
  let x = useMotionValue(0);
  let y = useMotionValue(0);

  // Change the rotation and opacity value based on the x position
  const xRangeRotate = [-150, 150];
  const xRangeOpacity = [-150, -50, 50, 150];
  const opacityRange = [0, 1, 1, 0];
  const xRotationDegree = [-40, 40];

  let rotate = useTransform(x, xRangeRotate, xRotationDegree);
  const opacity = useTransform(x, xRangeOpacity, opacityRange);

  function handleDragEnd(event, info) {
    // Get the x value of the drag event
    const dragX = info.point.x;

    //grab vw from DOM to calculate width of screen
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const halfway = vw / 8;
    console.log(halfway);

    // If dragged past a certain point to the right, stop tracking the x and y positions
    // Animate the card to fly to the right
    if (dragX > halfway) {
      x.stop();
      y.stop();
      animation.start({
        left: 600,
        transition: { duration: 0.2 },
        transform: `rotate(40deg)`,
      });
    }

    // If dragged past a certain point to the left, stop tracking the x and y positions
    // Animate the card to fly to the left
    else if (dragX < -halfway) {
      x.stop();
      y.stop();
      animation.start({
        right: 600,
        transition: { duration: 0.2 },
        transform: `rotate(-40deg)`,
      });
    }
  }
  return (
    <motion.div
      style={{
        backgroundImage: "url('/assets/images/dualipa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      onDragEnd={handleDragEnd}
      className="card"
      // Set the x and y values to a value that is animatable
      x={x}
      y={y}
      dragElastic={1}
      // Add animations controls
      animate={animation}
      rotate={rotate}
      opacity={opacity}
    >
      <div className="card-container">
        <ul>
          <li id="artist">Dua Lipa</li>
          <li id="song">Cool</li>
          <li id="genre">Pop</li>
        </ul>
          <ProgressBar></ProgressBar>
        <div className="card-btn-group">
          <button className="swipe-left-btn">
            <CancelSVG />
          </button>
          <button className="play-pause-btn">
            <PlaySVG />
          </button>
          <button className="swipe-right-btn">
            <CheckMarkSVG />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
