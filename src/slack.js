const functions = require("firebase-functions");
const { App, ExpressReceiver } = require('@slack/bolt');
const config = functions.config();
const expressReceiver = new ExpressReceiver({
  signingSecret: config.slack.signing_secret,
  endpoints: '/',
  processBeforeResponse: true
});

const app = new App({
  receiver: expressReceiver,
  token: config.slack.bot_token,
  processBeforeResponse: true
});
app.error(console.log);
app.event('message', async ({ payload, event, message, body, say }) => {
  console.log(payload, event, message, body);
  if (message.text == "hello") {
    await say("hello");
  }
  return;
});

exports.app = expressReceiver.app;