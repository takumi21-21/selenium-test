const {Builder, By, Key, until} = require('selenium-webdriver');
const tesseract = require('tesseract.js');
let fs = require('fs');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.e-typing.ne.jp/roma/check/');

    await driver.findElement(By.id('level_check_btn')).sendKeys(Key.RETURN);
    await driver.sleep(5000);

    const iframe = await driver.findElement(By.id('typing_content'));
    await driver.switchTo().frame(iframe);

    await driver.findElement(By.css('#start_btn')).click();
    await driver.sleep(3000);

    await driver.actions().keyDown(Key.SPACE).perform();
    await driver.sleep(3000);

    const repeatFlg = true;
    while (repeatFlg) {
        try {
            const sentenceText = await await (await driver.findElement(By.id('sentenceText')).getText()).toLowerCase();
            for (i = 0; i < sentenceText.length; i++) {
                word = sentenceText[i];
                await driver.actions().keyDown(word).perform();
                await driver.sleep(50);
            }
            driver.sleep(1000);
        } catch (error) {
            repeatFlg = false;
            console.log(error);
        }
    }
};

example();
