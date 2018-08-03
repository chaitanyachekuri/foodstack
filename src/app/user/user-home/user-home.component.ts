import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../Services/storage.service";
import {dbService} from "../../Services/db.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private storage: StorageService, private db: dbService) { }

  ngOnInit() {
      console.log(this.storage.getLocalUserDetails());
      this.db.getRoles();
  }

}
