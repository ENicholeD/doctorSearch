import { DoctorSearch } from './doctors.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'bootstrap';

$(document).ready(function(){
  $('.search').submit(function(event){
    let name = $("#doctorName").val();
    let issue = $("#medicalProblem").val();
    event.preventDefault();
    $("#medicalProblem").val('');
    $('#doctorName').val('');
    console.log(name);
    console.log(issue);

    let newSearch = new DoctorSearch();
    let promise = newSearch.searchingData(name,issue);
  });
});
