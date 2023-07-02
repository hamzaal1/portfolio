export default function sitemap() {
    return [
        {
            url: `${process.env.DOMAIN_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.DOMAIN_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.DOMAIN_URL}/work`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.DOMAIN_URL}/about-me`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.DOMAIN_URL}/skilles`,
            lastModified: new Date(),
        },
    ]
}