import HeroDown from '~/components/svg/hero-down.svg?react';

import AppButton from './app-button';

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-60px)] w-full flex-col items-center bg-[url('/images/new_main.png')] bg-cover bg-center pt-[120px]">
      <div className="hero-shadow absolute top-0 h-[500px] w-full" />
      <div className="absolute z-10">
        <h1 className="text-center text-[66px] leading-[1.4] font-[700]">
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
        <div className="mt-[50px] flex justify-center gap-1">
          <AppButton>
            <img src="/images/applekorea.png" alt="apple_icon" width={24} height={24} />
            App Store
          </AppButton>
          <AppButton>
            <img src="/images/googleplay.png" alt="google_icon" width={24} height={24} />
            Google Play
          </AppButton>
        </div>
      </div>
      <div className="absolute bottom-[30px] z-10">
        <HeroDown width={50} height={50} />
      </div>
    </section>
  );
}
