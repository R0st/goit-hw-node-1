// const fs = require('fs/promises');
// const path = require('path');   //для нормализации пути
// // console.log(__dirname);
// const constctsPath = path.join(__dirname, 'contacts.json'); //делает нормализацию и обьеденение пути

// const getAll = async () => {
//     const data = await fs.readFile(constctsPath);
//     const contacts = JSON.parse(data);
//     return contacts;
// }

// module.exports = getAll;

const contacts = require('./contacts.json');
const listContacts = async () => contacts;
module.exports = listContacts;
