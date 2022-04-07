const express = require("express");
const router = express.Router();

const GitlabController = require("./../app/http/controllers/GitlabController");
router.get("/", GitlabController.index);
router.post("/", GitlabController.store);

module.exports = router;
