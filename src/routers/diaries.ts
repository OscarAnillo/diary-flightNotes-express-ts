import express from 'express';
const router = express.Router();

import { getEntries, findById, addEntry } from '../services/diaryService';

import { toNewDiaryEntry } from '../../utils';

router.get("/", (_req, res) => {
    res.send(getEntries());
});

router.get("/:id", (req, res) => {
    const diary = findById(Number(req.params.id));

    if(diary){
        res.status(200).send(diary);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    try {
      const newDiaryEntry = toNewDiaryEntry(req.body);
      const addedEntry = addEntry(newDiaryEntry);
      
      res.status(200).json(addedEntry);
    } catch (err) {
      res.status(400).json(err);
    }
});

export default router;