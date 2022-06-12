import Base from './Base.js';
import Poll from './Poll.js';

/** Options for the {@link Candidate} class. */
export interface CandidateOptions {
    /** The name of this candidate. See {@link Candidate.name}. */
    name: string;
    /** The parent {@link Poll} that this candidate belongs to. See {@link Candidate.poll}. */
    poll?: Poll | null;
    /** The candididate's statement. See {@link Candidate.statement}. */
    statement?: string | null;
}

export default class Candidate extends Base {
    /** The name of this candidate. */
    public readonly name: string;
    /** The parent {@link Poll} that this candidate belongs to. */
    public readonly poll: Poll | null;
    /** The candididate's statement. */
    public readonly statement: string | null;
    constructor({ name, poll = null, statement = null }: CandidateOptions) {
        super();
        this.name = name;
        this.poll = poll;
        this.statement = statement;
        this._log(`Candidate Instance ${this._instanceID} ready. Name: ${name}`);
    }
}
