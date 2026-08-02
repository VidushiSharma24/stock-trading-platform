const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/PositionsSchema");

const PositionsModel = new model("Position", PositionsSchema);

module.exports = { PositionsModel };