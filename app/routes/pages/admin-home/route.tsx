import { type LoaderFunctionArgs, redirect } from 'react-router';

import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // TODO: 로그인 된 경우 페이지가 나와야 하고 로그인 안된 경우는 로그인 페이지로 이동해야 함
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (adminAuth) {
    return {};
  }
  return redirect('/admin/login');
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>관리자 홈</BreadcrumbItem>,
};

export default function AdminHome() {
  return (
    <div>
      <div>관리자 페이지</div>
    </div>
  );
}
