var noteData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {

        req.body.id = noteData.length;
        noteData.push(req.body);
        res.json(true);

    });

    app.delete("/api/notes/:id", function (req, res) {
        var newNotes = [];

        for (i = 0; i < noteData.length; i++) {
            if (req.params.id != noteData[i].id) {
                newNotes.push(noteData[i])
            }
        }

        noteData = newNotes

        res.json({ ok: true });
    });
};

