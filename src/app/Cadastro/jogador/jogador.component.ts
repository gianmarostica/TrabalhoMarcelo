import { Component, OnInit } from '@angular/core';
import { Jogador } from './models/jogador';
import { JogadorService } from './jogador.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Classe } from '../classe/models/classe';
import { ClasseService } from '../classe/classe.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  jogador: Jogador;
  jogadores: Jogador[];
  classes: Classe[];
  edit: boolean;

  dataSource: any;
  displayedColumns: string[] = ['actionsColumn','codigo', 'nome', 'ataque', 'defesa', 'furtividade', 'arma', 'classe'];

 paginator: MatPaginator;
 sort: MatSort;

  constructor(private service:JogadorService, private classeService:ClasseService) { }

  ngOnInit() {
    this.jogador = new Jogador();
    this.jogadores = new Array<Jogador>();
    this.classes = new Array<Classe>();
    this.classeService.findAll().subscribe(subscibe =>{
      this.classes = subscibe;
      console.log(subscibe);
    })
    this.listAll();
    
  }

  listAll(){
    console.log(this.jogadores);
    this.service.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
        console.log(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(classes: any){
    this.dataSource = new MatTableDataSource<Jogador>(classes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  save(){
    this.service.save(this.jogador).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.jogador = new Jogador();
  }

  update(){
    this.service.update(this.jogador).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.jogador = new Jogador();
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
    this.jogador = local;
    this.edit = true;
  }

}
