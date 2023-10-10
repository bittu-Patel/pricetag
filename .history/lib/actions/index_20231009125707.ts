"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        conn
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapeAndStoreProduct) return;


    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}
    
