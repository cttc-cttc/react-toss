import { Link } from 'react-router';

import Hamburger from '~/components/svg/hamburger.svg?react';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { useLanguage } from '~/hooks/use-language';

import LangButton from './lang-button';
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

export default function MobileNavSheet() {
  const [language, setLanguage] = useLanguage();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-0">
            <Hamburger className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-4 pt-[70px] pl-4">
            {MENU.map((item, index) => (
              <Link key={index} to={item.to}>
                <NavButton>{item.label}</NavButton>
              </Link>
            ))}
          </nav>
          <div className="pl-4">
            <LangButton language={language} setLanguage={setLanguage} value="ko">
              KOR
            </LangButton>
            <span className="text-[#D1D6DB]">|</span>
            <LangButton language={language} setLanguage={setLanguage} value="en">
              ENG
            </LangButton>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
