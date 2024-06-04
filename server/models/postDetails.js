import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  info: String,
  userName: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});   

const PostMessage = mongoose.model('postMessage', postSchema);

export default PostMessage;