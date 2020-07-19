const fs = require('fs').promises;
const fetch = require('node-fetch');


async function my_function() {
    try {
        let my_file = await fs.readFile(__dirname + '/my_ask.json', "utf-8");
        let my_parsed_country = JSON.parse(my_file).country;
        let my_table = [];

        for (let i = 0; i < my_parsed_country.length; i++) {
            let my_fetch = await fetch(`https://restcountries.eu/rest/v2/name/${my_parsed_country[i]}`);
            let my_result = await my_fetch.json();
            console.log(my_result);
            my_table.push(my_result);
        }
        await fs.writeFile('res.json', JSON.stringify(my_table));
        console.log("Tout est ok");


    } catch (e) {
        console.log(e);
    }

}
my_function();

