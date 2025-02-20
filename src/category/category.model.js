import { Schema, model} from "mongoose";

const categorySchema = Schema({
    categoryName:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"],
        unique : true
    },
    status:{
        type: Boolean,
        default: true
    }

})

export default model("Category", categorySchema)