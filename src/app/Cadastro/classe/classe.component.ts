import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Classe } from './models/classe';
import { ClasseService } from './classe.service';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

classe: Classe;
classes: Classe[];
edit: boolean;
dataSource: any;
displayedColumns: string[] = ['actionsColumn','codigo', 'nome', 'habilidade'];

 paginator: MatPaginator;
 sort: MatSort;

  constructor(private service:ClasseService) { }

  ngOnInit() {
    this.classe = new Classe();
    this.classes = new Array<Classe>();
    this.listAll();
  }

  listAll(){
    console.log(this.classes);
    this.service.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
        console.log(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(classes: any){
    this.dataSource = new MatTableDataSource<Classe>(classes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  save(){
    this.service.save(this.classe).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.classe = new Classe();
  }

  update(){
    this.service.update(this.classe).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.classe = new Classe();
      }        
    }, error => {
      console.log(error);
    });
  }

  excluir(localId: number){
    this.service.remove(localId).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  markEdit(local: any){
    this.classe = local;
    this.edit = true;
  }

}
