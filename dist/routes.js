"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.post("/posts", controllers_1.createPost);
router.get("/posts", controllers_1.getAllPosts);
router.delete("/posts/:id", controllers_1.deletePost);
exports.default = router;
