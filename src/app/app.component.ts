import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoserviceService } from './logoservice.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'villagelogos';
  villages: any[] = [];
  constructor(private service: LogoserviceService) { }
  ngOnInit(): void {
    this.getvillage();
    this.getsettings();
  }
  getvillage(): void {
    this.service.getVillage().subscribe({
      next: (res: any) => {
        this.villages = res?.data?.data ?? [];
        // this.villages = allvillages.slice(0, 4); 
      },
    });
  }
  websites: any[] = [];
  websiteLink: string | null = null;

  getsettings(): void {
    this.service.getVillagesettings().subscribe({
      next: (res: any) => {
        this.websites = res?.data?.data ?? [];

        // find website key
        const websiteObj = this.websites.find(
          (item: any) => item.key === 'website'
        );

        this.websiteLink = websiteObj?.value || null;

        console.log(this.websiteLink, 'website link');
      }
    });

  }
}
