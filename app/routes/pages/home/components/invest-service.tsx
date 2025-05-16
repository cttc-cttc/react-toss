import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function InvestService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-auto py-[100px] desktop:h-[1724px] desktop:pt-[250px] desktop:pb-[250px]">
      <div className="container">
        {isMobile ? (
          <>
            <InDropUp>
              <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6]">
                투자
              </h1>
              <h2 className="mb-[20px] text-[28px] leading-[1.4] font-[700] text-[#191f28]">
                투자,
                <br />
                모두가 할 수 있도록
              </h2>
              <p className="text-[17px] leading-[1.5] font-[600] text-[#333d4b]">
                이해하기 쉬운 용어 설명이 필요 없는 직관적인 화면 구성 송금처럼 쉬운 구매
                경험 그리고 투자 판단에 도움을 주는 콘텐츠까지
              </p>
            </InDropUp>
            <div className="relative mx-auto w-[375px]">
              <img
                className="absolute top-[60px] left-[80px] w-[215px] rounded-[35px]"
                src="/images/invest_screen.png"
                alt="invest_screen"
              />
              <img
                className="relative"
                src="/images/iPhone15_Clay_Shadow_03.png"
                alt="iPhone15_Clay_Shadow_03"
              />
            </div>
            <InDropUp>
              <p className="mt-[12px] text-center text-[20px] leading-[30px] font-[500] text-[#4e5968]">
                별도 앱 설치 없이 토스에서 바로,
                <br />
                토스증권으로 나만의
                <br />
                투자를 시작해 보세요.
              </p>
            </InDropUp>
          </>
        ) : (
          <>
            <InDropUp>
              <h1 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
                투자
              </h1>
              <h2 className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
                투자,
                <br />
                모두가 할 수 있도록
              </h2>
            </InDropUp>
            <div className="text-[23px] leading-[1.5] font-[600] text-[#333d4b]">
              <div className="mb-[12px] flex">
                <InDropUp className="flex flex-1 items-center justify-end">
                  <p className="items-center">
                    이해하기 쉬운 용어
                    <br />
                    설명이 필요 없는
                    <br />
                    직관적인 화면 구성
                  </p>
                </InDropUp>
                <div className="relative flex-2">
                  <img
                    className="absolute top-[90px] left-[112px] w-[300px] rounded-[40px]"
                    src="/images/invest_screen.png"
                    alt="invest_screen"
                  />
                  <img
                    className="relative"
                    src="/images/iPhone15_Clay_Shadow_03.png"
                    alt="iPhone15_Clay_Shadow_03"
                  />
                </div>
                <InDropUp className="flex-1 pt-[150px]">
                  <p>
                    송금처럼 쉬운 구매 경험
                    <br />
                    그리고 투자 판단에
                    <br />
                    도움을 주는 콘텐츠까지
                  </p>
                </InDropUp>
              </div>
              <InDropUp>
                <p className="text-center">
                  별도 앱 설치 없이 토스에서 바로,
                  <br />
                  토스증권으로 나만의 투자를 시작해 보세요.
                </p>
              </InDropUp>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
