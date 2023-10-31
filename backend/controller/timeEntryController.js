const userTimeEntry = require('../models/userTimeEntry');
                 //// fehler!

exports.getTimeEntry = async (req, res) => {
    try {                       
        const entry = await entry.find();
        res.status(200).json(entry);
    } catch (error) {
      res.status(500).send( 'Timeentry error!' )
    }
};

exports.getSaveTimeEntry = async (req, res) => {
    console.log (req.body.startTime)
    try {
        const newTimeEntry = new newTimeEntry({ startTime: req.body.startTime,
                                                 endTime: req.body.endTime,});
        res.status(201).json({ msg: 'Arbeitszeit erfaßt!'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error:'Fehler bei der Erfaßung!'})
    }
};

