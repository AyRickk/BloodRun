// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');
async function scrapeRaceData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector('#tableau-resultats tbody tr');

    const raceData = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('#tableau-resultats tbody tr'));
        return rows.map(row => {
            const tableData = row.querySelectorAll('td');
            return {
                rank: tableData[0].innerText,
                name: tableData[1].innerText,
                bib: tableData[2].innerText,
                nationality: tableData[3].querySelector('img').src,
                categoryRank: tableData[4].innerText,
                genderRank: tableData[5].innerText,
                time: tableData[6].innerText,
                gap: tableData[7].innerText,
                speed: tableData[8].innerText,
                club: tableData[9].innerText,
                license: tableData[10].innerText
            };
        });
    });

    await browser.close();
    return raceData;
}

module.exports = scrapeRaceData;
