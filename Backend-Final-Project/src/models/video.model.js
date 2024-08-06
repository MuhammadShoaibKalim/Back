import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true // for search purposes
    },
    description: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String, // cloudinary URL or other storage URL
        required: true
    },
    thumbnailUrl: {
        type: String // URL for video thumbnail
    },
    duration: {
        type: Number // Duration in seconds 
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
       type :Boolean,
       default:true
    },
    Owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

export const Video = mongoose.model("Video", videoSchema);
