//import constants from "../constant" assert { type: "json" }; // the entire JSON file
import constants from "../constant.js"; // new import

export class happyPath {
    constructor(page) {
        this._page = page;

        this._event = this._page.getByRole('button', { name: 'Sep 27 Phillies at Bobcats'});
        this._addToCart = this._page.getByRole('button', { name: 'Add To Cart' });

        this._guestCheckoutLocator = this._page.locator('#maincontent');
        this._continueAsaGuest = this._page.getByTestId('loginPage-btn-continueAsaGuest');

        this._insuranceCheckBox=this._page.frameLocator('iframe[title="Protect My Purchase"]').locator('[data-testid="protect-wrapper"]');

        this._nameOnCard = this._page.getByTestId('guestCheckoutPage-input-nameOnCard');
        this._cardNumber = this._page.getByTestId('guestCheckoutPage-input-cardNumber');
        this._expDate = this._page.getByTestId('guestCheckoutPage-input-expDate');
        this._cVV = this._page.getByTestId('guestCheckoutPage-input-cvv');

        this._address = this._page.getByTestId('guestCheckoutPage-input-address1');
        this._address1 = this._page.getByTestId('guestCheckoutPage-input-address1');
        this._city = this._page.getByTestId('guestCheckoutPage-input-city');
        this._state = this._page.getByTestId('guestCheckoutPage-select-state');
        this._zipcode = this._page.getByTestId('guestCheckoutPage-input-zipCode');

        this._emailAddress = this._page.getByTestId('guestCheckoutPage-input-email');
        this._mobileNumber = this._page.getByTestId('guestCheckoutPage-input-mobile'); 

        this._checkAge = this._page.getByTestId('guestCheckoutPage-input-age');
        this._checkMessage = this._page.getByTestId('guestCheckoutPage-input-message-in');
        this._agreeToTerms = this._page.getByTestId('guestCheckoutPage-input-agreeToTerms'); 
        this._placeOrder = this._page.getByTestId('guestCheckoutPage-btn-placeOrder');
    }

    async event() {
        await this._event.click();
        await this._page.waitForTimeout(3000);
    }

    async addToCart() {
        await this._addToCart.click();
      //  await this._page.waitForTimeout(3000);
    }

    async continueAsaGuest() {
        await this._continueAsaGuest.click();
    }

    async fillCheckoutDetails() {
        await this._nameOnCard.fill(constants["FIRST NAME"] + " " + constants["LAST NAME"]);
        await this._cardNumber.fill(constants["CARD NUMBER"]);
        await this._expDate.fill(constants["EXPIRATION NUMBER"]);
        await this._cVV.fill(constants["CVV"]);
        await this._address.fill(constants["ADDRESS"]);
        await this._address1.fill(constants["ADDRESS1"]);
        await this._city.fill(constants["CITY"]);
        await this._state.selectOption(constants["STATE"]);
        await this._zipcode.fill(constants["ZIPCODE"]);
        await this._emailAddress.fill(constants["EMAIL ADDRESS"]);
        await this._mobileNumber.fill(constants["MOBILE NUMBER"]);
        await this._checkAge.click();
        await this._checkMessage.click();
        await this._agreeToTerms.click();
        await this._insuranceCheckBox.click();
    }

    async placeOrder() {
        await this._placeOrder.click();
    }
}