import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: { type: String,required: true, unique: true },
    currency: { type: String,  }
})