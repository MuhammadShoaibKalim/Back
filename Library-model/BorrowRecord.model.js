import mongoose from "mongoose";
const borrowRecordSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    },
    borrowDate: {
      type: Date,
      default: Date.now
    },
    returnDate: {
      type: Date
    }
  }, { timestamps: true });
  
  const BorrowRecord = mongoose.model('BorrowRecord', borrowRecordSchema);
  