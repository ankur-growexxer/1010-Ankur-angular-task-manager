import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
// import { Product, products } from 'src/app/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any;

  // productList = products;
  // title = 'Angular 13';
  constructor(
    public readonly auth: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = JSON.parse(response.auth);
    });
  }
}
