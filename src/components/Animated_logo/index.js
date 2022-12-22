import "./index.css";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 5 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};




function Anmlogo() {
  
  return (
    <div className="app">
      <div className="App1">
        <motion.svg
          width="150"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <g id="Frame 2">
            <g id="Big">
              <motion.path
                id="Polygon 1"
                d="M40.1 32.8399L57.8729 55.5L40.1 78.1601L40.1 32.8399Z"
                stroke="#FFFFFF"
                stroke-width="0.5"
                variants={pathVariants}
              />
              <motion.path
                id="Polygon 2"
                d="M68.65 66.1692L50.1291 43.5L68.65 20.8308V66.1692Z"
                stroke="#FFFFFF"
                stroke-width="0.5"
                variants={pathVariants}
              />
            </g>
            <g id="Small">
              <motion.path
                id="Polygon 3"
                d="M42.6557 32.0374L66.6233 20.7873L49.5036 40.8418L42.6557 32.0374Z"
                stroke="#FFFFFF"
                stroke-width="0.5"
                variants={pathVariants}
              />
              <motion.path
                id="Polygon 4"
                d="M66.1701 66.5298L41.8301 79.3584L58.8204 57.9399L66.1701 66.5298Z"
                stroke="#FFFFFF"
                stroke-width="0.5"
                variants={pathVariants}
              />
            </g>
          </g>
        </motion.svg>
      </div>
      <div className="App2">
        <svg
          width="150"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1">
            <path
              id="Polygon 1"
              d="M58 55.5L40 78.4497L40 32.5503L58 55.5Z"
              fill="#D24545"
            />
            <path
              id="Polygon 2"
              d="M50 43.5L68.75 20.5503V66.4497L50 43.5Z"
              fill="#D24545"
            />
            <path
              id="Polygon 3"
              d="M67 20.5L49.5 41L42.5 32L67 20.5Z"
              fill="#223955"
            />
            <path
              id="Polygon 4"
              d="M41.4567 79.6683L58.8174 57.7827L66.3275 66.5599L41.4567 79.6683Z"
              fill="#223955"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Anmlogo;
