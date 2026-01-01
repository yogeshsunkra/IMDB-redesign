
import mongoose, { Schema } from "mongoose";

const homeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,

    },
    data:{
        type:mongoose.Schema.Types.Mixed,
        required:true,
        
    },
    category:{
        type:String,
        required:true
    }

    


},{
    timestamps:true,
}
)


export default mongoose.model('HomepageSection',homeSchema);