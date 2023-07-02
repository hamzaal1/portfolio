export default function robots() {
    return {
        rules: {
            userAgent: 'Googlebot',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://www.techstylitix.me/sitemap.xml',
    }
}