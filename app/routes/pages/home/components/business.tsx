import InDropUp from '~/components/animation/in-drop-up';
import { Button } from '~/components/ui/button';

interface ServiceProps {
  title: string;
  description: React.ReactNode;
  buttonText: string;
}

// 내부 컴포넌트
const Service = ({ title, description, buttonText }: ServiceProps) => {
  return (
    <div className="w-[300px]">
      <div>
        <h2 className="mb-[10px] text-[26px] leading-[1.3] font-[700] text-white desktop:mb-[12px] desktop:text-[30px]">
          {title}
        </h2>
      </div>
      <div>
        <p className="mb-[20px] text-[18px] leading-[1.6] font-[600] text-[#b0b8c1] desktop:mb-[38px] desktop:text-[17px]">
          {description}
        </p>
      </div>
      <div>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default function Business() {
  return (
    <section className="h-auto bg-black py-[100px] desktop:h-[2172px] desktop:pt-[100px] desktop:pb-[250px]">
      <div className="">
        <InDropUp>
          <img className="mb-[11px] w-full" src="/images/devices.png" alt="devices" />
        </InDropUp>
        <InDropUp>
          <h1 className="mb-[21px] text-center text-[36px] leading-[1.4] font-[700] text-[#fff] desktop:mb-[21px] desktop:text-[60px]">
            사업도 토스와 함께
          </h1>
          <p className="mb-[100px] text-center text-[18px] leading-[1.4] font-[700] text-[#b0b8c1] desktop:mb-[200px] desktop:text-[30px]">
            사업을 시작하셨나요?
            <br />
            사업의 시작부터 관리까지
            <br />
            이제 토스와 함께 하세요.
          </p>
        </InDropUp>
        <InDropUp className="flex flex-col px-[24px] desktop:flex-row desktop:justify-center desktop:px-[48px]">
          <div className="desktop:mt-[40px] desktop:ml-[20px]">
            <Service
              title="토스결제"
              description={
                <>
                  합리적인 수수료,
                  <br />
                  간편한 결제 경험으로 비용은
                  <br />
                  절감하고 매출은 늘리세요.
                </>
              }
              buttonText="가맹점 문의하기"
            />
          </div>
          <div className="mt-[40px] desktop:ml-[20px]">
            <Service
              title="내 매출 장부"
              description={
                <>
                  내 매출 장부 따로 관리할 필요 없어요.
                  <br />
                  총 매출, 총 입금, 총 지출을 보기 쉽게
                  <br />
                  알려드려요.
                </>
              }
              buttonText="자세히 알아보기"
            />
          </div>
          <div className="mt-[40px] desktop:ml-[20px]">
            <Service
              title="토스페이먼츠"
              description={
                <>
                  시작하기 어려웠던 온라인 비즈니스,
                  <br />
                  온라인 결제 토스페이먼츠와
                  <br />
                  함께 해보세요.
                </>
              }
              buttonText="홈페이지 바로가기"
            />
          </div>
          <div className="mt-[40px] desktop:ml-[20px]">
            <Service
              title="토스플레이스"
              description={
                <>
                  포스·주문·결제 시스템까지
                  <br />
                  오프라인 매장을 위한
                  <br />
                  모든 것이 준비되어 있어요.
                </>
              }
              buttonText="홈페이지 바로가기"
            />
          </div>
        </InDropUp>
      </div>
    </section>
  );
}
