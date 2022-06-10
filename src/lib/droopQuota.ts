import debug from 'debug';
const dbg = debug('jstv:droop');

export default function droop(cast: number, seats: number) {
    const q = Math.floor(cast/(seats+1))+1;
    dbg(`Calculating droop quota for ${cast} votes, ${seats} seats: ${q}`);
    return q;
}
