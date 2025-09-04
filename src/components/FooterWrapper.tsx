// Create: src/components/FooterWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/app/Footer';

const FooterWrapper: React.FC = () => {
  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');

  // Don't render footer on dashboard pages (since dashboard layout will handle it)
  if (isDashboardPage) {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;