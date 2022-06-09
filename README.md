# jstv -- JavaScript STV Implementation

JSTV is a Node.js implementation of [Single Transferrable Vote](https://en.wikipedia.org/wiki/Single_transferable_vote) using random selections for transfers.

Debugging output is enabled by setting `DEBUG` as an environment variable, to any value like `DEBUG="jstv jstv:*"`.

This package is seriously work-in-progress.

## Polling Infrastructure

The primary parent class `Election` contains many sub-classes to represent different components.

An `Election` contains instances of `Poll`s. `Poll`s contain `Candidate`s.

The `Election` class also contains ONE instance of a `VoteBox` which contains different `Ballot`s. The `Ballot`s contain `PollResponse`s which contain `CandidatePriority`s.

Represented in a tree as follows:

```mermaid
flowchart
  Election(Election) --> Election#polls((.polls))
  Election --> Election#box((.box))
  Election#box --> VoteBox(VoteBox)
  VoteBox --> VoteBox#ballots((.ballots))
  VoteBox#ballots --> Ballot_1(Ballot 1)
  VoteBox#ballots --> Ballot_2(Ballot 2)
  VoteBox#ballots --> Ballot_3(Ballot 3)
  Ballot_1 --> Ballot_1#responses((.responses))
  Ballot_2 --> Ballot_2#responses((.responses))
  Ballot_3 --> Ballot_3#responses((.responses))
  Ballot_1#responses --> B1_PollResponse1(PollResponse for 1) --> Poll_1
  B1_PollResponse1 --> B1_PR1(#1) --> Candidate_1
  B1_PollResponse1 --> B1_PR2(#2) --> Candidate_2
  Election#polls --> Poll_1(Poll 1)
  Poll_1 --> Candidate_1(Candidate 1)
  Poll_1 --> Candidate_2(Candidate 2)
```
