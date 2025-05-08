import FadeIn from '~/components/animation/fade-in';

export default function FinanceService() {
  return (
    <section className="h-[4231px]">
      <div className="container pt-[250px] pb-[250px]">
        <div className="mb-[210px]">
          <h1 className="mb-[140px] text-[60px] leading-[1.4] font-[700] text-[#191f28]">
            금융을 넘어
            <br />
            일상을 더 편리하게
          </h1>
          <FadeIn>
            <img
              className="m-auto mb-[60px]"
              width={740}
              src="/images/finance-01.jpg"
              alt="finance-01"
            />
          </FadeIn>
          <FadeIn>
            <h2 className="mb-[5px] text-[40px] leading-[1.3] font-[700] text-[#191f28]">
              세금 납부, 등본 발급까지
            </h2>
            <h3 className="mb-[24px] text-[40px] leading-[1.3] font-[700] text-[#b0b8c1]">
              토스로 한 번에
            </h3>
            <p className="text-[20px] leading-[1.5] font-[600] text-[#333d4b]">
              놓치기 쉬운 세금 납부 및 환급은 물론
              <br />
              발급을 받을 때마다 귀찮았던 주민등록 등초본까지.
              <br />
              이제 토스로 편하게 신청하고 받아보세요.
            </p>
          </FadeIn>
        </div>

        <div className="mb-[220px] flex">
          <div className="flex-2">
            <FadeIn>
              <img
                className="mb-[40px]"
                width={673}
                src="/images/finance-02-01.jpg"
                alt="finance-02-01"
              />
            </FadeIn>
            <FadeIn>
              <h2 className="mb-[5px] text-[40px] leading-[1.3] font-[700] text-[#191f28]">
                보험
              </h2>
              <h3 className="text-[40px] leading-[1.3] font-[700] text-[#b0b8c1]">
                조회부터 상담,
                <br />
                병원비 돌려받기를 간편하게
              </h3>
            </FadeIn>
          </div>
          <FadeIn className="mt-[122px] flex-1">
            <img
              className="mb-[35px]"
              width={336}
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
          </FadeIn>
        </div>

        <div>
          <FadeIn>
            <img
              className="mb-[50px]"
              width={1048}
              src="/images/finance-03.jpg"
              alt="finance-03"
            />
          </FadeIn>
          <FadeIn className="flex">
            <div className="flex-1">
              <h2 className="mb-[5px] text-[40px] leading-[1.3] font-[700] text-[#191f28]">
                내 부동산 · 자동차
              </h2>
              <h3 className="text-[40px] leading-[1.3] font-[700] text-[#b0b8c1]">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
