export class DoctorSearcher{
  searchInfo(name, issue){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }
}
