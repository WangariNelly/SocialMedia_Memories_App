
import PostMessage from '../models/postDetails.js';


export const createPosts = async(req,res) => {
  try{

    const postMessages = await PostMessage.find();
    console.log(postMessages)

  } catch(err) {
    console.log(err.message);
  }
};


export const getPosts = (req,res) => {
    res.send("Response");
};