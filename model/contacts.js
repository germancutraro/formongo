const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsShema = Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true }
});

module.exports = mongoose.model('contacts', contactsShema);
