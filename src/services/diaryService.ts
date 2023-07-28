import diaryEntries from '../../data/diaries';

import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../../types';

export const getEntries = (): DiaryEntry[] => {
    return diaryEntries;
};

export const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaryEntries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility
    }));
};

export const addEntry = (entry: NewDiaryEntry): DiaryEntry => {
    
    const newDiaryEntry = {
        id: Math.max(...diaryEntries.map((d) => d.id)) + 1,
        ...entry
    };

    diaryEntries.push(newDiaryEntry);
    return newDiaryEntry;
};

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaryEntries.find((entry) => entry.id === id);
    return entry;
};