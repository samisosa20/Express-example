const test = (app) =>{
// Home page route
app.get('', function(req, res) {
  res.send('Hello World!, this is my first API');
});

// About page route
app.get('/about', function(req, res) {
  res.send('Auth Sammy Guttman L.');
});
return app
}

export default test;