"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dailyReviewRouter = express_1.default.Router();
dailyReviewRouter.get('/', (req, res) => [
    res.send("main page for dailyReview")
]);
dailyReviewRouter.get('/about', (req, res) => {
    res.send("about page for dailyReview");
});
exports.default = dailyReviewRouter;
