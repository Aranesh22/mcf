const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let coachSchema = Schema({
	name: {type: String, required: true},
	pic: {type: String},
	bio: {type: String},
	specialities: [String],
	rate: {type: Number},
	availability: {type: Boolean}
}); 

module.exports = mongoose.model("Coach", coachSchema);