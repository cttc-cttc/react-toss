import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function PaymentService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-auto bg-[#f9fafb] desktop:h-[1687px]">
      <div className="container flex flex-col py-[100px] desktop:flex-row desktop:pt-[250px] desktop:pb-[165px]">
        <div className="flex-1">
          <InDropUp className="relative">
            <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
              결제
            </h1>
            <h2 className="mb-[10px] text-[28px] leading-[1.4] font-[700] text-[#35445a] desktop:mb-[90px] desktop:text-[50px]">
              결제는 간편하게,
              <br />
              할인과 적립은 두둑히
            </h2>
            {!isMobile && (
              <p className="absolute top-[265px] text-[23px] leading-[1.5] font-[600] text-[#4e5968]">
                온라인과 오프라인 모두
                <br />
                국내는 물론, 해외에서도
                <br />
                토스로 간편하게 결제해요.
              </p>
            )}
          </InDropUp>
          <InDropUp>
            <div className="relative flex justify-center">
              <img
                className="absolute top-[60px] left-auto z-10 w-[215px] rounded-[30px] desktop:top-[90px] desktop:left-[-2px] desktop:w-[300px]"
                src="/images/payment-01.png"
                alt="payment-01"
              />
              <img
                className="relative w-[375px] desktop:left-[-115px] desktop:w-auto"
                src="/images/iPhone15_Clay_Shadow_03.png"
                alt="iPhone15_Clay_Shadow_03"
              />
            </div>
          </InDropUp>
          {isMobile && (
            <InDropUp>
              <p className="mb-[32px] flex justify-center text-center text-[17px] leading-[1.5] font-[600] text-[#4e5968]">
                온라인과 오프라인 모두 국내는 물론, <br />
                해외에서도 토스로 간편하게 결제해요.
              </p>
            </InDropUp>
          )}
        </div>
        <div className="flex-1">
          <InDropUp>
            <div className="relative flex justify-center">
              <img
                className="absolute top-[60px] left-auto z-10 w-[215px] rounded-[30px] desktop:top-[90px] desktop:left-[162px] desktop:w-[300px]"
                src="/images/payment-02.png"
                alt="payment-02"
              />
              <img
                className="relative w-[375px] desktop:left-[50px] desktop:w-auto"
                src="/images/iPhone15_Clay_Shadow_03.png"
                alt="iPhone15_Clay_Shadow_03"
              />
            </div>
          </InDropUp>
          <InDropUp className="relative text-[17px] leading-[1.5] font-[600] text-[#4e5968] desktop:text-[23px]">
            {!isMobile ? (
              <p className="absolute top-[50px] left-[150px]">
                결제할 땐, 혜택이 빠질 수 없죠.
                <br />
                쿠폰과 포인트 써서 할인 받고
                <br />
                토스프라임 적립까지 또 받아요.
              </p>
            ) : (
              <p className="mb-[32px] flex justify-center text-center">
                결제할 땐, 혜택이 빠질 수 없죠. 쿠폰과 포인트
                <br />
                써서 할인 받고 토스프라임 적립까지 또 받아요.
              </p>
            )}
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
