'use client';

import { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addTab } from '@/app/lib/slices/tabs.slice';

function RouteHandlerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  // Get the filename from the last segment of the path
  const segments = pathname.split('/');
  const fileName = segments[segments.length - 1] || 'page';
  const tabName = searchParams.get('tab') || `${fileName}.tsx`;

  dispatch(addTab({
    name: tabName,
    path: pathname
  }));

  return null;
}

export function RouteHandler() {
  return (
    <Suspense fallback={null}>
      <RouteHandlerContent />
    </Suspense>
  );
} 