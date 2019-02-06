const router = require("express").Router();
const db = require("../../config/connection");

router.get("/api/notes", function (req, res) {
  // query database for all notes and send back as json
  db.query("SELECT * FROM notes", function (err, dbNotes) {
    if (err) throw err;
    // console.log(dbNotes);
    res.json(dbNotes);

    // console.log("WHERE IS THIS GOING???");
  });
});

router.post("/api/notes", function (req, res) {
  // INSERT into database the data coming from req.body
  db.query("INSERT INTO notes SET ?", req.body, function (err, dbNotes) {
    res.json(dbNotes);
  });
});

router.put("/:id", function (req, res) {
  // UPDATE database setting req.body WHERE id = req.params.id
});

router.delete("/api/notes/:id", function (req, res) {
  // DELETE from database where id = req.params.id
  db.query("DELETE FROM notes WHERE ?", {id:req.params.id}, function(err, dbNotes) {
    if (err) throw err;
    res.json(dbNotes);
  });
});

module.exports = router;