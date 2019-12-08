import { LikeComponent } from './like.component';

describe('LikeComponent', () => {

  let component: LikeComponent;

  beforeEach(() => {
    component = new LikeComponent();
  });

  it('Should toggle the iLike property when I click it', () => {
    component.iLike = true;

    component.click();

    expect(component.iLike).toBe(false);
  });

  it('Should decrement total likes if I like an object and click the LikeComponent to unlike it', () => {
    component.iLike = true;
    component.totalLikes = 1;

    component.click();

    expect(component.totalLikes).toBe(0);
  });

  it('Should increment total likes if I do NOT like an object and click the LikeComponent to like it', () => {
    component.iLike = false;
    component.totalLikes = 0;

    component.click();

    expect(component.totalLikes).toBe(1);
  });
});
