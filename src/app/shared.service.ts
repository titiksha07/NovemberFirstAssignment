import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public selectionCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}
