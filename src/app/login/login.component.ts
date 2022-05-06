import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EncDecService } from '../enc-dec.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[EncDecService]
})

export class LoginComponent implements OnInit {
  
  public modalRef: BsModalRef | undefined;

  constructor(private encdecServ: EncDecService, private modalService: BsModalService) { }
  

  ngOnInit(): void {
    var getData = JSON.parse(localStorage.getItem('Credentials') || {});
    this.onGetPost(getData);
    console.log(getData);
  }

  onGetPost(getData: { name: string; password: string}){
    getData.password = this.encdecServ.Decrypt(getData.password);
    return getData;
  }

  onCreatePost(postData: { name: string; password: string}){
    
    postData.password = this.encdecServ.Encrypt(postData.password);
    console.log(postData);
    
    localStorage.setItem(
      'Credentials',
      JSON.stringify(postData))
  }

  

  openModel(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );
  }

}
