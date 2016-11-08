module.exports = function(app) {
  // Insert routes below
  app.use('/api/thing', require('./api/thing'));
  
}
