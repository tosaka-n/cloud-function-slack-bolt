const functions = require("firebase-functions");
const slack = require("./slack");
exports.slack = functions.https.onRequest(slack.app);