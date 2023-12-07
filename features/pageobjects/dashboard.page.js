const dashboardUrl = "https://dashboard-uat.hanamicrofinance.net/login"

class DashboardPage {
    get username() {
        return $('input[name="user_name"]')
    }

    get password() {
        return $('input[name="password"]')
    }

    get loginBtn() {
        return $('button')
    }

    async goToDashboard() {
        await browser.url(dashboardUrl)
    }

    async login(username, password) {
        console.log(username, password)
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.loginBtn.click()
    }
}

export default new DashboardPage()