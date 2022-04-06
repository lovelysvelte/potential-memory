import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {GalleryService} from '../gallery.service';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, fromEvent, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit,OnInit {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 10;
  data : any
  constructor(private service : GalleryService,private router : Router) { }
 
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
   
    this.getData()
    
  
  }
   getData() {
    this.service.getdataa(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.obsArray.next(data);
    });
 
    
    const content = document.querySelector('.items');
    const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));
   console.log(scroll$)
    scroll$.subscribe((scrollPos) => {
      let limit = content!.scrollHeight - content!.clientHeight;
      if (scrollPos === limit) {
        this.currentPage += this.pageSize;
        forkJoin([this.items$.pipe(take(1)), this.service.getdataa(this.currentPage, this.pageSize)]).subscribe((data: Array<Array<any>>) => {
          const newArr = [...data[0], ...data[1]];
          this.obsArray.next(newArr);
        });
      }
    });
  }

  clk_logout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
