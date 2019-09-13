import { DoctorSearch } from './doctors.js';

(document).ready(function(){
  ('.search').click(function(event){
    event.preventDefault();
    let newSearch = new DoctorSearch();
    let issue = $("#medicalIssue").val();
    let name = $("doctorName").val();

    let request = new XMLHttpRequest();
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}';

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});
