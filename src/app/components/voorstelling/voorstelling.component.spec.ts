import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorstellingComponent } from './voorstelling.component';

describe('VoorstellingComponent', () => {
  let component: VoorstellingComponent;
  let fixture: ComponentFixture<VoorstellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorstellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorstellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
