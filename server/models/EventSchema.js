import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    conductBy: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    eventTime: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Event = mongoose.model("Event", eventSchema);
