/* eslint-disable max-len */

// import localforage from 'localforage';
import track, { makeSeqTrack } from '../features/track';
import { load } from '../util/storage';

export function preloadSequences() {
  const loadedSequences = [];
  const steps = [];

  for (let i = 0; i < 16; i++) {
    loadedSequences[i] = makeSeqTrack();
  }
  return { loadedSequences, steps };
}

export function preloadProjectId() {
  // if ()
  return `sce_project_${Date.now()}`;
}

export function preloadTracks() {
  load().then((v) => console.log(v));
  const tracks = [];
  for (let i = 0; i < 16; i++) {
    tracks[i] = {
      ...track,
      name: `Track ${(i + 1).toLocaleString(
        'en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        }
      )}`
    };
  }
  tracks[2].clockMult = 2;
  tracks[1].clockMult = 0.5;
  return tracks;
}

/* { project: { tempo: number; tracks: never[]; selectedTrackId: number; }; kernel: { mode: number; }; display: { darkMode: boolean; showProject: boolean; }; sequencer: { page: number; loadedSequences: never[]; steps: never[]; }; clock: {}; } */
export default function preloadState() {

}
