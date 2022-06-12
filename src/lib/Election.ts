import Poll from './Poll.js';
import VoteBox from './VoteBox.js';
import Base from './Base.js';
import droop from './droopQuota.js';

/** The options for an {@link Election}. */
export interface ElectionOptions {}

export default class Election extends Base {

    constructor({}: ElectionOptions = {}) {
        super();
    }

}
