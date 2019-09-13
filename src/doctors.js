import 'jquery';
import './styles.css';
import 'bootstrap';

export class DoctorSearch{
  searchingData(){
        let request = new XMLHttpRequest();
        const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}';
  }
}
