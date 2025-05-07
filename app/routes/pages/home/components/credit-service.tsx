import InDropUp from '~/components/animation/in-drop-up';

export default function CreditService() {
  return (
    <section className="h-[1686px] bg-[#F9FAFB]">
      <div className="container pt-[250px] pb-[250px]">
        <InDropUp>
          <h1 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
            신용
          </h1>
          <h2 className="mb-[80px] text-[50px] leading-[1.4] font-[700] text-[#191f28]">
            금융 생활의 첫 걸음,
            <br />
            신용점수를 미리
            <br />
            무료로 관리하세요
          </h2>
        </InDropUp>
        <InDropUp className="grid grid-cols-2">
          <div className="mr-[30px] mb-[30px] h-[400px]">
            <img
              src="/images/credit-1.png"
              width={120}
              height={120}
              alt="credit-1"
              className="mb-[30px]"
            />
            <p className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
              내 신용점수
            </p>
            <p className="text-[20px] leading-[1.5] font-[600] text-[#6b7684]">
              언제 어디서든, 원할 때 간편하게
              <br />
              KCB, NICE 신용점수를 한 곳에서 확인할 수<br />
              있어요.
            </p>
          </div>
          <div className="mr-[30px] mb-[30px] h-[400px]">
            <img
              src="/images/credit-2.png"
              width={120}
              height={120}
              alt="credit-2"
              className="mb-[30px]"
            />
            <p className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
              신용점수 올리기
            </p>
            <p className="text-[20px] leading-[1.5] font-[600] text-[#6b7684]">
              통신비, 일반 납부내역 등의 서류를
              <br />
              토스에서 바로 제출해 신용점수를 올릴 수<br />
              있어요.
            </p>
          </div>
          <div className="mr-[30px] mb-[30px] h-[400px]">
            <img
              src="/images/credit-3.png"
              width={120}
              height={120}
              alt="credit-3"
              className="mb-[30px]"
            />
            <p className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
              신용관리 알림
            </p>
            <p className="text-[20px] leading-[1.5] font-[600] text-[#6b7684]">
              신용점수에 변동이 생기면 토스가 알람을 보내드려요.
              <br />
              나의 신용점수가 바뀔 때마다 바로 확인하세요.
            </p>
          </div>
          <div className="mr-[30px] mb-[30px] h-[400px]">
            <img
              src="/images/credit-4.png"
              width={120}
              height={120}
              alt="credit-4"
              className="mb-[30px]"
            />
            <p className="mb-[10px] text-[28px] leading-[1.5] font-[700] text-[#333d4b]">
              신용관리 팁
            </p>
            <p className="text-[20px] leading-[1.5] font-[600] text-[#6b7684]">
              신용점수 관리가 막막하다면?
              <br />
              신용관리 팁 콘텐츠를 한번 읽어보세요.
            </p>
          </div>
        </InDropUp>
      </div>
    </section>
  );
}
