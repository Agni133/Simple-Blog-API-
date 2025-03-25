"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.getAllPosts = exports.createPost = void 0;
const db_1 = __importDefault(require("./db"));
// ✅ Create Post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const result = yield db_1.default.query("INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *", [title, content]);
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.createPost = createPost;
// ✅ Get All Posts
const getAllPosts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query("SELECT * FROM posts");
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getAllPosts = getAllPosts;
// ✅ Delete Post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.default.query("DELETE FROM posts WHERE id = $1", [id]);
        res.json({ message: "Post deleted" });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.deletePost = deletePost;
