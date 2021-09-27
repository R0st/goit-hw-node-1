/////////////////////////     COMMANDER     //////////////////////
const contactsOperations = require('./db/app');
const { program } = require("commander");

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction(argv) {
  const { action, id, name, email, phone } = argv;
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
        console.log(contacts);
      break;

    case 'get':
      const oneContact = await contactsOperations.getContactById(Number(id));
        if (!oneContact) {
            throw new Error(`Товар с id=${id} не найден`);
        }
        console.log(oneContact);
      break;

    case 'add':
          const newContact = await contactsOperations.add(name, email, phone);
        console.log(newContact);
      break;

    case 'remove':
      const result = await contactsOperations.removeContact(Number(id));
        if (!result) {
            throw new Error (`Контакт с id=${id} не найден`)
        }
        console.log('удаление прошло успешно');
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }};

invokeAction(argv);


// const contactsOperations = require('./db/app');
// const updateContacts = require('./db/updateContacts');

// const id = 6;
// const deleteId = 10;
// const newData = {
//     "name": "Will Smith",
//     "email": "willsmith@gmail.com",
//     "phone": "(111) 234-5678"
// };

// (async () => {
//     try {
//         const contacts = await contactsOperations.listContacts();
//         console.log(contacts);
        
//         const oneContact = await contactsOperations.getContactById(id);
//         if (!oneContact) {
//             throw new Error(`Товар с id=${id} не найден`);
//         }
//         console.log(oneContact);
        
//         const newContact = await contactsOperations.add(newData);
//         console.log(newContact);
       
//         const updateContact = await contactsOperations.updateById(id, { ...oneContact, name: 'Bugaga' });
//         if (!updateContact) {
//             throw new Error(`Контакт с id=${id} не найден`);
//         }
//         console.log(updateContact);
        
//         const result = await contactsOperations.removeContact(deleteId);
//         if (!result) {
//             throw new Error (`Контакт с id=${deleteId} не найден`)
//         }
//         console.log('удаление прошло успешно');
//     }
//     catch (error) {
//         console.log(error.message)
//     }
// })();

//////////////////////////////// YARGS ////////
// index.js
// const argv = require('yargs').argv;

// const contactsOperations = require('./db/app');

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
    
//   (async () => {
//   switch (action) {
//     case 'list':
//       const contacts = await contactsOperations.listContacts();
//         console.log(contacts);
//       break;

//     case 'get':
//       const oneContact = await contactsOperations.getContactById(id);
//         if (!oneContact) {
//             throw new Error(`Товар с id=${id} не найден`);
//         }
//         console.log(oneContact);
//       break;

//     case 'add':
//           const newContact = await contactsOperations.add(name, email, phone);
//         console.log(newContact);
//       break;

//     case 'remove':
//       const result = await contactsOperations.removeContact(deleteId);
//         if (!result) {
//             throw new Error (`Контакт с id=${deleteId} не найден`)
//         }
//         console.log('удаление прошло успешно');
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }})();
//     }
      
// invokeAction(argv);
/////////////////////////////////////////////////   end     ////////////////////

// console.log(process.argv);
///// так делать не нужно  ///////
// const contactsOperations = require('./db/app');

// (async () => {
//     const actionIdx = process.argv.indexOf('--action');
//     if (actionIdx !== -1) {
//         const action = process.argv[actionIdx + 1];
//         switch (action) {
//             case "showAll":
//                 const contacts = await contactsOperations.listContacts();
//                 console.log(contacts);
//                 break;
//         }
//     }
// })()



/////////////////////////////////
// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');

// const arr = hideBin(process.argv);
// console.log(arr);

// const { argv } = yargs(arr);
// // console.log(argv);

// const contactsOperations = require('./db/app');
// (async() => {
//     const { action, id } = argv;
//     switch (action) {
//         case "showAll":
//             const contacts = await contactsOperations.listContacts();
//             console.log(contacts);
//             break;
//         case "showById":
//             const contact = await contactsOperations.getContactById(id);
//             if (!contact) {
//                 console.log(`Контакт с id=${id} не найден`)
//             } else{
//                 console.log(contact);
//             }
//             break;
//         default:
//             console.log("Неизвестная команда");
//     }
//  })();





