import Candidate from './Candidate.js';
import Base from './Base.js';

import droop from './droopQuota.js';

/** Options for the {@link Poll} class. */
export interface PollOptions {
    /** The job title. See {@link Poll.role}. */
    role: string;
    /** Describe the role! See {@link Poll.description}. */
    description?: string | null;
    /** Who is running? See {@link Candidate} and {@link Poll.candidates}. */
    candidates?: Candidate[];
    /** The number of seats to fill. See {@link Poll.seats}. */
    seats?: number;
    /** The maximum votes required to be elected. See {@link Poll.quota}. */
    quota?: number | null;
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
    /** The quota (max votes to be elected). Set to null to use Droop. */
    public readonly quota: number | null;

    constructor({ role, description = null, candidates = [], seats,quota=null }: PollOptions) {
        super();
        this.role = role;
        this.description = description;
        this.candidates = candidates;
        this.seats = seats ?? candidates.length / 2;this.quota=quota;
    }
}
