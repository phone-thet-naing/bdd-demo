import { When } from "@wdio/cucumber-framework";

import DashboardPage from "../pageobjects/dashboard.page.js";

When("I login with {word} and {word}", async function (username, password) {
    await DashboardPage.login(username, password)
});
