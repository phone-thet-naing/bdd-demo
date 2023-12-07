import { Then } from "@wdio/cucumber-framework";

Then("I should see {} title", async function (title) {
    // Write code here that turns the phrase above into concrete actions
    await expect(await $('span[class="logo-lg"]')).toHaveText(title)
})

Then("I should see the {} warning", async function (warning) {
    await $(`strong=${warning}`).waitForDisplayed()
})
