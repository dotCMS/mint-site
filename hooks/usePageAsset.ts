import { useEffect, useState } from 'react';
import { getUVEState, sendMessageToUVE, createUVESubscription } from '@dotcms/uve';
import { DotCMSUVEAction, UVEEventType } from '@dotcms/uve/types';

interface PageAsset {
  // Add your page asset interface here based on your dotCMS content structure
  [key: string]: any;
}

export const usePageAsset = (currentPageAsset: PageAsset) => {
  const [pageAsset, setPageAsset] = useState<PageAsset | null>(currentPageAsset);

  useEffect(() => {
    if (!getUVEState()) {
      return;
    }

    // Notify the editor that the client is ready
    sendMessageToUVE({ action: DotCMSUVEAction.CLIENT_READY });

    // Subscribe to content changes
    const subscription = createUVESubscription(
      UVEEventType.CONTENT_CHANGES,
      (payload: unknown) => {
        if (payload && typeof payload === 'object') {
          setPageAsset(payload as PageAsset);
        }
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Remove currentPageAsset from dependencies

  return pageAsset;
}; 