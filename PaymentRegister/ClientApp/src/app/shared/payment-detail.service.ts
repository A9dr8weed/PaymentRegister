import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = 'https://localhost:5001/api/PaymentDetail';

  constructor() { }
}
