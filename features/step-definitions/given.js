import { Given } from "@wdio/cucumber-framework";

import DashboardPage from "../pageobjects/dashboard.page.js";

Given(/^I am on (\w+) page$/, async (login) => {
    console.log(login)
    await DashboardPage.goToDashboard()
})

