const rooms = [
  {
    name: "Basic",
    seats: 50,
    amenities: "wifi,projection screen,AC",
    price: 5000,
    roomId: "basic",
    bookingDetails: [
      {
        customerName: "Raj",
        date: new Date("2021-10-10"),
        start: "08:00",
        end: "10:00",
        status: "confirmed",
      },
    ],
  },
  {
    name: "Premium",
    seats: 200,
    amenities: "wifi,projection screen,AC",
    price: 10000,
    roomId: "premium",
    bookingDetails: [
      {
        customerName: "Roy",
        date: new Date("2021-10-11"),
        start: "16:00",
        end: "17:00",
        status: "Payment Pending",
      },
    ],
  },
];

module.exports = rooms;
