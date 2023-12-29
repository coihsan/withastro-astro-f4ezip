import {Google} from '../src/constants/tag'
export const SITE_TITLE = "I'm your Grandpa!";
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const leveling = {
    beginer: "Grandkid",
    advance: "Grandteen",
    pro: "Grandkiddo",
}
export interface typeIcons {
    google: JSX.Element;
    meta: JSX.Element;
    instagram: JSX.Element;
    twitter: JSX.Element;
    tiktok: JSX.Element;
    youtube:JSX.Element;
}
export const Icons: typeIcons = {

    google: <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>,
    meta: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M640 317.9C640 409.2 600.6 466.4 529.7 466.4C467.1 466.4 433.9 431.8 372.8 329.8L341.4 277.2C333.1 264.7 326.9 253 320.2 242.2C300.1 276 273.1 325.2 273.1 325.2C206.1 441.8 168.5 466.4 116.2 466.4C43.4 466.4 0 409.1 0 320.5C0 177.5 79.8 42.4 183.9 42.4C234.1 42.4 277.7 67.1 328.7 131.9C365.8 81.8 406.8 42.4 459.3 42.4C558.4 42.4 640 168.1 640 317.9H640zM287.4 192.2C244.5 130.1 216.5 111.7 183 111.7C121.1 111.7 69.2 217.8 69.2 321.7C69.2 370.2 87.7 397.4 118.8 397.4C149 397.4 167.8 378.4 222 293.6C222 293.6 246.7 254.5 287.4 192.2V192.2zM531.2 397.4C563.4 397.4 578.1 369.9 578.1 322.5C578.1 198.3 523.8 97.1 454.9 97.1C421.7 97.1 393.8 123 360 175.1C369.4 188.9 379.1 204.1 389.3 220.5L426.8 282.9C485.5 377 500.3 397.4 531.2 397.4L531.2 397.4z"/></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>,
    tiktok: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>,
    youtube: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>,
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
        iconSVG: '/public/icons/google.svg',
        categories: [
            {
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
                url: "string",
            }
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
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
                url: "string",
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
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
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
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
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
                tag: "Google Algorithm",
                url: "string",
            },
            {
                tag: "Google Ads",
                url: "string",
            }
        ],
        available: true
    },
];

