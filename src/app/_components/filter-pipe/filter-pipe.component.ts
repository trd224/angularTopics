import { Component, OnInit } from '@angular/core';
import { FilterPipeServiceService } from 'src/app/_services/filter-pipe-service.service';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.scss']
})
export class FilterPipeComponent implements OnInit {

  filterString:any
    list:any
    constructor(
      private filterPipeServiceService: FilterPipeServiceService
    ){}

    ngOnInit(): void {
        this.list = this.filterPipeServiceService.list
    }
}
