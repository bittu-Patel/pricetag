"use server"

import { connect } from "http2";
import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        connectToDB();


        
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        let product = scrapedProduct;

        const existingProduct = await Product.findOne({ url: scrapedProduct.url });

        if(existingProduct) {
            const updatePriceHistory = [
                ...existingProduct.priceHistory,
                { price:  }
            ]
        }

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}
    
