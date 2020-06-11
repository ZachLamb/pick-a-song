import Head from "next/head";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import "../styles/styles.scss";
import cardCSS from "../styles/card.scss";

export default function Home() {
  let animation = useAnimation();

  // Turn x and y into animatable values
  let x = useMotionValue(0);
  let y = useMotionValue(0);
  const xRange = [-150, -50, 50, 150];
  const opacityRange = [0, 1, 1, 0];

  // Change the rotation value based on the x position
  let rotate = useTransform(x, [-150, 150], [-40, 40]);
  const opacity = useTransform(x, xRange, opacityRange)

  function handleDragEnd(event, info) {
    // Get the x value of the drag event
    const dragX = info.point.x;
    
    //grab vw from DOM to calculate width of screen
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const halfway = vw/8;
    console.log(halfway);

    // If dragged past a certain point to the right, stop tracking the x and y positions
    // Animate the card to fly to the right
    if (dragX > halfway) {
      x.stop()
      y.stop()
      animation.start({ left: 600, transition: { duration: 0.2 },transform: `rotate(40deg)`});
    }

    // If dragged past a certain point to the left, stop tracking the x and y positions
    // Animate the card to fly to the left
    else if (dragX < -halfway) {
      x.stop()
      y.stop()
      animation.start({ right: 600, transition: { duration: 0.2 },transform: `rotate(-40deg)` });
    }
  }

  return (
    <div className="container">
      <Head>
        <title>noted</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <h1 className="title">Note'd</h1>
      </nav>
      <main>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          onDragEnd={handleDragEnd}
          className={cardCSS.card}
          // Set the x and y values to a value that is animatable
          x={x}
          y={y}
          dragElastic={1}
          // Add animations controls
          animate={animation}
          rotate={rotate}
          opacity={opacity}
        ></motion.div>
      </main>
    </div>
  );
}
