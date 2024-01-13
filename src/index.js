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

    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    // });
    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
    // const tweet = await Tweet.findById('659ef4a1fe61fba13da2fe64');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('659efaaa0a04b9ea9f6f0ab8'), 
    // {content: 'New tweet brewing'});
    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'New comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.getWithComments('659f8d97b436a315a1dcb36d');
    // const tweet = await tweetRepo.getAll(0, 4);
    // console.log(tweet[0].contentWithEmail);

    const tweet = await tweetRepo.create({content: 'With hooks'});
    console.log(tweet);
});