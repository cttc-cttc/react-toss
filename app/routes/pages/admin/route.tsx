import { redirect } from 'react-router';

export const loader = async () => {
  // TODO: 로그인 된 경우 페이지가 나와야 하고 로그인 안된 경우는 로그인 페이지로 이동해야 함
  return redirect('/admin/login');
};

export default function Admin() {
  return (
    <div>
      <div>어드민</div>
    </div>
  );
}
