import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComemoreComponent } from './comemore.component';

describe('ComemoreComponent', () => {
  let component: ComemoreComponent;
  let fixture: ComponentFixture<ComemoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComemoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComemoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
