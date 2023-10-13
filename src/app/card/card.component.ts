import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() Type:String="";
@Input() Rate:String="";
@Input() Qty:String="";
@Input()Data_Storage:String="";
@Input()PublicProjects:String="";
@Input()Com_Access:String="";
@Input()Private_Pr:String="";
@Input()Ph_Supplier:String="";
@Input()Domains:String="";
@Input()Status:String="";
}
