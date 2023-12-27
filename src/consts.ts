
export const SITE_TITLE = 'Grandpa';
export const SITE_DESCRIPTION = 'Welcome to my website!';
import { any } from "astro/zod";
import { Icons } from "./constants/Icons";

export const cardplatforms : {
    key: number;
    title: string;
    description: string;
    path: string;
    iconSVG: any;
    categories: {
        tag: string;
        url: string;
    }[];
} []{} = [
    {
        key: 0,
        title: "Google",
        description: "The world's most popular search engine is a powerful tool for finding information, but it can be overwhelming. Let me teach you how to use Google to your advantage.",
        path: "/",
        iconSVG: ${Icons.google},
        categories: [
            {
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
                url: "string",
            }
        ];
    },
    {
        key: 1,
        title: "Meta",
        description: "Meta is the parent company of Facebook, Instagram, and WhatsApp. I'll show you how to use these platforms to connect with friends and family, build your brand, and grow your business.",
        path: "/",
        iconSVG: ${Icons.meta},
    },
    {
        key: 2,
        title: "Instagram",
        description: "Instagram is a visual social media platform that's perfect for sharing photos and videos. I'll teach you how to create stunning content that will get you noticed.",
        path: "/",
        iconSVG: ${Icons.instagram}
    },
    {
        key: 3,
        title: "X/Twiiter",
        description: "Twitter is a microblogging platform that's perfect for sharing news, updates, and thoughts. I'll teach you how to use Twitter to connect with your audience and build relationships.",
        path: "/",
        iconSVG: ${Icons.twitter}
    },
    {
        key: 4,
        title: "TikTok",
        description: "TikTok is a short-form video platform that's perfect for sharing funny, creative, and informative content. I'll teach you how to use TikTok to entertain your audience and grow your following.",
        path: "/",
        iconSVG: ${Icons.tiktok}
    },
    {
        key: 5,
        title: "Youtube",
        description: "YouTube is the world's largest video-sharing platform. I'll teach you how to create videos that are engaging, informative, and entertaining",
        path: "/",
        iconSVG: ${Icons.youtube}
    },
];

export const bytag = [
    {
        key: 0,
        tag:"Google Algorithm",
        path: "#"
    },
    {
        key: 1,
        tag:"Google Ads",
        path: "#"
    },
    {
        key: 1,
        tag:"Google Ads",
        path: "#"
    },
]