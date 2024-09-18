import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpagamentoComponent } from './dialogpagamento.component';

describe('DialogpagamentoComponent', () => {
  let component: DialogpagamentoComponent;
  let fixture: ComponentFixture<DialogpagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogpagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogpagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
