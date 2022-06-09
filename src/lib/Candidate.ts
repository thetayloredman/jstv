import Base from './Base.js';
import Poll from './Poll.js';

export default class Candidate extends Base {
    public readonly name: string;
    public readonly poll: Poll | null;
    public readonly statement: string | null;
    constructor({ name, poll = null, statement = null }: { name: string, poll?: Poll | null, statement?: string | null }) {
        super();
        this.name = name;
        this.poll = poll;
        this.statement = statement;
        this._log(`Candidate Instance ${this._instanceID} ready. Name: ${name}`);
    }
}
