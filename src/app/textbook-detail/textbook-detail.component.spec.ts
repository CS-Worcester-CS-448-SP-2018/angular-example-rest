import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookDetailComponent } from './textbook-detail.component';

describe('TextbookComponent', () => {
  let component: TextbookDetailComponent;
  let fixture: ComponentFixture<TextbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
