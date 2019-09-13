export class DoctorSearch{
  searchingData(name, issue){
    let request = new XMLHttpRequest();
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name='+ name +'&query='+ issue +'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9e8a57517279067adb27f63a27c532bc';
    request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
     $('#list').append(`<li>'${response.doctor.profile.bio}'</li>`);
   };
  };
  }
}
