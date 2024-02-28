import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService],
})
export class ProductDetailsComponent implements OnInit {
  x: boolean = true;
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {}

  images: any[] = [
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'The product Added to cart',
    });
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'The product Not added ',
    });
  }
  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }
}
