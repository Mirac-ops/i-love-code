const User = require("../models/User");
const UserTimeEntry = require("../models/userTimeEntry");

// Hilfsfunktion zum Konvertieren des deutschen Datumsformats
function convertGermanDate(germanDate) {
  const parts = germanDate.split(".");
  if (parts.length !== 3) return null;
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}
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
    const formattedStartTime = convertGermanDate(req.body.startTime);
    const formattedEndTime = convertGermanDate(req.body.endTime);
    const startTime = new Date(formattedStartTime);
    const endTime = new Date(formattedEndTime);

    // Überprüfe die Validität der Daten

    if (isNaN(startTime) || isNaN(endTime)) {
      return res.status(400).json({ message: "Invalid date format." });
    }
    const newEntry = new UserTimeEntry({
      username: req.body.username.trim(),
      startTime: startTime,
      endTime: endTime,
    });

    // Überprüfe den Benutzernamen im User-Modell

    console.log("Searching for username:", newEntry.username);
    const userExists = await User.findOne({ username: newEntry.username });
    if (!userExists) {
      console.log("User not found:", newEntry.username);
      return res
        .status(400)
        .json({ message: "User with given username does not exist." });
    }
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error("Detailed Error:", error);
    res
      .status(500)
      .json({ message: "Error creating time entry", error: error.message });
  }
};
