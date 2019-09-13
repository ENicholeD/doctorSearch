import { DoctorSearch } from './doctors.js';

(document).ready(function(){
  ('.search').click(function(event){
    event.preventDefault();
    let issue = $("#medicalProblem").val();
    let name = $("#doctorName").val();
    $("#medicalProblem").val("");
    $('#doctorName').val("");

    let newSearch = new DoctorSearch();
    let userSearch = newSearch.searchingData(name, issue);
  });
});
