import express from 'express';
import queryDatabase from "./queryPromise";

export async function createApp() {

    const characters = ['Brunno Pezzini']

    const sqlInsert = 'INSERT INTO `characterSW`(`name`) VALUES (?)';

    for (const character of characters) {
        await queryDatabase(sqlInsert, [character]);
    }

    const app = express();

    app.get('/', async (req, res) => {
        const selectCharacters = 'SELECT * FROM `characterSW`';

        const allCharacters = await queryDatabase(selectCharacters);

        const html = `<h1>Full Cycle Rocks !!</h1>\n
  <ul>
    ${allCharacters.map((character: {name: string}) => {
            return `<li>${character.name}</li>`;
        }).join('')}
  </ul>`
        res.send(html)
    })
    return app
}