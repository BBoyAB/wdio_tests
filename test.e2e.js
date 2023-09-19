import SignInGitHub from "../pages/githubsignin.page.js"
import { Key } from 'webdriverio'

describe("Testing course task", () => {
    
    it("should sign in on github", async () => {
        await browser.url('https://github.com/');
        
        await SignInGitHub.clickOnSignInBtn()
        await browser.pause(5000)
        
        await SignInGitHub.setEmailInput('bboyab277@gmail.com')
        await browser.pause(1000)
        await SignInGitHub.clickOnContinueEmailBtn()

        await SignInGitHub.setPasswordInput("powermove3785")
        await browser.pause(1000)
        await SignInGitHub.clickOnContinuePasswordBtn()

        await SignInGitHub.setLoginNameInput("Boltic3785")
        await browser.pause(1000)
        await SignInGitHub.clickOnContinueLoginNamedBtn()

        await SignInGitHub.setConfirmInput("y")
        await browser.pause(1000)
        await SignInGitHub.clickOnConfirmBtn()

    });

   it("should select trial plan", async () => {
        await browser.url('https://github.com/');

        await SignInGitHub.scrollIntoTitle()
        await browser.pause(2000)

        expect(SignInGitHub.TitleLocator).toHaveValue("The place for anyone from anywhere to build anything")

        const isStartToFreeBtnVisible = await SignInGitHub.StartToFreeBtnIsVisible();
        expect(isStartToFreeBtnVisible).toBe(true);

        await SignInGitHub.clickOnStartToFreeBtn()
        await browser.pause(2000)

        expect(SignInGitHub.pickTrialPlanTitle).toHaveValue("Pick your trial plan")

        await SignInGitHub.clickOnEnterPriseCloud()
        await browser.pause(2000)
    });

    it("should subscribe on newsletter", async () => {
        await browser.url('https://github.com/');

        await SignInGitHub.ScrollIntoSubscribeBtn()
        await browser.pause(2000)

        const isSSubscribeBtnClickable = await SignInGitHub.SubscribeBtnIsClickable();
        expect(isSSubscribeBtnClickable).toBe(true);

        await SignInGitHub.ClickOnSubscribeBtn()
        await browser.pause(2000)

        expect(SignInGitHub.subscribeTitle).toHaveValue("Subscribe to our developer newsletter")

        await SignInGitHub.SetWorkEmailInput('bboyab@gmail.com')
        await SignInGitHub.CountrySelect()
        await SignInGitHub.CountryChoose()
        await SignInGitHub.CheckBoxSelect()
        await SignInGitHub.ClickOnSubscribeBtnResourses()

        expect(SignInGitHub.titleAfterSub).toHaveValue("Thanks for subscribing!") 
    });


    it("should find act in text", async () => {
        await browser.url('https://github.com/');

        await SignInGitHub.ClickOnSearchinField()
        await browser.pause(2000)
        await SignInGitHub.SetSearchInput("act")
        await browser.keys([Key.Enter])
        await browser.pause(2000)
        await SignInGitHub.GetTextAct()      
    });

    it("should check pricing page", async () => {
        await browser.url('https://github.com/');

        await SignInGitHub.ClickOnPricingBtn()
        await browser.pause(1000)
        expect(SignInGitHub.titleInPricesPage).toHaveValue("Get the complete developer platform.")
        await SignInGitHub.ScrollIntoCompareAllFeaturesLink() 
        await browser.pause(1000)
        await SignInGitHub.ClickOnCompareFeaturesLink()
        expect(SignInGitHub.compareFeatures).toHaveValue("Compare features")          
    });
});
