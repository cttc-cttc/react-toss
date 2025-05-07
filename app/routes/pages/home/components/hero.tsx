import { motion } from 'motion/react';

import HeroDown from '~/components/svg/hero-down.svg?react';

import AppButton from './app-button';

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-60px)] w-full flex-col items-center bg-[url('/images/new_main.png')] bg-cover bg-center pt-[120px]">
      <div className="hero-shadow absolute top-0 h-[500px] w-full" />
      <motion.div
        className="absolute z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        // duration: 애니메이션 재생 시간
        // ease: 디폴트는 선형적, 지정하면 곡선형태로 애니메이션 (별 차이 안느껴짐)
      >
        <h1 className="text-center text-[66px] leading-[1.4] font-[700]">
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
        <div className="mt-[50px] flex justify-center gap-1">
          <AppButton>
            <img src="/images/applekorea.png" alt="apple_icon" width={24} height={24} />
            App Store
          </AppButton>
          <AppButton>
            <img src="/images/googleplay.png" alt="google_icon" width={24} height={24} />
            Google Play
          </AppButton>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-[45px] z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, y: [0, 15, 0], scale: 1 }}
        transition={{
          opacity: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut',
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        }}
      >
        <HeroDown width={50} height={50} />
      </motion.div>
    </section>
  );
}
