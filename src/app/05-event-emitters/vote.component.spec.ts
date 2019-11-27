import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should raise `voteChanged` event when upvoted', () => {

    let totalVotes: number = null;

    component.voteChanged.subscribe((newTotal: number) => {
      totalVotes = newTotal;
    });

    component.upVote();

    expect(totalVotes).toBe(1);
  });

});
