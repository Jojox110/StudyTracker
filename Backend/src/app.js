"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_database_1 = __importDefault(require("./database/test.database"));
const express_1 = __importDefault(require("express"));
const dailyReview_routes_1 = __importDefault(require("./routes/dailyReview.routes"));
const app = (0, express_1.default)();
app.get('/', test_database_1.default);
app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000");
});
app.use('/dailyReview', dailyReview_routes_1.default);
