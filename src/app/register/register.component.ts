import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input('dataFromParent') public modalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
