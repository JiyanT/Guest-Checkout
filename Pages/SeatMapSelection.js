import constant from "../constant.js";

export class seatSelection{
    
    constructor(page){
        this._page=page;

        this._seatMapSection=this._page.locator('#seatmaps > polygon:nth-child(45)');
        this._seatSelection=this._page.locator('#sid-460713');
        this._continue=this._page.getByRole('button', { name: 'Continue' });

        this._upsellValletParking=this._page.getByTestId('guestCheckoutPage-btn-increment-Valet-Phillies Parking');
        this._addUpsellValletParking=this._page.getByTestId('guestCheckoutPage-btn-add-Phillies Parking');

        this._insuranceCheckBox.frameLocator('iframe[title="Protect My Purchase"]').locator('[data-testid="protect-wrapper"]').click();

        this._nameOnCard = this._page.getByTestId('guestCheckoutPage-input-nameOnCard');
        this._cardNumber = this._page.getByTestId('guestCheckoutPage-input-cardNumber');
        this._expDate = this._page.getByTestId('guestCheckoutPage-input-expDate');
        this._cVV = this._page.getByTestId('guestCheckoutPage-input-cvv');

        this._address = this._page.getByTestId('guestCheckoutPage-input-address1');
        this._address1 = this._page.getByTestId('guestCheckoutPage-input-address2');
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
    }

    async seatMapSection(){
        await this._seatMapSection.click();
    }

    async seatSelection(){
        await this._seatSelection.click();
    }

    async continue(){
        await this._continue.click();
    }

    async addToCart() {
        await this._addToCart.click();
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

