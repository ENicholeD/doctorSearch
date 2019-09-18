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
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $("#list").text("search results: none, please try again");
      }
      body.data.forEach(function(doctor){
        let firstName = doctor.profile.first_name;
        let lastName = doctor.profile.last_name;
        let title = doctor.profile.title;
        let photo = doctor.profile.image_url;
        let street = doctor.practices[0].visit_address.street;
        let city = doctor.practices[0].visit_address.city;
        let state = doctor.practices[0].visit_address.state;
        let zip = doctor.practices[0].visit_address.zip;
        let bio = doctor.profile.bio;
        let phone = doctor.practices[0].phones[0].number;
        $("#list").append(`<h3>${firstName} ${lastName} ${title}</h3><br><img src='${photo}'><p>${street}</p><p>${city}, ${state} ${zip}</p><p>Phone number: ${phone}</p><br><p>${bio}</p><br><br>`);
      });
    });
  });
});
