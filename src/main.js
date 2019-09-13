import { DoctorSearch } from './doctors.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('.search').submit(function(event){
    event.preventDefault();
    const name = $("#doctorName").val();
    const issue = $("#medicalProblem").val();
    $("#medicalProblem").val('');
    $('#doctorName').val('');
    console.log(name);
    console.log(issue);

    let newSearch = new DoctorSearch();
    let promise = newSearch.searchingData(name, issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(newSearch);
      if (body.data.length === 0){
        $("#list").text("search results: none, please try again");
      }
      for (let i =0; i<body.data.length; i++) {
        $("#result").append("${body.data[i].profile.first_name} ${body.data[i].profile.last_name}");
      }
    });
  });
});
