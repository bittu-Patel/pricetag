"use server"

import Error from "next/error";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl);
    } catch (error: any) {
        throw new Error
    }
}
    
