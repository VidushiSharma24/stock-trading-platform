const { model } = require("mongoose");

const { OrdersSchema } = require("../Schemas/OrdersSchema");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = { OrdersModel };