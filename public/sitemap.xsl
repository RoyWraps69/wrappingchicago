
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap - Wrapping Chicago</title>
        <meta name="description" content="Sitemap for Vehicle Wrap Services in Chicago - Complete index of all pages"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="index, follow"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            margin: 0;
            padding: 1rem;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          h1 {
            color: #11172D;
            margin-bottom: 1.5rem;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 2rem;
          }
          th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
          th {
            background-color: #f8f9fa;
            font-weight: 600;
          }
          a {
            color: #d91e18;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .stats {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 2rem;
          }
          .priority-high {
            background-color: rgba(217, 30, 24, 0.1);
            font-weight: 600;
          }
          .priority-medium {
            background-color: rgba(255, 204, 0, 0.1);
          }
          @media (max-width: 768px) {
            th, td {
              padding: 0.5rem;
              font-size: 0.9rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Wrapping Chicago XML Sitemap</h1>
          <div class="stats">
            <p>
              This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
              <br />
              Last generated on: <strong><xsl:value-of select="substring(sitemap:urlset/sitemap:url[1]/sitemap:lastmod, 0, 11)"/></strong>
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="priorityClass">
                  <xsl:if test="sitemap:priority &gt; 0.8">priority-high</xsl:if>
                  <xsl:if test="sitemap:priority &gt; 0.6 and sitemap:priority &lt;= 0.8">priority-medium</xsl:if>
                </xsl:variable>

                <tr class="{$priorityClass}">
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:priority"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          
          <div>
            <p>Copyright © <xsl:value-of select="year-from-date(current-date())"/> Wrapping Chicago. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
