
const updateContacts = require('./updateContacts');
const listContacts = require('./listContacts');

const removeContact = async (id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    }
    contacts.splice(idx, 1);
    //const newContacts=contacts.filter((_,index)=>index!==idx);
    await updateContacts(contacts);
    return true;
};

module.exports = removeContact;

