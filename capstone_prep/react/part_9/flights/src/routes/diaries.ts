import express from 'express';
import { Response } from 'express';
import diaryService from '../services/diaryService'
import { NonSensitiveDiaryEntry } from '../types';
import { toNewDiaryEntry } from '../utils'

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  let entries = diaryService.getNonSensitiveEntries()
  res.send(entries);
});

router.get('/:id', (req, res) => {
  let entry = diaryService.findById(Number(req.params.id))

  if (entry) {
    res.send(entry)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});
export default router;