import { useEffect, useState } from 'react';
import { getUVEState, sendMessageToUVE, createUVESubscription } from '@dotcms/uve';
import { DotCMSUVEAction, UVEEventType } from '@dotcms/uve/types';

interface PageAsset {
  [key: string]: any;
}

export const usePageAsset = (currentPageAsset: PageAsset) => {
  const [pageAsset, setPageAsset] = useState<PageAsset | null>(currentPageAsset);

  console.log('getUVEState', getUVEState())

  useEffect(() => {
    if (!getUVEState()) {
      return;
    }

    // Notify the editor that the client is ready
    sendMessageToUVE({ action: DotCMSUVEAction.CLIENT_READY });

    // Subscribe to content changes
    const subscription = createUVESubscription(UVEEventType.CONTENT_CHANGES, (changes) => {
      console.log('Content updated:', changes);
      // Update your UI with the new content
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [currentPageAsset]); // Remove currentPageAsset from dependencies

  return pageAsset ?? currentPageAsset;
}; 