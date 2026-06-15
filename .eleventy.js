const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d MMMM yyyy");
  });
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });
  eleventyConfig.addFilter("year", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  // Newsletter label filter
  eleventyConfig.addFilter("newsletterLabel", (slug) => {
    const labels = {
      "ai-dev-daily": "AI Dev Daily",
      "a11y-ai-daily": "A11y × AI",
      "agent-mcp-weekly": "Agent & MCP",
      "industry-trends": "Industry Trends",
      "industry-insights": "Industry Insights",
      "deep-dives": "Deep Dives",
    };
    return labels[slug] || slug;
  });

  // Strip tags from content for meta description
  eleventyConfig.addFilter("stripTags", (str) => {
    return str ? str.replace(/<[^>]*>/g, "").slice(0, 200) + "…" : "";
  });

  // Sanitize transform removed — private noindex site, all content is agent-generated

  // Collections: one per newsletter + all posts
  eleventyConfig.addCollection("allPosts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/{ai-dev-daily,a11y-ai-daily,agent-mcp-weekly,industry-trends,industry-insights,deep-dives}/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("industry-trends", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/industry-trends/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("industry-insights", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/industry-insights/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("aiDevDaily", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/ai-dev-daily/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("a11yAiDaily", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/a11y-ai-daily/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("agentMcpWeekly", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/agent-mcp-weekly/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("deepDives", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/deep-dives/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
