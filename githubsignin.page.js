class SignInGitHub {
    get signupbtn() {return $('//a[@class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]')}
    get inputEmail() {return $('//input[@type="email"]')}
    get continueEmailBtn() {return $('//button[@class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]')}
    get inputPassword() {return $('#password')}
    get continuePassBtn() {return $('//button[@data-optimizely-event="click.signup_continue.password"]')}
    get inputLoginname() {return $('#login')}
    get continueLoginNameBtn() {return $('//button[@data-continue-to="opt-in-container"]')}
    get inputConfirm() {return $('#opt_in')}
    get continueConfBtn() {return $('//button[@data-optimizely-event="click.signup_continue.opt-in"]')}
    get TitleLocator() {return $('//h2[@class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]')}
    get startFreeBtn() {return $('//a[@class="btn-mktg btn-large-mktg btn-muted-mktg"]')}
    get pickTrialPlanTitle() { return $('//h1[@expect(SignInGitHub.TitleLocator).toHaveValue("The place for anyone from anywhere to build anything")]')}
    get enterPriseCloudBtn() {return $('//div[@class="d-flex flex-column flex-items-center height-full rounded-3 color-shadow-extra-large color-bg-default p-3 p-lg-5"]')}
    get subscribeBtn() {return $('//a[@class="btn-mktg mb-4 btn-muted-mktg"]')}
    get subscribeTitle() {return ('//h1[@id="hero-section-brand-heading"]')}
    get workEmaiField() {return $('//input[@type="email"]')}
    get countrySelect() {return $('#country')}
    get countryChoose() {return $('//option[text()="Ukraine"]')}
    get checkBox() {return $('#gated-agree-marketingEmailOptin1')}
    get subscrybeBtnResourses() {return $('//button[@class="Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4"]')}
    get titleAfterSub() {return $('#hero-section-brand-heading')}
    get searchFieldEnter() {return $('#query-builder-test')}
    get clickOnSearchinField() {return $('//span[@class="flex-1"]')}
    get actLocator() {return $('//span[text()="act"]')}
    get prisingBtn() {return $('//a[@class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]')}
    get titleInPricesPage() {return $('//h1[@class="h2-mktg"]')}
    get compareAllFeatures() {return $('//a[@class="d-flex flex-column flex-items-center flex-justify-center h5-mktg"]')}
    get compareFeatures() {return $('//h1[@class="h1"]')}


    async clickOnSignInBtn() {
        await this.signupbtn.click()
    }
    async setEmailInput(value) {
        await this.inputEmail.addValue(value)
    }

    async clickOnContinueEmailBtn() {
        await this.continueEmailBtn.click()
    }

    async setPasswordInput(value) {
        await this.inputPassword.addValue(value)
    }

    async clickOnContinuePasswordBtn() {
        await this.continuePassBtn.click()
    }

    async setLoginNameInput(value) {
        await this.inputLoginname.addValue(value)
    }

    async clickOnContinueLoginNamedBtn() {
        await this.continueLoginNameBtn.click()
    }

    
    async setConfirmInput(value) {
        await this.inputConfirm.addValue(value)
    }

    async clickOnConfirmBtn() {
        await this.continueConfBtn.click()
    }

    async scrollIntoTitle() {
        await this.TitleLocator.scrollIntoView()
    }

    async StartToFreeBtnIsVisible() {
        const startFreeBtn = this.startFreeBtn; 
        const isVisible = await startFreeBtn.isDisplayed(); 

        console.log('Is Start to free link displayed:', isVisible);
        return isVisible;
    }

    async clickOnStartToFreeBtn() {
        await this.startFreeBtn.click()
    }

    async clickOnEnterPriseCloud() {
        await this.enterPriseCloudBtn.click()
    }

    async ScrollIntoSubscribeBtn() {
        await this.subscribeBtn.scrollIntoView()
    }

    async SubscribeBtnIsClickable() {
        const subscribeBtn = this.subscribeBtn; 
        const isSubBtnClickable = await subscribeBtn.isClickable(); 

        console.log('Is subscribe button is clickable:', isSubBtnClickable);
        return isSubBtnClickable;
    }

    async ClickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }

    async SetWorkEmailInput(value) {
        await this.workEmaiField.addValue(value)
    }

    async CountrySelect() {
        await this.countrySelect.click()
    }

    async CountryChoose() {
        await this.countryChoose.click()
    }

    async CheckBoxSelect() {
        await this.checkBox.click()
    }

    async ClickOnSubscribeBtnResourses() {
        await this.subscrybeBtnResourses.click()
    }

    async ClickOnSearchinField() {
        await this.clickOnSearchinField.click()
    }
    
    async SetSearchInput(value) {
        await this.searchFieldEnter.addValue(value)
    }

    async GetTextAct() {
        const actLocator = this.actLocator;
        const getTextLocator = await actLocator.getText();
        console.log("Text of element:", getTextLocator)
    }

    async ClickOnPricingBtn() {
        await this.prisingBtn.click()
    }

    async ScrollIntoCompareAllFeaturesLink() {
        await this.compareAllFeatures.scrollIntoView()
    }

    async ClickOnCompareFeaturesLink() {
        await this.compareAllFeatures.click()
    }
    
}

export default new SignInGitHub()
