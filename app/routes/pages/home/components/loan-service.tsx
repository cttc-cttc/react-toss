import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';

export default function LoanService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: `0px 0px -200px 0px` });

  return (
    <section className="h-[1326px]">
      <div className="container flex pt-[250px] pb-[250px]">
        <div className="flex-1">
          <InDropUp className="mb-[210px]">
            <h1 className="mb-[20px] text-[28px] leading-[1.3] font-[700] text-[#3182F6]">
              대출
            </h1>
            <h2 className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              여러 은행의 조건을
              <br />
              1분 만에
              <br />
              확인해보세요
            </h2>
          </InDropUp>
          <div>
            <motion.div ref={ref}>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700] text-[#333d4b]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              >
                한도는 높게,
              </motion.h2>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700] text-[#333d4b]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
              >
                금리는 <span className="text-[#8b95a1]">낮게,</span>
              </motion.h2>
              <motion.h2
                className="mb-[30px] text-[48px] leading-[1.5] font-[700] text-[#333d4b]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
              >
                부담은 <span className="text-[#d1d6db]">적게.</span>
              </motion.h2>
            </motion.div>
            <InDropUp>
              <p className="text-[23px] leading-[1.5] font-[600] text-[#333d4b]">
                앉은 자리에서 여러 은행의 한도와 금리를 비교하고
                <br />
                내게 꼭 맞는 대출을 찾아보세요.
                <br />
                신용, 비상금, 대환, 주택담보대출 모두 가능해요.
              </p>
            </InDropUp>
          </div>
        </div>
        <div className="flex-1">
          <InDropUp className="relative">
            <img
              className="absolute top-[90px] left-[180px] w-[301px] rounded-[32px]"
              src="/images/loan-service.png"
              alt="loan_service"
            />
            <img
              className="relative left-[70px] w-[600px]"
              src="/images/iPhone15_Clay_Shadow_03.png"
              alt="iPhone15_Clay_Shadow_03"
            />
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
