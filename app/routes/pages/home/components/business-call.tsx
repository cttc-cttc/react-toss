import { Button } from '~/components/ui/button';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function BusinessCall() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-[306px] bg-[#f5f6f8] py-[33px]">
      <div className="m-auto flex w-[800px] justify-center">
        <div className="flex w-[92%] items-center justify-between">
          <div>
            <h1 className="mb-[16px] text-[36px] leading-[1.3] font-[700] text-[#333d4b]">
              비즈니스 고객 제보
            </h1>
            <p className="mb-[24px] text-[18px] leading-[1.5] font-[400] text-[#00132b94]">
              토스팀과의 협업 중 불편을 느끼셨나요?
              <br />
              지금 바로 알려주세요.
            </p>
            <Button variant="secondary">접수하기</Button>
          </div>
          {!isMobile && (
            <div>
              <img
                src="/images/business-call.png"
                alt="business-call"
                width={240}
                height={240}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
