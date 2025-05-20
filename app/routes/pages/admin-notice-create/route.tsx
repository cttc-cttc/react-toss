import { Label } from '@radix-ui/react-label';
import { Separator } from '@radix-ui/react-separator';
import { useState } from 'react';
import {
  type ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router';

import prisma from '~/.server/lib/prisma';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

class InvalidException extends Error {
  status: number;
  message: string;
  path?: string;

  constructor(message: string, path?: string) {
    super(message);
    this.status = 400;
    this.message = message;
    this.path = path;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData);
    // console.log('payload', payload);
    if (!payload.title) {
      throw new InvalidException('제목을 입력해주세요.', 'title');
    }
    if (!payload.content) {
      throw new InvalidException('내용을 입력해주세요.', 'content');
    }

    const notice = await prisma.notice.create({
      data: {
        title: String(payload.title),
        content: String(payload.content),
      },
    });
    // console.log('notice', notice);

    return redirect(`/admin/notice/${notice.id}`);
  } catch (error) {
    console.error(error);
    if (error instanceof InvalidException) {
      return { message: error.message, path: error.path };
    }
    throw error;
  }
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리 / 등록</BreadcrumbItem>,
};

export default function AdminNoticeCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const data = useActionData();

  return (
    <div>
      <h1 className="leading-1.4 pb-4 text-2xl font-bold">공지사항 등록</h1>
      <Separator />
      <Form className="space-y-8 py-8" method="post">
        <div>
          <Label className="pb--4 text-2xl" htmlFor="title">
            제목
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="공지사항 제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {data?.path === 'title' && <p className="text-destructive">{data?.message}</p>}
        </div>
        <div>
          <Label className="pb--4 text-2xl" htmlFor="content">
            내용
          </Label>
          <Textarea
            id="content"
            name="content"
            className="resize-none"
            placeholder="공지사항 내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {data?.path === 'content' && (
            <p className="text-destructive">{data?.message}</p>
          )}
        </div>
        <div className="flex justify-between">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button type="submit">등록</Button>
        </div>
      </Form>
    </div>
  );
}
