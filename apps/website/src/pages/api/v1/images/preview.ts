// This feature is currently broken, if a fix isn't found, it will be removed soon.
export const prerender = false;

import puppeteer from "puppeteer";
import axios from "axios";
import robotsParser from "robots-parser";

// List of allowed sites
const allowedSites = [
  "https://docs.google.com/spreadsheets/d/1yf47G3E3BYSiWvWH5bD7ZWq1K1-ySP766eHpFuvJwpc/edit?usp=sharing", 
  "https://www.pythonanywhere.com/gists/2c0915f71ab5a67ad03ce90136d2710a/BlossomCraft Jobs Calculator/ipython/", 
  "https://www.pythonanywhere.com/gists/2c0915f71ab5a67ad03ce90136d2710a/BlossomCraft%20Jobs%20Calculator/ipython/",
  "https://minecraftcircle.pages.dev/"
];

// Function to check if a bot is allowed to scrape the site based on robots.txt
async function checkRobotsTxt(siteUrl: string, userAgent: string): Promise<boolean> {
  const robotsUrl = new URL("/robots.txt", siteUrl).toString();
  
  try {
    const response = await axios.get(robotsUrl);
    const robotsTxt = response.data;
    const robots = robotsParser(robotsUrl, robotsTxt);

    // Check if the bot is allowed to visit the site
    // @ts-expect-error Just work please
    return robots.isAllowed(siteUrl, userAgent);
  } catch (error) {
    console.error("Error fetching robots.txt:", error);
    return true; // Default to allowed if robots.txt cannot be fetched
  }
}


export async function GET({ params, request }: { params: any; request: Request }) {  
  try {
    const url = new URL(request.url);
    const site = url.searchParams.get("site");
    const darkmode = url.searchParams.get("darkmode");

    if (!site) {
      return new Response("Missing 'site' parameter", { status: 400 });
    }
    console.log(site)
    console.log(allowedSites)
    console.log(allowedSites.includes(site))
    if (!allowedSites.includes(site)) {
      return new Response("Forbidden", { status: 403 });
    }

    // Check if the bot is allowed to scrape the site based on robots.txt
    const userAgent = 'BCUWBot/1.0 (+https://bcuw.xyz/bot-info)';
    const isAllowed = await checkRobotsTxt(site, userAgent);

    if (!isAllowed) {
      return new Response("Forbidden by robots.txt", { status: 403 });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(userAgent);
    await page.setViewport({ width: 1920, height: 1080 });

    // Optional: Handle dark mode
    if (darkmode === "true") {
      await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
    }

    await page.goto(site, { waitUntil: "networkidle2" });
    const image = await page.screenshot();
    await browser.close();

    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=3600"
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
