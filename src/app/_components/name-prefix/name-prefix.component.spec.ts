import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePrefixComponent } from './name-prefix.component';

describe('NamePrefixComponent', () => {
  let component: NamePrefixComponent;
  let fixture: ComponentFixture<NamePrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamePrefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamePrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
