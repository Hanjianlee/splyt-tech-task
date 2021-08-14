import dotenv from 'dotenv'
dotenv.config();
export const masterKey = process.env.API_KEY
export const port =  process.env.HOST_PORT
export const client = process.env.CLIENT_PORT
export const splitApi = process.env.SPLIT_API