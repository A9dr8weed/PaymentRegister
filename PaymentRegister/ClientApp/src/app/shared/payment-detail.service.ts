import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = 'https://localhost:5001/api/PaymentDetail';
  list: PaymentDetail[];

  constructor(private _http: HttpClient) { }

  postPaymentDetail() {
    return this._http.post(this.baseURL, this.formData);
  }

  refreshList() {
    this._http.get(this.baseURL).toPromise().then(res => this.list = res as PaymentDetail[]);
  }

  putPaymentDetail() {
    return this._http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this._http.delete(`${this.baseURL}/${id}`);
  }
}
