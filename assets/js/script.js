
function fun()
{
        var input = $('#CName').val();
        var loc = input;
        var key = 'f3409a9ee3466d7163f2fb8d2553a669';
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
        var clouds;
        var content="";
        axios.get(url)
        .then(response => {
        const data = response.data;
        console.log(data);
        console.log(data.name); 
        console.log(Math.floor(data.main.temp - 273) + ' C'); 
        const clouds = data.weather[0].main;

        const content = `
                <div class="d-flex ms-3 text-center">
                    <h3 class=" fst-italic">${data.name}</h3>
                    <h3 class=" ms-1 fst-italic text-danger" >${data.sys.country}</h3>
                            
                </div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="card-img-top mt-0" alt="..." style="width: 200px;">
            <h3 class="card-title" style="color: #fa0293;">${Math.floor(data.main.temp - 273)}°C</h3>
            
            <h3 Class="  fs-1">${data.weather[0].main}</h3>
           
            <div class="d-flex justify-content-between mt-4">
                <div class="">
                    <i class="fa fa-thermometer" style="font-size:40px"></i>
                    <p class="m-0 fw-bold text-danger">pressure</p>
                    <p class="fw-bold">${data.main.pressure} Pa</p>
                </div>
                <div class="ms-3">
                <img src="./assets/images/wind.svg" alt="" width="40px">
                    <p class="m-0 fw-bold text-primary"> Wind</p>
                    <p class="fw-bold">${data.wind.speed} km/h</p>
                </div>
                <div class="ms-3">
                <img src="./assets/images/humidity.png" alt="" width="40px">
                    <p class="m-0 fw-bold " style="color:#a752d1"> Humidity</p>
                    <p class="fw-bold">${data.main.humidity} %</p>
                </div>
            </div>`;

        document.getElementById('output').innerHTML = content;
    })
    .catch(err => alert("Please give a valid city name"));
    }
        
