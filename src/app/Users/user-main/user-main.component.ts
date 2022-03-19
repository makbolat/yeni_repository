import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../_services/token-storage.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
})
export class UserMainComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {}

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
