
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Wrapping Chicago</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
          }
          #sitemap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1e3a8a;
            color: #fff;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 5px 0 0;
            font-size: 14px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th {
            background-color: #f0f4f8;
            text-align: left;
            padding: 10px;
            border: 1px solid #ddd;
            font-weight: bold;
          }
          td {
            padding: 10px;
            border: 1px solid #ddd;
            vertical-align: top;
          }
          .url-cell {
            width: 50%;
          }
          .loc {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
          }
          .loc:hover {
            text-decoration: underline;
          }
          .priority-high {
            background-color: #dcfce7;
          }
          .priority-medium {
            background-color: #fef9c3;
          }
          .priority-low {
            background-color: #fef3c7;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
          }
          .image-count {
            background-color: #e53e3e;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
            margin-left: 5px;
          }
          .stats {
            background-color: #f0f4f8;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .stat-box {
            text-align: center;
            padding: 10px;
          }
          .stat-value {
            font-size: 24px;
            font-weight: bold;
            color: #1e3a8a;
          }
          .stat-label {
            font-size: 14px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>XML Sitemap - Wrapping Chicago</h1>
          <p>This is the XML sitemap, meant for consumption by search engines.</p>
        </div>
        
        <div id="sitemap">
          <div class="stats">
            <div class="stat-box">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              <div class="stat-label">Total URLs</div>
            </div>
            <div class="stat-box">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
              <div class="stat-label">High Priority</div>
            </div>
            <div class="stat-box">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[image:image])"/></div>
              <div class="stat-label">Pages with Images</div>
            </div>
            <div class="stat-box">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/services/')])"/></div>
              <div class="stat-label">Service Pages</div>
            </div>
          </div>
          
          <table>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <xsl:variable name="priorityClass">
                <xsl:choose>
                  <xsl:when test="sitemap:priority >= 0.8">priority-high</xsl:when>
                  <xsl:when test="sitemap:priority >= 0.6">priority-medium</xsl:when>
                  <xsl:otherwise>priority-low</xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              
              <tr class="{$priorityClass}">
                <td class="url-cell">
                  <a href="{sitemap:loc}" class="loc" target="_blank">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                  <xsl:if test="image:image">
                    <span class="image-count">
                      <xsl:value-of select="count(image:image)"/>
                    </span>
                  </xsl:if>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
          
          <div class="footer">
            <p>Generated by Wrapping Chicago - <a href="https://www.wrappingchicago.com">https://www.wrappingchicago.com</a></p>
            <p>View our <a href="/html-sitemap.html">HTML Sitemap</a> for better navigation</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
