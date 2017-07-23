const mongoose = require('mongoose');
const Contact = require('../model/contacts.js');
mongoose.Promise = global.Promise;

exports.index = (req, res) => {
  res.render('index')
};

exports.add = (req, res) => {
  res.render('add')
};

exports.contacts = (req, res) => {
  Contact.find({}, (err, docs) => {
    res.render('contacts', { docs });
  });

};

exports.save = (req, res) => {
  let contact = new Contact({ name: req.body.name, surname: req.body.surname });
  console.log(contact);
  contact.save( (err, contactStored) => console.log( err ? 'And error has ocurred when saving the data!' : `Data saved! ${contactStored}`) );
  res.redirect('/');
};
