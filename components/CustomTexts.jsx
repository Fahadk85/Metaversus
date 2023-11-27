'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({title, TextStyles}) => (
  <motion.p
    variants={textContainer}  
    className={`font-normal text-14px text-secondary-white ${TextStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, TextStyles}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[60px] text-[40px] text-white ${TextStyles}`}
  >
    {title}
  </motion.h2>
);
