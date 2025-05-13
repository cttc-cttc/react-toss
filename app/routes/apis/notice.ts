import prisma from '~/.server/lib/prisma';

// 데이터의 변형이 필요한 경우 react router action을 통해 가능
export const action = async ({ request }) => {
  const payload = await request.json();
  const { title, content } = payload;
  await prisma.notice.create({
    data: {
      title,
      content,
    },
  });
  return { status: 'ok' };
};
