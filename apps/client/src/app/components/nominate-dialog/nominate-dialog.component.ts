import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { Colleague } from '@app/types/colleague';
import { Nomination } from '@app/types/nomination';

@Component({
  standalone: true,
  imports: [MatDialogContent, ReactiveFormsModule],
  selector: 'nominate-dialog',
  templateUrl: './nominate-dialog.component.html',
  styleUrls: ['./nominate-dialog.component.scss'],
})
export class NominateDialogComponent {
  valuesForm: FormGroup;
  dialogRef: MatDialogRef<NominateDialogComponent, Nomination>;

  public colleague!: Colleague;
  public companyValues = [
    {
      id: 'BeTheExpert',
      title: 'Be The Expert',
    },
    {
      id: 'FindASolution',
      title: 'Find A Solution',
    },
    {
      id: 'DoTheRightThing',
      title: 'Do The Right Thing',
    },
    {
      id: 'SuccessThroughPartnership',
      title: 'Success Through Partnership',
    },
    {
      id: 'EveryPebbleMatters',
      title: 'Every Pebble Matters',
    },
  ];

  constructor(
    dialogRef: MatDialogRef<NominateDialogComponent>,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { colleague: Colleague }
  ) {
    this.dialogRef = dialogRef;
    this.colleague = data.colleague;
    this.valuesForm = fb.group({
      BeTheExpert: false,
      FindASolution: false,
      DoTheRightThing: false,
      SuccessThroughPartnership: false,
      EveryPebbleMatters: false,
      Reason: '',
    });
  }

  submit(): void {
    this.dialogRef.close(this.valuesForm.value);
  }
}
