const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
  res.json(data);
});

// This route gets a *SINGLE* user
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id));
  res.json(user);
});

// app.get("/api/users", (req, res) => {
//   const id = req.query.id; 

// });

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id) If you go with query param, just modify the existing endpoint above instead of creating a new endpoint

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

// app.post("/", (req, res) => {

// });

// app.put("/", (req, res) => {

// });

// app.delete("/", (req, res) => {

// });

app.listen(3333, () => {
  console.log("Example app listening on port 3333!");
});
