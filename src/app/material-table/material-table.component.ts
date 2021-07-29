import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../model/invoice';
import { invoices } from '../../dummy-data/data';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../shared.service';

const ELEMENT_DATA: Invoice[] = invoices.map((entry: Invoice) => {
  let status = '';
  let bkStatus1 = false;
  let bkStatus2 = true;
  let sum = 0;
  for (const pay of entry.Payments) {
    if (pay.BookkeepingStatus === 1) {
      bkStatus1 = true;
      bkStatus2 = false;
    }
    sum += pay.Amount;
 }
  console.log(bkStatus1);

  if ((entry.Amount === entry.EntryAmount) && entry.Payments[0]?.BookkeepingStatus === 2) {
    status = 'Rejected';
  } else if (Object.keys(entry.Errors).length) {
    status = 'Error';
  } else if ((entry.Amount !== entry.EntryAmount) && entry.Amount !== 0 && !bkStatus2) {
    status = 'Partial';
  } else if (entry.Amount === 0 && sum === entry.EntryAmount) {
    status = 'Registered';
  } else if (bkStatus1) {
    status = 'PartialPend';
  } else if (entry.Amount === entry.EntryAmount && !entry.Payments.length) {
    status = 'New';
  }

  return {
    ...entry,
    PastDue: (new Date(entry.PaymentDate)).getTime() > (new Date(entry.DueDate).getTime()),
    status
  };
});

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'dueDate', 'supplierName', 'invoice', 'voucherNo', 'amount', 'status'];
  dataSource = new MatTableDataSource<Invoice>(ELEMENT_DATA);
  selection = new SelectionModel<Invoice>(true, []);
  dueDatePast = false;

  constructor(public shared: SharedService) { }

  ngOnInit(): void {

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleSelection(row) {
    this.selection.toggle(row);
    this.shared.selectionCount$.next(this.selection.selected.length);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }
}


