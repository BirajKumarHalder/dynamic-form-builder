import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primaryroute',
  templateUrl: './primaryroute.component.html',
  styleUrls: ['./primaryroute.component.css']
})
export class PrimaryrouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(">>>>")
    this.router.navigate(['primary', { outlets: { primaryChildOutlet: ['child'] } }]);
  }

}
