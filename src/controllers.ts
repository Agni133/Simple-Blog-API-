import { Request, Response } from "express";
import client from "./db";
import { Post } from "./models";

//  Create Post
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const result = await client.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Posts
export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};



//  Delete Post
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await client.query("DELETE FROM posts WHERE id = $1", [id]);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
