import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render total votes', () => {

    component.othersVote = 20;
    component.myVote = 1;

    // We need to ask for Angular to refresh the template manually
    fixture.detectChanges();

    // This is the value that must be viewed (`othersVote` + `myVote`)
    const results = (21).toString();

    /**
     * We check at the template if the rendered value from properties are correct using the methods `query()` +
     * `By.css()`, which work similarly to `document.querySelector()` from JavaScript
     */
    const debugElement = fixture.debugElement.query(By.css('.vote-count'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.innerText).toContain(results);
  });

  it('Should highlight the upvote button if I have upvoted', () => {

    component.myVote = 1;

    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    const isHighlighted = debugElement.classes.hasOwnProperty('highlighted');

    expect(isHighlighted).toBeTruthy();
  });

});
