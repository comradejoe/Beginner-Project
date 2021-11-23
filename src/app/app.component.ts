import { Component } from "@angular/core";
import { StudentsService } from "./students.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public averageAge: any = [];
  public class1: any = [];
  public class2: any = [];
  public class3: any = [];
  public Spain: any = [];
  public India: any = [];
  public cuba: any = [];
  public employee: any = [];
  constructor(private _studentsService: StudentsService) {}
  title = "sampleProject";
  ngOnInit() {
    this._studentsService.getEmployess().subscribe((data) => {
      let sum: number = 0;
      data.forEach((a) => (sum += a.age));

      this.averageAge = sum / 30;
      console.log(this.averageAge);

      this.employee = data;

      this.employee.map((item) => {
        if (item.id == 1) {
          this.class1.push(item);
        }
        if (item.id == 2) {
          this.class2.push(item);
        }
        if (item.id == 3) {
          this.class3.push(item);
        }
        if (item.country == "Cuba") {
          this.cuba.push(item);
          // (this.cuba);
        }
        if (item.country == "India") {
          this.India.push(item);
        }
        if (item.country == "Spain") {
          this.Spain.push(item);
        }
      });
    });
  }
}
