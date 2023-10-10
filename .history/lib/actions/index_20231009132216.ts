"use server"

import { connect } from "http2";
import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        connectToDB();


        
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        let product = scrapedProduct;

        const existingProduct = await product


    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}
    
