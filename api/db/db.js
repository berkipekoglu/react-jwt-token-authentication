const { default: mongoose } = require("mongoose");

const mongo = mongoose.connect("mongodb://localhost:testDb")
    .then(() => console.log("Bağlantı başarıla sağlanmıştır."))
    .catch((error) => console.log("Bağlantı oluşturalamadı.", error.message));

module.exports = mongo;