# hall-booking
A RESTAPI for hall booking.

Live URL-(https://hall-booking-rp.herokuapp.com)

## Create Room.
POST - /createRoom <br />
Request body - <br />{
                  "name": "Ultra",
                  "seats": 500,
                  "amenities": "wifi,projection screen,AC",
                  "price": 10000,
                  "roomId": "Ultra",
                  "bookingDetails": []
              }

## Book Room.
POST - /bookRoom <br />
Request body - <br /> {
"name": "Rajesh",
"date": "09/08/2022",
"start": "10:00",
"end": "12:00",
"roomId": "basic"
}

## List All Rooms.
GET - /rooms

## List All Customer Details.
GET - /customers
