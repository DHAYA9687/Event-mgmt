import express from "express";
import { Event } from "../models/EventSchema.js";
const route = express.Router();

//for creating the event
route.post("/", async (req, res) => {
  try {
    if (
      !req.body.eventName ||
      !req.body.conductBy ||
      !req.body.eventDate ||
      !req.body.eventTime ||
      !req.body.venue ||
      !req.body.link
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const { eventName, conductBy, eventDate, eventTime, venue, link } =
      req.body;
    const eventConduct = conductBy.toUpperCase();
    const event = new Event({
      eventName,
      conductBy: eventConduct,
      eventDate,
      eventTime,
      venue,
      link,
    });
    console.log(event);
    await event.save();
    return res.status(200).json({ message: "Event Created Sucesssfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error Occured while saving the event" });
  }
});
route.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    if (!events) {
      return res.status(404).json({ message: "No events found" });
    }
    res.status(200).json({ counts: events.length, data: events });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occured while fetching the events" });
  }
});

//for getting the event by attribute
route.get("/:attribute", async (req, res) => {
  const attribute = req.params.attribute;
  try {
    const event = await Event.find({ conductBy: attribute });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ data: event });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occured while fetching the event" });
  }
});

//for updating the event
route.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.eventName ||
      !req.body.conductBy ||
      !req.body.eventDate ||
      !req.body.eventTime ||
      !req.body.venue ||
      !req.body.link
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const id = req.params.id;
    const event = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {}
});

//for deleting the event

route.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).send("Event deleted successfully");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occured while deleting the event" });
  }
});

//for checking the availability of the venue
route.post("/check", async (req, res) => {
  try {
    if (!req.body.venue || !req.body.eventTime || !req.body.eventDate) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body.venue, req.body.eventTime, req.body.eventDate);
    const { venue, eventTime, eventDate } = req.body;
    const event = await Event.find(
      {
        venue: venue,
      },
      {
        eventTime: new Date(eventTime),
      },
      {
        eventDate: new Date(eventDate),
      }
    );
    if (event.length > 0) {
      return res.status(404).json({ message: "Venue is not  available" });
    } else {
      return res.status(200).json({ message: "Venue is available for Event" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occured while checking the venue" });
  }
});
export default route;
