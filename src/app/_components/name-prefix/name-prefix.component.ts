import { Component, OnInit } from '@angular/core';
import { NamePrefixService } from 'src/app/_services/name-prefix.service';

@Component({
  selector: 'app-name-prefix',
  templateUrl: './name-prefix.component.html',
  styleUrls: ['./name-prefix.component.scss']
})
export class NamePrefixComponent implements OnInit {

  names: any;
  constructor(
    private namePrefixService: NamePrefixService
  ){

  }


  ngOnInit(): void {
      this.names = this.namePrefixService.names;
  }

}
