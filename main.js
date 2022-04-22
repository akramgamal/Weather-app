let days = [];
let loc = [];
let finalResponse;
async function weather(country) {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76c467018554490c99f130314212109&q=${country}&days=3`);
    finalResponse = await response.json();
    days = finalResponse.forecast.forecastday;
    loc = finalResponse.location;
    display();

}
function day(dayy) {
    if (dayy == 0) {
        return "Sunday";
    } else if (dayy == 1) {
        return "Monday";
    } else if (dayy == 2) {
        return "Tuesday";
    } else if (dayy == 3) {
        return "Wednesday";
    } else if (dayy == 4) {
        return "Thursday";
    } else if (dayy == 5) {
        return "Friday";
    } else if (dayy == 6) {
        return "Saterday";
    }
}
function month() {
    let d = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[d.getMonth()];
}
function display() {
    let cartoona = ``;
    let d = new Date();
    let dayy = d.getDay();
    let d1 = day(dayy);
    let m = month();
    let dayNumber=loc.localtime;
    dayNumber=dayNumber.slice(8,10);
    cartoona += `<div class="col-md-4 p-0">
        <div class="day d-flex justify-content-md-between text-white ps-3">
            <p>${d1}</p>
            <p>${dayNumber} ${m}</p>
        </div>
        <div class="weather ps-3">
            <h6>${loc.name}</h6>
            <div class="d-flex justify-content-md-between">
                <h2>${finalResponse.current.temp_c}&#176c</h2>
                <img src="https:${finalResponse.current.condition.icon}" class="mt-5">
            </div>
            <p class="cond">${finalResponse.current.condition.text}</p>
            <div class="pb-4">
                <i class="fas fa-umbrella"></i>
                <span>${finalResponse.current.humidity}%</span>
                <i class="fas fa-wind ms-3"></i>
                <span>${finalResponse.current.wind_kph}km/h</span>
                <i class="far fa-compass ms-3"></i>
                <span>${finalResponse.current.wind_dir}</span>
            </div>
        </div>
    </div>`;
    dayy = (dayy + 1) % 6;
    let d2 = day(dayy);
    cartoona += `<div class="col-md-4 p-0">
    <div class="day-sp d-flex justify-content-md-center text-white">
        <p>${d2}</p>
    </div>
    <div class="weather-sp d-flex flex-column justify-content-md-center align-items-center py-3">
        <img src="https:${days[1].day.condition.icon}" class="mt-5">
        <h3>${days[1].day.mintemp_c}&#176c</h3>
        <h5>${days[1].day.avgtemp_c}&#176</h5>
        <p class="cond">${days[1].day.condition.text}</p>
    </div>
</div>`
    dayy = (dayy + 1) % 6;
    let d3 = day(dayy);
    cartoona += `<div class="col-md-4 p-0">
  <div class="day d-flex justify-content-md-center text-white">
      <p>${d3}</p>
  </div>
  <div class="weather d-flex flex-column justify-content-md-center align-items-center py-3">
      <img src="https:${days[2].day.condition.icon}" class="mt-5">
      <h3>${days[2].day.mintemp_c}&#176c</h3>
      <h5>${days[2].day.avgtemp_c}&#176</h5>
      <p class="cond">${days[2].day.condition.text}</p>
  </div>
</div>
`
    document.getElementById("content").innerHTML = cartoona;
}
weather("cairo");
let search=document.getElementById("search");
search.addEventListener('keyup',function(){
  let x=search.value;
  weather(x);
})
let mainBtn=document.getElementById("mainBtn");
search.addEventListener('click',function(){
  let x=search.value;
  weather(x);
})