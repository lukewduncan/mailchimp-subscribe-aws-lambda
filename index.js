require('dotenv').load();

var Mailchimp = require('mailchimp-api-v3');

// mailchimp environment variables
var API_KEY  = process.env.API_KEY,
    LIST_ID  = process.env.LIST_ID;

// function for subscribing a user
function addToList(emailAddress) {
  var mailchimp = new Mailchimp(API_KEY);
  mailchimp.request({
    method : 'post',
    path : '/lists/' + LIST_ID + '/members',
    body : {
      email_address : emailAddress,
      status : 'subscribed'
    }
  }).then(function(results) {
    console.log(results);
  })
  .catch(function (err) {
    console.log(err);
  });
}

exports.handler = function(event, context, callback) {
  var emailAddress = event.email;
  console.log(event.email);
  addToList(emailAddress);
}