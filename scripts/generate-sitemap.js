const fs = require('fs');

const globby = require('globby');

(async () => {

    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby(['src/pages/**/*.tsx', '!src/pages/_*.tsx', '!src/pages/api']);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xlmns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map((page) => {
            const path = page
                .replace('src/', '')
                .replace('pages', '')
                .replace('.tsx', '')
                .replace('.mdx', '');
            const route = path === '/index' ? '' : path;
            return `<url>
        <loc>${`https://benaventepeluqueros.com${route}`}</loc>
        <priority>${route === '' ? '1.00' : '0.80'}</priority>
        <changefreq>daily</changefreq>
    </url>
    `;
        })
        .join('')}
</urlset>
    `;

    fs.writeFileSync('public/sitemap.xml', sitemap);
})();