import { Directive, ElementRef, Input , OnInit } from '@angular/core';
import { ApiService } from './ApiService';

// Directive decorator
@Directive({ selector: '[count]' })
// Directive class
export class SetCounter implements OnInit {
    @Input() mycount: string;
    constructor(el: ElementRef, private registerapi: ApiService) {
     // Use renderer to render the element with styles
     //  renderer.setElementStyle(el.nativeElement, 'display', 'none');
   
    }

    ngOnInit() {
        this.registerapi.SetCount(this.mycount);
        console.log(this.mycount)

    }
}