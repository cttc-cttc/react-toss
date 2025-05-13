// import { Separator } from '~/components/ui/separator';

import { Link, type LoaderFunctionArgs } from 'react-router';

import prisma from '~/.server/lib/prisma';

import type { Route } from './+types/route';
import NoticeItem from './components/notice-item';
import NoticePagination from './components/notice-pagination';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = Object.fromEntries(url.searchParams);
  let page = parseInt(query.page as string);
  if (!page) page = 1;

  // const notices = await prisma.notice.findMany({
  //   take: 10,
  //   skip: (page - 1) * 10,
  // });
  // const totalCount = await prisma.notice.count();

  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.notice.count(),
  ]);
  //console.log('notices', notices);
  return { notices, totalCount, page };
};

export default function Notice({ loaderData }: Route.ComponentProps) {
  const { notices, totalCount, page } = loaderData;
  // console.log('totalCount', totalCount);
  // console.log('page', page);
  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          {notices.map((notice, index) => (
            <Link to={`/notice/${notice.id}`} key={index}>
              <NoticeItem
                title={notice.title}
                createdAt={notice.createdAt}
                isLast={index === notices.length - 1}
              />
              {/* {index < NOTICES.length - 1 && <Separator />} */}
            </Link>
          ))}
        </div>
        <div className="pt-[32px] pb-[72px]">
          <NoticePagination totalCount={totalCount} page={page} />
        </div>
      </div>
    </section>
  );
}
