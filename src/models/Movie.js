import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    status: {
      type: String,
      enum: ['AVAILABLE', 'RENTED', 'UNDER_MAINTENANCE', 'OUT_OF_CATALOG'],
      default: 'AVAILABLE',
    },
    stars: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('movies', MovieSchema);
