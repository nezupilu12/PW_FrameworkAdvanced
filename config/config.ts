import * as dotenv from 'dotenv';

dotenv.config();

export const config= {
    browser: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS === 'true'
}

