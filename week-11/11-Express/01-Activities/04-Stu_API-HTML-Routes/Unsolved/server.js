// TODO: Import express
const express = require("express")
const termData = require("./terms.json");

// TODO: Import 'terms.json' file
const PORT = 3001;

app.get("./app.terms",(req, res) => res.json(termData));

// TODO: Initialize app variable

// TODO: Create a route for a GET request that will return the content of our `terms.json` file


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
