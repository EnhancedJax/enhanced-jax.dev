"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@comp/variants";
import LucideIcon from "./LucideIcon";
import { useState } from "react";
import Tooltip from "@comp/Tooltip";

const Socials = () => {
  return (
    <motion.div
      variants={fadeIn}
      className="flex items-center self-stretch justify-center h-12 gap-5"
    >
      <Button text="Github" icon="Github" open="https://github.com/EnhancedJax" />
      <Button text="Instagram" icon="Instagram" open="https://www.instagram.com/enhancedjax/" />
      <Button text="Download resume" icon="FileDown" open="/applications/Resume.pdf" />
      <Button
        text="Figma design"
        icon="Figma"
        open="https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1"
      />
    </motion.div>
  );
};

const Button = ({ open, icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -2, color: "#EDEDED" }}
      className="relative cursor-pointer text-cdarkgray"
      onClick={() => window.open(open)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LucideIcon name={icon} />
      <Tooltip hoveredState={isHovered} text={text} direction="down" />
    </motion.div>
  );
};

export default Socials;
