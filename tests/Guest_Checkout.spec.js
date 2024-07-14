import { test, expect } from '@playwright/test';
import { happyPath } from '../Pages/HappyPath.js';
import constants from '../constant.js';

test.describe('happyPathTesting', () => { 
    test('Happypath Guest Checkout Flow', async ({ page }, testInfo) => {
        const SchedulePage = new happyPath(page);
        
        //await page.goto(constants["URL"]);
        await page.goto(constants.URL, {waitUntil:'networkidle'});

        console.log('Waiting for the event button to be visible');
        await SchedulePage._event.waitFor({state: 'visible'});
        await SchedulePage.event(); 

        await SchedulePage.addToCart();
        await SchedulePage.continueAsaGuest();
       // await expect(SchedulePage._guestCheckoutLocator).toContainText('Guest Checkout');

        await SchedulePage.fillCheckoutDetails();
        await SchedulePage.placeOrder();
        
        // assertion to verify if the order was placed
        await expect(page.getByRole('main')).toContainText('SEE YOUOUT THERE!');

    });
});