import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-dialogpagamento',
  templateUrl: './dialogpagamento.component.html',
  styleUrl: './dialogpagamento.component.css'
})
export class DialogpagamentoComponent {
  selectedPaymentMethod: string = '';

  constructor(public dialogRef: MatDialogRef<DialogpagamentoComponent>) {}

  confirmPayment(): void {
    this.dialogRef.close(this.selectedPaymentMethod);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
