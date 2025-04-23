import { createDotCMSClient } from '@dotcms/client/next';

// Initialize the dotCMS client
export const client = createDotCMSClient({
    dotcmsUrl: process.env.NEXT_PUBLIC_DOTCMS_URL || '',
    authToken: process.env.DOTCMS_AUTH_TOKEN || '',
    siteId: process.env.NEXT_PUBLIC_DOTCMS_SITE_ID || ''
});

console.log('client', client);

// Validate configuration
if (!process.env.NEXT_PUBLIC_DOTCMS_URL) {
    throw new Error('NEXT_PUBLIC_DOTCMS_URL is required');
}

if (!process.env.DOTCMS_AUTH_TOKEN) {
    throw new Error('DOTCMS_AUTH_TOKEN is required');
}

if (!process.env.NEXT_PUBLIC_DOTCMS_SITE_ID) {
    throw new Error('NEXT_PUBLIC_DOTCMS_SITE_ID is required');
} 