import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpermatozoaComponent } from './spermatozoa.component';

describe('SpermatozoaComponent', () => {
  let component: SpermatozoaComponent;
  let fixture: ComponentFixture<SpermatozoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpermatozoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpermatozoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
