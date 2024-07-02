import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DropdownService } from 'src/app/_services/dropdown.service';

@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.scss']
})
export class DependentDropdownComponent implements OnInit {

  state: any;
  district: any
  constructor(
    private dropdownService: DropdownService
  ){}

  ngOnInit(): void {
      //console.log(this.dropdownService.state);
      this.state = this.dropdownService.state;
      console.log(this.state[0].district)
      this.district = this.state[0].district;
      
  }

  getDistrict(e:any){
    //console.log(e.target.value);
    let v = e.target.value;
    this.district = this.dropdownService.getDistrict(v)?.district;
    console.log(this.district);
  }
}
