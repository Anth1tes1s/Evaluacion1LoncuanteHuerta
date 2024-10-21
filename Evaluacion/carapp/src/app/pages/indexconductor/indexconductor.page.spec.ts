import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexconductorPage } from './indexconductor.page';

describe('IndexconductorPage', () => {
  let component: IndexconductorPage;
  let fixture: ComponentFixture<IndexconductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
