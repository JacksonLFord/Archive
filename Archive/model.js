const mongoose = require('mongoose');

const GeneralSchema = mongoose.Schema({
	Name:{type: String,default:''},
	Description:{type: String,deafult:''},
	Affinities :[{type : String , default : ''}],
	Hidden:{type: String, default:''},
	Parents:[{type : String , default : 'NONE'}]
});
const GeneralInfo = mongoose.model('GeneralInfo', GeneralSchema);

module.exports = {
  GeneralInfo
}