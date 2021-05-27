const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com/');
        driver.sleep(3000);
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // let firstResult = await driver.(until.elementLocated(By.css('h3')), 10000);
        // console.log(await firstResult.getAttribute('textContent'));
        // firstResult.click();
    }
    catch {
        console.log('error');
    }
    finally {
    }
}

example();