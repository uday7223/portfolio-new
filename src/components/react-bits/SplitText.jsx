import { motion } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 0.05,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: 'easeOut' },
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: animate.opacity,
      y: animate.y,
      transition: transition,
    },
    hidden: {
      opacity: initial.opacity,
      y: initial.y,
    },
  };

  return (
    <motion.div
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: 'inline-block', overflow: 'visible', marginRight: '0.2em' }}>
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              variants={child}
              style={{ display: 'inline-block' }}
              key={letterIndex}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default SplitText;
