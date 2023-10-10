"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { 'extract' }


export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    //BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }
  try {
//Fetch the product page
const response = await axios.get(url, options);
const $ = cheerio.load(response.data);

//Extract the product title
const title = $('#productTitle').text().trim();
const currentPrice = extractPrice(
  $('.priceToPay span.a-price-whole'),
  $('a.size.base.a-color-price') ,
  $('.a-button-selected .a-color-base')
);

console.log({title})
} catch (error: any){
    throw new Error(`Failed to scrape product: ${error.message}`)
  }

}

function extractPrice(arg0: cheerio.Cheerio<cheerio.Element>, arg1: cheerio.Cheerio<cheerio.Element>, arg2: cheerio.Cheerio<cheerio.Element>) {
  throw new Error("Function not implemented.");
}
