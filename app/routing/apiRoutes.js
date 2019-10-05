var friends = require("./../data/friends")
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


function addAPIRoutes (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
    
    app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      friends.push(newFriend);
      res.send("FRIEND ADDED TO LSIT");
    });
}

module.exports = addAPIRoutes;