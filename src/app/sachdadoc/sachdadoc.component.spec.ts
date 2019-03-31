import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SachdadocComponent } from './sachdadoc.component';

describe('SachdadocComponent', () => {
  let component: SachdadocComponent;
  let fixture: ComponentFixture<SachdadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachdadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachdadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
