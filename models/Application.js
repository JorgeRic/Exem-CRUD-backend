'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['photografy', 'developer-tools', 'game', 'bussiness']
  },
  description: String
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
