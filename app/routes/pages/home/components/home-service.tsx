// import { motion, useInView } from 'motion/react';
// import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function HomeService() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });
  // ? once true: 애니메이션 한 번만 적용
  // ? 200px만큼 내려갔을 때 애니메이션 실행
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const right = useTransform(scrollYProgress, [0, 1], ['0px', '280px']);

  return (
    <div className="h-[1015px] desktop:h-[1687px]" ref={ref}>
      <div className="container flex h-full bg-white px-[46px] py-[100px] desktop:pt-[250px] desktop:pb-[165px]">
        {isMobile ? (
          <div>
            <InDropUp>
              <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182F6]">
                홈 · 소비
              </h1>
              <h2 className="text-[28px] leading-[1.8] font-[700] text-[#191F28]">
                내 돈 관리,
                <br />
                지출부터 일정까지
                <br />
                똑똑하게
              </h2>
            </InDropUp>
            <motion.div className="relative flex w-[650px]" style={{ right }}>
              <div>
                <img
                  className="absolute top-[45px] left-[0px] w-[183px] rounded-[32px]"
                  src="/images/home_screen_1.png"
                  alt="home_screen_1"
                />
                <img
                  className="relative left-[-70px] w-[600px]"
                  src="/images/iPhone15_Clay_Shadow_03.png"
                  alt="iPhone15_Clay_Shadow_03"
                />
              </div>
              <div>
                <img
                  className="absolute top-[55px] left-[285px] w-[183px] rounded-[32px]"
                  src="/images/home_screen_2.png"
                  alt="home_screen_2"
                />
                <img
                  className="relative left-[-110px] w-[600px]"
                  src="/images/iPhone15_Clay_Shadow_03.png"
                  alt="iPhone15_Clay_Shadow_03"
                />
              </div>
            </motion.div>
            <InDropUp>
              <p className="pt-[10px] text-[17px] leading-[1.5] font-[600] text-[#333D4B]">
                토스에 계좌와 카드를 연결해 보세요.
                <br />
                계좌 잔액, 대출·투자 내역은 기본,
                <br />
                일자별 소비와 수입까지 한 번에 볼 수 있어요.
              </p>
            </InDropUp>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <InDropUp>
                <h1 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182F6]">
                  홈 · 소비
                </h1>
                <h2 className="text-[50px] leading-[1.8] font-[700] text-[#191F28]">
                  내 돈 관리,
                  <br />
                  지출부터 일정까지
                  <br />
                  똑똑하게
                </h2>
              </InDropUp>

              <InDropUp className="relative">
                <img
                  className="absolute top-[75px] left-[32px] w-[275px] rounded-[32px]"
                  src="/images/home_screen_1.png"
                  alt="home_screen_1"
                />
                <img
                  className="relative left-[-70px] w-[600px]"
                  src="/images/iPhone15_Clay_Shadow_03.png"
                  alt="iPhone15_Clay_Shadow_03"
                />
              </InDropUp>
            </div>
            <div className="flex flex-1 flex-col items-end">
              <InDropUp className="relative">
                <img
                  className="absolute top-[75px] left-[92px] w-[275px] rounded-[32px]"
                  src="/images/home_screen_2.png"
                  alt="home_screen_2"
                />
                <img
                  className="relative left-[-10px] w-[600px]"
                  src="/images/iPhone15_Clay_Shadow_03.png"
                  alt="iPhone15_Clay_Shadow_03"
                />
              </InDropUp>

              <InDropUp>
                <p className="relative left-[10px] text-[23px] leading-[1.5] font-[600] text-[#333D4B]">
                  토스에 계좌와 카드를 연결해 보세요.
                  <br />
                  계좌 잔액, 대출·투자 내역은 기본,
                  <br />
                  일자별 소비와 수입까지 한 번에 볼 수 있어요.
                </p>
              </InDropUp>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
