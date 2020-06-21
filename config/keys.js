dbPassword =
  'mongodb+srv://UserName:' +
  encodeURIComponent('Password') +
  '@cluster0-6ciy8.mongodb.net/<navigus>test?retryWrites=true';

module.exports = {
  mongoURI: dbPassword,
};


