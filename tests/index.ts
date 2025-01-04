import NASA_API from './../src';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY || "DEMO_KEY";

export const nasa = new NASA_API(API_KEY);