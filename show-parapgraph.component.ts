import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-parapgraph',
  templateUrl: './show-parapgraph.component.html',
  styleUrls: ['./show-parapgraph.component.css']
})
export class ShowParapgraphComponent implements OnInit {
  isShow=true;
  constructor() { }

  ngOnInit(): void {
  }
showHide(){
  this.isShow = !this.isShow ;
}
}
