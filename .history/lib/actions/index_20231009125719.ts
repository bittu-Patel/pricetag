"use server"

import { connect } from "http2";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        connectToDB
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapeAndStoreProduct) return;


    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}
    
