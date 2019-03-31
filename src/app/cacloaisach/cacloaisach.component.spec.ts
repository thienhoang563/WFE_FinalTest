import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacloaisachComponent } from './cacloaisach.component';

describe('CacloaisachComponent', () => {
  let component: CacloaisachComponent;
  let fixture: ComponentFixture<CacloaisachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacloaisachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacloaisachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
