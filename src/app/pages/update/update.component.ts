import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    client;
    clientId;
    formUpdate={
        name:"",
        address:"",
        contact:""
    }

  constructor(private clientsService:ClientsService,private route:ActivatedRoute) {
      this.route.params.subscribe((params) => {
          this.clientId=params['id'];
      })

      this.clientsService.getClient(this.clientId).subscribe(client=>{

          this.client=client;
          console.log(this.client);

      });
  }

  ngOnInit() {
  }
  updateClient(id){
      this.clientsService
      .updatedClient(this.formUpdate.name,this.formUpdate.address,this.formUpdate.contact,this.clientId)      
  }

}
