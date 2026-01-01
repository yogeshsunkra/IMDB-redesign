import mongoose from "mongoose";

const person = new mongoose.Schema({
    
    id:{
        type:String,
        required:true,
        unique:true,
    },

    data :{
        type:mongoose.Schema.Types.Mixed,
        required : true,
    }
},{
    timestamps:true,
})


export default mongoose.model('Person',person);