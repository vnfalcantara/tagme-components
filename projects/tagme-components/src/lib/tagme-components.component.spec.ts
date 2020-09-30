import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagmeComponentsComponent } from './tagme-components.component';

describe('TagmeComponentsComponent', () => {
  let component: TagmeComponentsComponent;
  let fixture: ComponentFixture<TagmeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagmeComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagmeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
