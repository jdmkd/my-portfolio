'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../css/nprogress.css';

export default function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // Smooth finish after 300ms

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
