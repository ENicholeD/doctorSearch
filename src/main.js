import { DoctorSearch } from './../js/doctors.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('.search').submit(function(event){
    const name = $("#doctorName").val();
    const issue = $("#medicalProblem").val();
    event.preventDefault();
    $("#medicalProblem").val('');
    $('#doctorName').val('');
    console.log(name);
    console.log(issue);

    let newSearch = new DoctorSearch();
    let promise = newSearch.searchingData(name, issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(newSearch);
      newSearch.data.forEach(function(doctor){
        $('#doctor').text(`${body.data[i].profile.bio}`);
      });
      function(error){
        $("#doctor").text("oops! there was an error");
      }
    });
  });
});
