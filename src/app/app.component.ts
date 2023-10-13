import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic-pricing-table';
  CardContent=[
    {
      Type:"Free",
      Rate:"$0",
      Qty:"Single User",
      Data_Storage:"5GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Com_Access:"Community Access",
      Private_Pr:"Unlimited Private Projects",
      Ph_Supplier:"Dedicated Phone Support",
      Domains:"Free Subdomain",
      Status:"Monthly Status Report"
    },
    {
      Type:"Plus",
      Rate:"$9",
      Qty:"5 Users",
      Data_Storage:"50GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Com_Access:"Community Access",
      Private_Pr:"Unlimited Private Projects",
      Ph_Supplier:"Dedicated Phone Support",
      Domains:"Free Subdomain",
      Status:"Monthly Status Report"
    },
    {
      Type:"Pro",
      Rate:"$49",
      Qty:"Unlimited Users",
      Data_Storage:"150GB Storage",
      PublicProjects:"Unlimited Public Projects",
      Com_Access:"Community Access",
      Private_Pr:"Unlimited Private Projects",
      Ph_Supplier:"Dedicated Phone Support",
      Domains:"Unlimited Free Subdomain",
      Status:"Monthly Status Report"
    }
  ];
}