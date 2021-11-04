import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicStringLibComponent } from './magic-string-lib.component';

describe('MagicStringLibComponent', () => {
  let component: MagicStringLibComponent;
  let fixture: ComponentFixture<MagicStringLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicStringLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicStringLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
