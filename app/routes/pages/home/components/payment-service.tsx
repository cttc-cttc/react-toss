import InDropUp from '~/components/animation/in-drop-up';

export default function PaymentService() {
  return (
    <section className="h-[1687px] bg-[#f9fafb]">
      <div className="container flex pt-[250px] pb-[165px]">
        <div className="flex-1">
          <InDropUp className="relative">
            <h1 className="mb-[20px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              결제
            </h1>
            <h2 className="mb-[100px] text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              결제는 간편하게,
              <br />
              할인과 적립은 두둑히
            </h2>
            <p className="absolute top-[265px] text-[23px] leading-[1.5] font-[600] text-[#4e5968]">
              온라인과 오프라인 모두
              <br />
              국내는 물론, 해외에서도
              <br />
              토스로 간편하게 결제해요.
            </p>
          </InDropUp>
          <InDropUp>
            <div className="relative">
              <img
                className="absolute top-[90px] left-[-2px] w-[300px] rounded-[40px]"
                src="/images/payment-01.png"
                alt="payment-01"
              />
              <img
                className="relative left-[-115px]"
                src="/images/iPhone15_Clay_Shadow_03.png"
                alt="iPhone15_Clay_Shadow_03"
              />
            </div>
          </InDropUp>
        </div>
        <div className="flex-1">
          <InDropUp>
            <div className="relative">
              <img
                className="absolute top-[90px] left-[162px] w-[300px] rounded-[40px]"
                src="/images/payment-02.png"
                alt="payment-02"
              />
              <img
                className="relative left-[50px]"
                src="/images/iPhone15_Clay_Shadow_03.png"
                alt="iPhone15_Clay_Shadow_03"
              />
            </div>
          </InDropUp>
          <InDropUp className="relative text-[23px] leading-[1.5] font-[600] text-[#4e5968]">
            <p className="absolute top-[50px] left-[150px]">
              결제할 땐, 혜택이 빠질 수 없죠.
              <br />
              쿠폰과 포인트 써서 할인 받고
              <br />
              토스프라임 적립까지 또 받아요.
            </p>
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
