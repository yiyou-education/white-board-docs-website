const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  noIndex:true,
  title: "拍乐云白板文档",
  tagline: "Dinosaurs are cool",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  baseUrl: "/white-board-docs-website/",
  url: "https://yiyou-education.github.io/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: require("./navbar-config"),
    footer: require("./footer-config"),
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    }
  },
  presets: [
    ["@docusaurus/preset-classic",{
      docs: {
        sidebarPath: require.resolve("./sidebars.js"),
        // Please change this to your repo.
        editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
      },
      theme: {
        customCss: require.resolve("./src/css/custom.css"),
      },
    }]
  ]
};
