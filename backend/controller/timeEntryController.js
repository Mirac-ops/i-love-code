const User = require("../models/User");
const UserTimeEntry = require("../models/userTimeEntry");
//******************************************** */
// Funktion zum Abrufen aller Time Entries
exports.getAllTimeEntries = async (req, res) => {
  try {
    const entries = await UserTimeEntry.find().populate("username");
    res.status(200).json(entries);
  } catch (error) {
    console.error("Detailed Error:", error);
    res
      .status(500)
      .json({ message: "Error retrieving time entries", error: error.message });
  }
};
// Funktion zum Erstellen eines neuen Time Entries
exports.createTimeEntry = async (req, res) => {
  try {
    // Eingegebene Uhrzeiten im "HH:mm"-Format
    const dienstbeginn = req.body.dienstbeginn;
    const dienstende = req.body.dienstende;
    console.log ("dienstbeginn", dienstbeginn);
    console.log ("dienstende", dienstende);
    // Aktuelles Datum im Format JJJJ-MM-TT
    const currentDate = new Date().toISOString().split('T')[0];
    // Aktuelles Datum mit Uhrzeiten kombinieren
    const formattedStartTime = `${currentDate}T${dienstbeginn}`;
    const formattedEndTime = `${currentDate}T${dienstende}`;
    const newEntry = new UserTimeEntry({
      username: req.body.username.trim(),
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    });
    // Überprüfen ob Benutzernamen vorhanden
    console.log("Suche nach Benutzername:", newEntry.username);
    const userExists = await User.findOne({ username: newEntry.username });
    if (!userExists) {
      console.log("Benutzer nicht gefunden:", newEntry.username);
      return res
        .status(400)
        .json({ message: "Benutzer mit angegebenem Benutzernamen existiert nicht." });
    }
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error("Detaillierter Fehler:", error);
    res
      .status(500)
      .json({ message: "Fehler beim Erstellen des Arbeitszeiteintrags", error: error.message });
  }
};
