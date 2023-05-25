const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().doc("tokers/1");

const TwitterApi = require("twitter-api-v2").default;
const twitterClient = new TwitterApi({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'Your_CLIENT_SECRET'
});