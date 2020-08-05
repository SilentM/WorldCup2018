const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// GETS BACK ALL THE Teams
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.json(err);
  }
});

// SUBMITS A Team
// with async/await notation
router.post("/", async (req, res) => {
  const team = new Team({
    //database
    team: req.body.team,
    group: req.body.group,
    pos: req.body.pos,
    played: req.body.played,
    won: req.body.won,
    drawn: req.body.drawn,
    lost: req.body.lost,
    goals_for: req.body.goals_for,
    goals_against: req.body.goals_against,
    pts: req.body.pts,
  });

  try {
    const savedTeam = await team.save(); //save to database, and then after saviing display the data or error
    res.json(savedTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC TEAM
router.get("/:teamName", async (req, res) => {
  try {
    const team = await Team.find({ team: req.params.teamName });
    res.json(team);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE TEAM

router.delete("/:teamName", async (req, res) => {
  try {
    const removedTeam = await Team.remove({ team: req.params.teamName });
    res.json(removedTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

// // UPDATES A Team
// router.patch("/:teamName", async (req, res) => {
//   try {
//     const updatedTeam = await Team.updateOne(
//       { team: req.params.teamName },
//       { $set: { team: req.body.team } }
//     );
//     res.json(updatedTeam);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
