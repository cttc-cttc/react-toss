import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import TossLogo from '~/components/svg/toss-logo.svg?react';
import { Button } from '~/components/ui/button';
import { useLanguage } from '~/hooks/use-language';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';
import { cn } from '~/lib/utils';

import LangButton from './lang-button';
import MobileNavSheet from './mobile-nav-sheet';
import NavButton from './nav-button';

interface NavItem {
  to: string;
  label: string;
}

const MENU: NavItem[] = [
  {
    to: '/',
    label: '회사 소개',
  },
  {
    to: '/notice',
    label: '공지사항',
  },
  {
    to: '#',
    label: '고객센터',
  },
  {
    to: '#',
    label: '자주 묻는 질문',
  },
  {
    to: '#',
    label: '토스 인증서',
  },
  {
    to: '#',
    label: '채용',
  },
];

export default function Header() {
  const [language, setLanguage] = useLanguage();
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // ? Debug
  useEffect(() => {
    console.info('isMobile', isMobile);
  }, [isMobile]);

  return (
    <header
      className={cn('fixed z-50 h-[60px] w-full bg-white', scrolled && 'shadow-sm')}
    >
      <div className="container flex h-full items-center justify-between">
        <Link to="/" className="w-[66px]">
          <TossLogo />
        </Link>
        {isMobile ? (
          <div className="flex gap-2">
            <Button>앰 다운로드</Button>
            <MobileNavSheet />
          </div>
        ) : (
          <>
            <nav className="flex gap-4">
              {MENU.map((item, index) => (
                <Link key={index} to={item.to}>
                  <NavButton>{item.label}</NavButton>
                </Link>
              ))}
            </nav>
            <div>
              <LangButton language={language} setLanguage={setLanguage} value="ko">
                KOR
              </LangButton>
              <span className="text-[#D1D6DB]">|</span>
              <LangButton language={language} setLanguage={setLanguage} value="en">
                ENG
              </LangButton>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
