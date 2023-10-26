import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Empleados';

  employees: Employee[] = [
    new Employee(
      'Vivian',
      'Livock',
      'General Manager',
      11,
      1914,
      'https://robohash.org/doloremvitaecommodi.png?size=100x100&set=set1'
    ),
    new Employee(
      'Caro',
      'Fri',
      'Developer I',
      10,
      8402,
      'https://robohash.org/suntodioqui.png?size=100x100&set=set1'
    ),
    new Employee(
      'Jeth',
      "O'Hara",
      'Health Coach IV',
      43,
      1427,
      'https://robohash.org/laboriosamremdistinctio.png?size=100x100&set=set1'
    ),
    new Employee(
      'Hughie',
      'Schanke',
      'Business Systems Development Analyst',
      32,
      6490,
      'https://robohash.org/voluptasnemoquibusdam.png?size=100x100&set=set1'
    ),
    new Employee(
      'Durant',
      'Link',
      'Senior Quality Engineer',
      14,
      8272,
      'https://robohash.org/voluptatessitveniam.png?size=100x100&set=set1'
    ),
    new Employee(
      'Fraze',
      'Gilleon',
      'General Manager',
      63,
      7401,
      'https://robohash.org/quosvoluptasrepellendus.png?size=100x100&set=set1'
    ),
    new Employee(
      'Shaylynn',
      'Le Fleming',
      'Statistician IV',
      18,
      2694,
      'https://robohash.org/quosestdolorem.png?size=100x100&set=set1'
    ),
    new Employee(
      'Giana',
      'Legendre',
      'Accountant II',
      29,
      4297,
      'https://robohash.org/officiadolordistinctio.png?size=100x100&set=set1'
    ),
    new Employee(
      'Frans',
      'Diggle',
      'Administrative Officer',
      41,
      8167,
      'https://robohash.org/etvoluptaslaudantium.png?size=100x100&set=set1'
    ),
    new Employee(
      'Callida',
      'Labdon',
      'Office Assistant II',
      45,
      1190,
      'https://robohash.org/ipsumtemporeautem.png?size=100x100&set=set1'
    ),
  ];

  addEmployee() {
    const newEmployee = new Employee(
      this.inputName,
      this.inputLastName,
      this.inputPosition,
      this.inputAge,
      this.inputSalary,
      this.inputAvatar
    );
    this.employees.push(newEmployee);
  }

  clearForm() {
    this.inputName= '';
    this.inputLastName= '';
    this.inputPosition=  ''
    this.inputAge= 0;
    this.inputSalary= 0;
    this.inputAvatar= '';
  }

  getUserClass(age: number) {
    if (age < 18) {
      return 'menor-edad';
    } else if (age >= 18 && age <= 30) {
      return 'adulto-joven';
    } else {
      return 'adulto';
    }
  }

  inputName: string = '';
  inputLastName: string = '';
  inputPosition: string = '';
  inputAge: number = 0;
  inputSalary: number = 0;
  inputAvatar: string = '';
}
