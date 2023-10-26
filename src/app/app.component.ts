import { Component } from '@angular/core';
import { Country } from './country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PARCIAL - PARTE 2';

  countries: Country[] = [
    new Country('Perú', 'Perú'),
    new Country('España', 'España'),
    new Country('Francia', 'Francia'),
    new Country('China', 'China'),
    new Country('Australia', 'Australia'),
    new Country('Estados Unidos', 'Estados Unidos'),
    new Country('México', 'México'),
    new Country('Canadá', 'Canadá'),
    new Country('Alemania', 'Alemania'),
    new Country('Italia', 'Italia'),
  ];

  getStyleCountry(country: string) {
    console.log(country);
    if (country == 'Perú') {
      return {
        color: '#ff0000',
        'background-color': '#ffffff',
      };
    } else if (country == 'España') {
      return {
        color: '#ffff00',
        'background-color': '#ff0000',
      };
    } else {
      return {
        color: 'cornflowerblue',
        'background-color': 'darkslategrey',
      };
    }
  }
}
