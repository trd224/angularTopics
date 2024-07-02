import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/_services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  count = 0;

  constructor(
    private subjectService: SubjectService
  ){

  }

  ngOnInit(): void {
    this.subjectService.cn.subscribe(res => {
      console.log(res);
      this.count = res
    })
  }

  changeCount(){
    this.subjectService.cn.next(this.count + 1);
  }
}
