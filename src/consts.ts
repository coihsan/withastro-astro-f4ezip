import {Google} from './constants/tag'
export const SITE_TITLE = "I'm your Grandpa!";
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const leveling = {
    beginer: "Grandkid",
    advance: "Grandteen",
    pro: "Grandkiddo",
}

export interface Category {
    tag: string;
    url: string;
}
export interface CardPlatform {
    title: string;
    description: string;
    path: string;
    iconSVG: string;
    categories: Category[];
    available: boolean;
}
export const cardplatforms: CardPlatform[] = [
    {
        title: "Google",
        description: "The world's most popular search engine is a powerful tool for finding information, but it can be overwhelming. Let me teach you how to use Google to your advantage.",
        path: "/",
        iconSVG: '/icons/google.svg',
        categories: [
            {
                tag: "Google Algorithm",
                url: "/search",
            },
            {
                tag: "Google Ads",
                url: "/Google-Ads",
            },
            {
                tag: "Google Analytics",
                url: "string",
            },
            {
                tag: "Google Business Profile",
                url: "string",
            },
            {
                tag: "Google Search Console",
                url: "string",
            },
            {
                tag: "Google Tag Manager",
                url: "string",
            },
            {
                tag: "Google Search Console",
                url: "string",
            },
        ],
        available: true,
    },
    {
        title: "Meta",
        description: "Meta is the parent company of Facebook, Instagram, and WhatsApp. I'll show you how to use these platforms to connect with friends and family, build your brand, and grow your business.",
        path: "/",
        iconSVG: '/icons/meta.svg',
        categories: [
            {
                tag: "Engagement Campaign",
                url: "string",
            },
            {
                tag: "Lead Generation",
                url: "string",
            },
            {
                tag: "Colaborative Marketplace",
                url: "string",
            },
        ],
        available: true
    },
    {
        title: "Instagram",
        description: "Instagram is a visual social media platform that's perfect for sharing photos and videos. I'll teach you how to create stunning content that will get you noticed.",
        path: "/",
        iconSVG: '/icons/instagram.svg',
        categories: [
            {
                tag: "Awareness",
                url: "string",
            },
            {
                tag: "Lead Generation",
                url: "string",
            },
            {
                tag: "Shop",
                url: "string",
            }
        ],
        available: true
    },
    {
        title: "X/Twitter",
        description: "Twitter is a microblogging platform that's perfect for sharing news, updates, and thoughts. I'll teach you how to use Twitter to connect with your audience and build relationships.",
        path: "/",
        iconSVG: '/icons/twitter.svg',
        categories: [
            {
                tag: "Promoted Ads",
                url: "string",
            },
            {
                tag: "Engagements campaign",
                url: "string",
            }
        ],
        available: true
    },
    {
        title: "TikTok",
        description: "TikTok is a short-form video platform that's perfect for sharing funny, creative, and informative content. I'll teach you how to use TikTok to entertain your audience and grow your following.",
        path: "/",
        iconSVG:'/icons/tiktok.svg',
        categories: [
            {
                tag: "Brand Awareness",
                url: "string",
            },
            {
                tag: "Video Engagement",
                url: "string",
            }
        ],
        available: true
    },
    {
        title: "Youtube",
        description: "YouTube is the world's largest video-sharing platform. I'll teach you how to create impactful campaign videos, monotize, and everything else you need to know on this platform.",
        path: "/",
        iconSVG: '/icons/youtube.svg',
        categories: [
            {
                tag: "SEO for Youtube",
                url: "string",
            },
            {
                tag: "Video Campaign",
                url: "string",
            }
        ],
        available: true
    },
];

