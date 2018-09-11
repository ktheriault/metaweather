const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

console.log("Using CORS");

// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static(path.join(__dirname, "..", "static")));
// app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.use(express.static(__dirname + '/build/'));
app.use('/src/assets', express.static(__dirname + '/src/assets/'));


app.listen(process.env.PORT || 8080);