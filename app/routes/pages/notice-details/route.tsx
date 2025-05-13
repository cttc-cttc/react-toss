import { Link } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { Button } from '~/components/ui/button';

import NoticeContent from './components/notice-content';
import NoticeTitle from './components/notice-title';

// loader : 페이지에 접속하기 전에 미리 데이터를 불러오는 예약어 (ssr 방식)
// params : notice/:id 부분의 :id 값을 받아올 수 있음
export const loader = async ({ params }) => {
  const { id } = params;
  //console.info('id:', id); // 페이지에 들어가기 전이라 터미널에 찍힘 (서버 사이드)

  const notice = await prisma.notice.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!notice) {
    throw new Error('Notice not found');
  }

  // 리턴을 하면 Props 처럼 컴포넌트로 데이터를 전달할 수 있음
  return {
    notice,
  };
};

export default function NoticeDetails({ loaderData }) {
  const { notice } = loaderData; // 로더 데이터들의 종류 중 notice 데이터만 받아오기 위해 구조분해 할당으로 적용
  //console.info('notice', notice); // 페이지에 들어간 이후라 브라우저 개발자 콘솔에 찍힘 (클라이언트 사이드)
  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          <NoticeTitle title={notice.title} createdAt={notice.createdAt} />
        </div>
        <div>
          <NoticeContent content={notice.content} />
          <Link to="/notice">
            <Button variant="secondary" className="my-[100px] cursor-pointer">
              목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
