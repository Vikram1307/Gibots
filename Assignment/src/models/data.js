const  mongoose  = require('mongoose');

const detailSchema = new mongoose.Schema({
    Name: {
        type : String,
        required : true,
        trim :true
    },
    Age: {
        type : Number,
        required : true,
        trim :true
    },
    Marks: {
        type : Number,
        required : true,
        trim :true
    }

})

const Details = new mongoose.model('Details', detailSchema )
module.exports = Details;