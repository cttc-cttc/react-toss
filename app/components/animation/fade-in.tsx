import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  mb?: number; // margin bottom
  duration?: number;
}

export default function FadeIn({
  children,
  className,
  mb = -100, // 기본값 정의
  duration = 1.2,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: `0px 0px ${mb}px 0px` });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
