import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string;
  public hideUpdate: boolean;
  public message: string;
  constructor() {
    this.title = "Task CRUD";
    this.hideUpdate = true;
    this.message ='';
  }
  employees = [
    { name: "Diana", position: "Product owner", email: "dcarmonap@jobs.com" },
    { name: "Bills", position: "scrum master", email: "bstriker@jobs.com" },
    { name: "Pedro", position: "programmer", email: "pzabaletad@jobs.com" }
  ];

  model: any = {};

  model2: any = {};

  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.message = "Agregado";
  }

  deleteEmployee(i): void {
    var answer = confirm("Seguro que quieres eliminar el registro?");
    if (answer) {
      this.employees.splice(i, 1);
      this.message = "Borrado";
    }
  }
  myValue;
  editEmployee(i) {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.message = "Actualizado";
      }
    }
    this.hideUpdate = true;
  }
  closeAlert() {
    this.message = "";
  }
  cancelEdit(){
    this.hideUpdate = true;
}
}
