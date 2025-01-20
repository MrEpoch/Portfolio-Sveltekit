import projects from 'lib/texts/projects_content';

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      <url>
        <loc>https://stencukpage.com</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://stencukpage.com/projects</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
      </url>
      <url>
        <loc>https://stencukpage.com/contact</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
      ${projects
				.map((project) => {
					return `
          <url>
        <loc>https://stencukpage.com/projects/${project.id}</loc>
        <changefreq>never</changefreq>
        <priority>0.6</priority>
            </url>
            `;
				})
				.join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
