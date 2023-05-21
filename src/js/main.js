// const searchButton = document.getElementById('button');
// searchButton.addEventListener('click', search);

// function search() {
//     const cityName = document.getElementById('daxilet').ariaValueMax;

//     //call api
//     const APIKey = '37a5ee36624c7fa55295f2bdd4be73d1';
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}';

//     fetch(url)
//         .then(response => response.json())
//         .then(
//             result => {
//                 console.log(result);

//                 const city = result.name;
//                 const country = result.sys.country;
//                 const { description, id } = result.weather[0];
//                 const { temp, humidity } = result.main;
//                 const windSpeed = result.wind.speed;


//                 document.getElementById('temperature').innerHTML = temp;
//                 document.getElementById('description').innerHTML = description;
//                 document.getElementById('temperature').innerHTML = temp;
//                 document.getElementById('temperature').innerHTML = temp;
//                 document.getElementById('temperature').innerHTML = temp;
//                 document.getElementById('temperature').innerHTML = temp;
//                 document.getElementById('temperature').innerHTML = temp;

//                 const
//                     container = document.getElementById('contain'),
//                     search = document.getElementById('button'),
//                     weatherbox = document.getElementById('weatherbox'),
//                     weatherDetails = document.getElementById('weatherdetal'),
//                     notFound = document.getElementById('notfound');



//                 if (city === '')
//                     return;

//                 fetch(url)
//                     .then(Response => Response.json())
//                     .then(json => {
//                         if (json.code === '404') {
//                             container.style.height = '400px';
//                             weatherbox.style.display = 'none';
//                             weatherDetails.style.display = 'none';
//                             notFound.style.display = 'block';
//                             notFound.classList.add('fadeIn');
//                             return;
//                         }

//                         notFound.style.display = 'none';
//                         notFound.classList.remove('fadeIn');


//                         const image = document.querySelector('.weatherbox img');
//                         const temperature = document.querySelector('.weatherbox .temperature');
//                         const description = document.querySelector('.weatherbox .description');
//                         const humidity = document.querySelector('.weather-details .humidity span');
//                         const wind = document.querySelector('.weather-details .wind span');


//                         switch (json.weather[0].main) {
//                             case 'Clear':
//                                 image.src = 'img/clear.jpg';
//                                 break;

//                             case 'Rain':
//                                 image.src = 'img/rainy.jpg';
//                                 break;

//                             case 'Snow':
//                                 image.src = 'img/snowy.jpg';
//                                 break;

//                             case 'Clouds':
//                                 image.src = 'img/Cloudly.jpg';
//                                 break;

//                             case 'Haze':
//                                 image.src = 'img/haze.jpg';
//                                 break;

//                             default:
//                                 image.src = '';
//                         }

//                         temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//                         description.innerHTML = `${json.weather[0].description}`;
//                         humidity.innerHTML = `${json.main.humidity}%`;
//                         wind.innerHTML = `${json.main.wind}Km/S`

//                         weatherbox.style.display = '';
//                         weatherDetails.style.display = '';
//                         weatherbox.classList.add('fadeIn');
//                         weatherDetails.classList.add('fadeIn');
//                         container.style.height = '590px';



//                     });
//             });
// }





//! Yeniden toparladim


const searchButton = document.getElementById('button');
const input = document.getElementById('daxilet');
searchButton.addEventListener('click', search);
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        search();
    }
})

function search() {
    const cityName = document.getElementById('daxilet').value;

    //call api
    const APIKey = '37a5ee36624c7fa55295f2bdd4be73d1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;





    fetch(url)
        .then(response => response.json())
        .then(
            result => {
                const
                    container = document.getElementById('contain'),
                    search = document.getElementById('button'),
                    weatherbox = document.getElementById('weatherbox'),
                    weatherDetails = document.getElementById('weatherdetal'),
                    notFound = document.getElementById('notfound');

                if (Number(result.cod) > 200) {
                    container.style.height = '400px';
                    weatherbox.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    notFound.style.display = 'block';
                    notFound.classList.add('fadeIn');
                    return;
                }

                console.log(result);

                const city = result.name;
                const country = result.sys.country;
                const { description, id } = result.weather[0];
                const { temp, humidity } = result.main;
                const windSpeed = result.wind.speed;


                document.getElementById('temperature').innerHTML = temp;
                document.getElementById('description').innerHTML = description;

                


                if (city === '')
                    return;

                fetch(url)
                    .then(Response => Response.json())
                    .then(json => {

                        console.log(json.cod);
                        notFound.style.display = 'none';
                        notFound.classList.remove('fadeIn');

                        const image = document.querySelector('#weatherbox img');
                        const temperature = document.querySelector('#temperature');
                        const description = document.querySelector('#description');
                        const humidity = document.querySelector('.humidity span');
                        const wind = document.querySelector('#wind');


                        // image.src = `./src/img/${json.weather[0].main}.jpg`;
                        switch (json.weather[0].main) {
                            case 'Sunny':
                                image.src = './src/img/Sunny.jpg';
                                break;
                            
                            case 'Clear':
                                image.src = './src/img/Clear.png';
                                break;

                            case 'Rain':
                                image.src = './src/img/Rain.jpg';
                                break;

                            case 'Snow':
                                image.src = './src/img/Snow.jpg';
                                break;

                            case 'Clouds':
                                image.src = './src/img/Clouds.jpg';
                                break;

                            case 'Haze':
                                image.src = './src/img/Haze.jpg';
                                break;

                            default:
                                image.src = '';
                        }

                        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                        description.innerHTML = `${json.weather[0].description}`;
                        humidity.innerHTML = `${json.main.humidity}%`;
                        wind.innerHTML = `${json.wind.speed}Km/S`

                        weatherbox.style.display = '';
                        weatherDetails.style.display = '';
                        weatherbox.classList.add('fadeIn');
                        weatherDetails.classList.add('fadeIn');
                        container.style.height = '590px';



                    });
            });
}


