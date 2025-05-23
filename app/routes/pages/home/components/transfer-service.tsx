import InDropUp from '~/components/animation/in-drop-up';
import Clock from '~/components/svg/clock-icon.svg?react';
import Shield from '~/components/svg/shield-icon.svg?react';
import TransferServiceLogo from '~/components/svg/transfer-service-logo.svg?react';

export default function TransferService() {
  return (
    <section className="h-auto bg-[#F9FAFB] desktop:h-[2311px]">
      <div className="container h-full py-[100px] desktop:py-[250px]">
        <InDropUp>
          <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
            송금
          </h1>
          <h2 className="mb-[60px] text-[28px] leading-[1.4] font-[700] text-[#191f28] desktop:mb-[80px] desktop:text-[50px]">
            간편하고 안전하게
            <br />
            수수료는 평생 무료로,
            <br />
            이런 송금 써보셨나요?
          </h2>
        </InDropUp>
        <div className="mb-[60px] flex flex-col items-center justify-between pl-[20px] desktop:mb-[150px] desktop:h-[384px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-[510px] pl-[38px]">
            <p className="mb-[8px] flex text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:mb-[10px] desktop:text-[20px]">
              <TransferServiceLogo width={24} height={24} className="mr-[4px]" />
              평생 무료 송금
            </p>
            <p className="mb-[10px] text-[24px] leading-[1.4] font-[700] text-[#333d4b] desktop:mb-[20px] desktop:text-[40px]">
              토스 평생 무료송금으로
              <br />
              모두의 금융에 자유를
            </p>
            <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684] desktop:text-[20px]">
              누구에게 보내든 은행 상관 없이,
              <br />
              이제 토스와 함께 수수료 걱정 없이 송금하세요.
            </p>
          </InDropUp>

          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/section1_2_01_re.png" alt="section1_2_01_re" />
          </InDropUp>
        </div>
        <div className="mb-[60px] flex flex-col-reverse items-center justify-between pl-[20px] desktop:mb-[150px] desktop:h-[384px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/section1_2_02.png" alt="section1_2_02" />
          </InDropUp>
          <InDropUp className="w-[510px] pl-[38px]">
            <p className="mb-[8px] flex text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:mb-[10px] desktop:text-[20px]">
              <Shield width={24} height={24} className="mr-[4px]" />
              사기계좌 조회
            </p>
            <p className="mb-[10px] text-[24px] leading-[1.4] font-[700] text-[#333d4b] desktop:mb-[20px] desktop:text-[40px]">
              송금 전 사기 내역 조회로
              <br />
              피해를 미리 방지할 수 있어요
            </p>
            <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684] desktop:text-[20px]">
              송금 전 토스가 알아서 사기 내역 조회를 해드려요.
              <br />
              상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
              <br />
              안전하게 송금할 수 있어요.
            </p>
          </InDropUp>
        </div>
        <div className="flex flex-col items-center justify-between pl-[20px] desktop:h-[384px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-[510px] pl-[38px]">
            <p className="mb-[8px] flex text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:mb-[10px] desktop:text-[20px]">
              <Clock width={24} height={24} className="mr-[4px]" />
              자동이체 예약
            </p>
            <p className="mb-[10px] text-[24px] leading-[1.4] font-[700] text-[#333d4b] desktop:mb-[20px] desktop:text-[40px]">
              은행 점검 시간,
              <br />
              기다릴 필요 없어요
            </p>
            <p className="text-[15px] leading-[1.5] font-[600] text-[#6b7684] desktop:text-[20px]">
              은행 점검 시간에는 자동이체 예약을 이용해보세요.
              <br />
              점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
            </p>
          </InDropUp>

          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/section1_2_03.png" alt="section1_2_03" />
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
