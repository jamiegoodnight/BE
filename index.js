require("dotenv").config();
const server = require("./server.js");

const port = process.env.PORT || 5100;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
