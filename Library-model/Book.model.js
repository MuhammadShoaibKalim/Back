import mongoose from "mongoose";
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    required: true
  },
  publicationDate: {
    type: Date
  },
  copiesAvailable: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
