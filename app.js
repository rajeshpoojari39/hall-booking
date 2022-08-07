const express = require("express");
const rooms = require("./rooms");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hall Booking Api");
});

//Create room.

app.post("/createRoom", (req, res) => {
  rooms.push({
    name: req.body.name,
    seats: req.body.seats,
    amenities: req.body.amenities,
    price: req.body.price,
    roomId: req.body.name,
    bookingDetails: [{}],
  });
  res.send("Room Created");
});

//Book rooms

app.post("/bookRoom", (req, res, next) => {
  for (let i = 0; i < rooms.length; i++) {
    if (!(rooms[i].roomId === req.body.roomId)) {
      return res.status(400).send({ error: "Invalid" });
    } else {
      let booking = {
        customerName: req.body.name,
        date: new Date(req.body.date),
        start: req.body.start,
        end: req.body.end,
        status: "confirmed",
      };
      let result = undefined;
      rooms[i].bookingDetails.forEach((book) => {
        if (
          book.date.getTime() == booking.date.getTime() &&
          book.start === booking.start
        ) {
          result = 0;
          console.log("in booking");
          //  return res.status(400).send({error:"Please select different time slot"})
        } else {
          result = 1;
          rooms[i].bookingDetails.push(booking);
          // return res.status(200).send("Booking confirmed")
        }
      });
      if (result) return res.status(200).send("Booking confirmed");
      else
        return res
          .status(400)
          .send({ error: "Please select different time slot" });
    }
  }
});

//List all rooms.

app.get("/rooms", (req, res) => {
  res.send(rooms);
});

//List all customers.

app.get("/customers", (req, res) => {
  let customers = [];

  rooms.forEach((room) => {
    let customersObject = { roomName: room.name };

    room.bookingDetails.forEach((customer) => {
      customersObject.customerName = customer.customerName;
      customersObject.date = customer.date;
      customersObject.start = customer.start;
      customersObject.end = customer.end;

      customers.push(customersObject);
    });
  });

  res.send(customers);
});

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
