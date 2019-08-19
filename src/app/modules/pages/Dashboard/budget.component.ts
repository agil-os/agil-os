import { Component, OnInit } from '@angular/core';

export interface Transaction {
  expense: string;
  average: number;
  low: number;
  high: number;
}

@Component({
  // moduleId: module.id,

  selector: 'Home',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.css'],
})
export class DashboardView implements OnInit {

  constructor() {}

  ngOnInit() {}
}