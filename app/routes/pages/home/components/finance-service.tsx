import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import ScrollOpacity from '~/components/animation/scroll-opacity';

export default function FinanceService() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      className="h-auto desktop:h-[4231px]"
      ref={ref}
      style={{ lineHeight: scrollY }}
    >
      <div className="container py-[100px] desktop:pt-[250px] desktop:pb-[250px]">
        <div className="mb-[100px] desktop:mb-[210px]">
          <h1 className="mb-[64px] text-[36px] leading-[1.4] font-[700] text-[#191f28] desktop:mb-[140px] desktop:text-[60px]">
            금융을 넘어
            <br />
            일상을 더 편리하게
          </h1>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0}
            endScrollY={0.15}
          >
            <img
              className="m-auto mb-[30px] desktop:mb-[60px]"
              width={740}
              src="/images/finance-01.jpg"
              alt="finance-01"
            />
          </ScrollOpacity>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.23}
            endScrollY={0.35}
          >
            <h2 className="mb-[3px] text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:mb-[5px] desktop:text-[40px]">
              세금 납부, 등본 발급까지
            </h2>
            <h3 className="mb-[20px] text-[26px] leading-[1.3] font-[700] text-[#b0b8c1] desktop:mb-[24px] desktop:text-[40px]">
              토스로 한 번에
            </h3>
            <p className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[20px]">
              놓치기 쉬운 세금 납부 및 환급은 물론
              <br />
              발급을 받을 때마다 귀찮았던 주민등록 등초본까지.
              <br />
              이제 토스로 편하게 신청하고 받아보세요.
            </p>
          </ScrollOpacity>
        </div>

        <div className="mb-[100px] flex flex-col items-end desktop:mb-[220px] desktop:flex-row desktop:items-start">
          <div className="w-full desktop:flex-2">
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.342}
              endScrollY={0.536}
            >
              <img
                className="mb-[30px] w-[240px] desktop:mb-[40px] desktop:w-[673px]"
                src="/images/finance-02-01.jpg"
                alt="finance-02-01"
              />
            </ScrollOpacity>
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.58}
              endScrollY={0.64}
            >
              <h2 className="mb-[5px] text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:text-[40px]">
                보험
              </h2>
              <h3 className="text-[26px] leading-[1.3] font-[700] text-[#b0b8c1] desktop:text-[40px]">
                조회부터 상담,
                <br />
                병원비 돌려받기를 간편하게
              </h3>
            </ScrollOpacity>
          </div>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.37}
            endScrollY={0.56}
            className="mt-[50px] w-[240px] desktop:mt-[122px] desktop:w-auto desktop:flex-1"
          >
            <img
              className="mb-[30px] w-[240px] desktop:mb-[35px] desktop:w-[336px]"
              src="/images/finance-02-02.jpg"
              alt="finance-02-02"
            />
            <p className="text-[18px] leading-[1.5] font-[600] text-[#333d4b]">
              또래보다 보험료는 적절하게 내고 있는지, 낸 만큼 보장받고 있는지 확인해
              보세요.
              <br />
              전문가와의 상담을 통해 내게 딱 맞는 보험을 추천 받고, 병원비를 간편하게
              청구할 수 있어요.
            </p>
          </ScrollOpacity>
        </div>

        <div>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.67}
            endScrollY={0.84}
          >
            <img
              className="mb-[30px] desktop:mb-[50px]"
              width={1048}
              src="/images/finance-03.jpg"
              alt="finance-03"
            />
          </ScrollOpacity>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.9}
            endScrollY={0.95}
            className="flex flex-col desktop:flex-row"
          >
            <div className="mb-[30px] flex-1 desktop:mb-0">
              <h2 className="mb-[5px] text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:text-[40px]">
                내 부동산 · 자동차
              </h2>
              <h3 className="text-[26px] leading-[1.3] font-[700] text-[#b0b8c1] desktop:text-[40px]">
                정기적으로 관리해보세요
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[17px] leading-[1.5] font-[600] text-[#333d4b]">
                집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.
                <br />
                시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과 <br />
                자동차 관리도 토스에서 시작해 보세요.
              </p>
            </div>
          </ScrollOpacity>
        </div>
      </div>
    </motion.section>
  );
}
