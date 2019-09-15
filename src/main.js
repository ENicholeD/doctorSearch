import { DoctorSearcher } from './doctors.js';
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

    let newSearch = new DoctorSearcher();
    let body = newSearch.searchInfo(name, issue);

    $("#list").show();
    body.then(function(response) {
      let promise = JSON.parse(response);
      if (promise.data.length === 0){
        $("#list").text("search results: none, please try again");
      }
      for (let i =0; i<promise.data.length; i++) {
        $("#list").append("<h3>" + promise.data[i].profile.first_name + " " + promise.data[i].profile.last_name + " " + promise.data[i].profile.title + "</h3>" + "<br>" + "<img src='" + promise.data[i].profile.image_url + "'>" + "<br>" + promise.data[i].practices[i].visit_address.street + "<br>" + promise.data[i].practices[i].visit_address.city + ", " +promise.data[i].practices[i].visit_address.state + " " + promise.data[i].practices[i].visit_address.zip + "<br>" + "<br>" +  promise.data[i].profile.bio + "<br>" + "<br>");
      }
    });
  });
});
