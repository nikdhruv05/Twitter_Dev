const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const Tweet = require('./models/tweet');

app.listen(3000, async() => {
    console.log('Server started');
    await connect();
    console.log('Mongo db connected');
    
});