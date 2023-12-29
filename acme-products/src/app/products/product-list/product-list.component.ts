import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarComponent } from "../../shared/star/star.component";

@Component({
    selector: 'sv-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [StarComponent]
})
export class ProductListComponent {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

}
