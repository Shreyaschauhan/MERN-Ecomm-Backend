const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AStyUNec4PI9KQMnLeJ-2kgtMiNVjYK7IC2eAkSErgxTGBliJKyY279mmKp83y_ZZp5QmKv_C3-OgMTw",
  client_secret: "ECJsuOwonsbDXu8J7v2ZiCjIOkmY4-q-R7UiiM2aTmS_b7RzOtVKn6Kn_Es5aHSIBsQ4gRk_Ma5gKpwH",
});

module.exports = paypal;