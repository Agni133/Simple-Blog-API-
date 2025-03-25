import express from "express";
import { createPost, getAllPosts,deletePost } from "./controllers";

const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getAllPosts);
router.delete("/posts/:id", deletePost);

export default router;
