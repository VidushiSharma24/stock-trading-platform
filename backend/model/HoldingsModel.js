const { model } = require("mongoose");

const { HoldingsSchema } = require("../Schemas/HoldingsSchema");

const HoldingsModel = model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };