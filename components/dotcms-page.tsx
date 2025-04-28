"use client"
import { DotCMSLayoutBody } from '@dotcms/react/next';
import { usePageAsset } from '@/hooks/usePageAsset';
import { Hero } from './hero';
import { Destinations } from './destinations';
import { Blog } from './blog';

interface DotCMSPageProps {
  initialPageAsset: any;
}

const componentsMap = {
  Banner: Hero,
  Destinations: Destinations,
}

export function DotCMSPage({ initialPageAsset }: DotCMSPageProps) {
  const pageAsset = usePageAsset(initialPageAsset);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DotCMSLayoutBody 
        page={pageAsset as any}
        components={componentsMap}
      />
    </div>
  );
} 