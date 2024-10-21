import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexusuariosPage } from './indexusuarios.page';

describe('IndexusuariosPage', () => {
  let component: IndexusuariosPage;
  let fixture: ComponentFixture<IndexusuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
