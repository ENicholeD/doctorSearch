import { DoctorSearch } from './doctors.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'bootstrap';

$(document).ready(function(){
  $('.search').submit(function(event){
    let issue = $("#medicalProblem").val();
    let name = $("#doctorName").val();
    event.preventDefault();
    $("#medicalProblem").val("");
    $('#doctorName').val("");
    console.log(name);
    console.log(issue);

    let newSearch = new DoctorSearch();
    let userSearch = newSearch.searchingData(name, issue);
  });
});
