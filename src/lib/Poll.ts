import Candidate from './Candidate.js';
import Base from './Base.js';

import droop from './droopQuota.js';

/** Options for the {@link Poll} class. */
export interface PollOptions {
    /** The job title. */
    role: string;
    /** Describe the role! */
    description?: string | null;
    /** Who is running? See {@link Candidate}. */
    candidates?: Candidate[];
    /** The number of seats to fill. */
    seats?: number;
}

/** A specific POLL or election. Contains instances of {@link Candidate}. */
export default class Poll extends Base {
    /** The job title. */
    public readonly role: string;
    /** Describe the role! */
    public readonly description: string | null;
    /** Who is running? See {@link Candidate}. */
    public candidates: Candidate[];
    /** The number of seats to fill. Set to candidates length/2 by default. */
    public readonly seats: number;

    constructor({ role, description = null, candidates = [], seats }: PollOptions) {
        super();
        this.role = role;
        this.description = description;
        this.candidates = candidates;
        this.seats = seats ?? candidates.length / 2;
    }
}
