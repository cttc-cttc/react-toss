import { motion, useScroll, useTransform } from 'motion/react';

import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}

export default function FinanceIntro({ ref }: Props) {
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
  });
  const leftClip = useTransform(
    scrollYProgress,
    [0.65, 1],
    ['inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
  );
  const rightClip = useTransform(
    scrollYProgress,
    [0.65, 1],
    ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
  );

  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="flex h-[665px] bg-[url('/images/finance_bg_mobile.png')] bg-contain bg-center bg-no-repeat desktop:h-[800px] desktop:bg-[url('/images/finance_bg.jpg')] desktop:bg-cover">
      <motion.div className="grow-1 bg-white" style={{ clipPath: leftClip }} />
      <div className="container flex h-full items-center justify-center">
        <h1 className="text-center text-[40px] font-[700] text-white desktop:text-[80px]">
          꼭 필요했던 {isMobile && <br />}금융
        </h1>
      </div>
      <motion.div className="flex-1 bg-white" style={{ clipPath: rightClip }} />
    </section>
  );
}
