import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { phone } from 'src/app/services/domain/settings/phone/phone.model';
import { Productervice } from 'src/app/services/domain/settings/phone/product.service';
import { CreatephoneComponent } from '../create-phones/create-phone.component';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListphoneComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: Productervice, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: phone[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getEmail();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: phone): void {

    this.service.deletephone(product._id).subscribe(val => {
      console.log(val);
      alert('Sikeres törlés!');
      this.getAllProducts();
    });

  }

  editProduct(phone: phone): void {
    localStorage.setItem('brand', phone.brand);
    localStorage.setItem('type', phone.type);
    localStorage.setItem('battery', phone.battery);
    localStorage.setItem('price', phone.price.toString());
    localStorage.setItem('quantity', phone.quantity.toString());
    this.router.navigate(['settings/phone', 'edit', phone._id]);
  }

  getAllProducts(): void {
    this.service.getphones().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['brand', 'type', 'battery', 'date', 'price', 'quantity', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreatephoneComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
