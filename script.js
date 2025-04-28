const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open('GET', 'https://api.tomorrow.io/v4/weather/forecast?location=mumbai&apikey=h2rjJTE8IkbCgwBbXOfnewUDlnh2yK8c');
xhr.send(data);

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let res = this.responseText
        let JSONres = JSON.parse(res)
        let finalRes = JSONres
        console.log(finalRes)
        let lastRes = JSONres.timelines.daily 
        let temp = Math.floor(lastRes[1].values.temperatureAvg)
        let celsius = document.getElementById("celsius").innerText = (`${temp}°`)
        if (temp > 23 && temp < 31){
            let weather = document.getElementById("weather").innerText = "Sunny"
        }
        else if (temp > 0 && temp < 18){
            let weather = document.getElementById("weather").innerText = "Cold"
        }
        else if (temp < 0){
            let weather = document.getElementById("weather").innerText = "Very Cold"
        }
        else if (temp > 30 && temp < 45){
            let weather = document.getElementById("weather").innerText = "Very Hot"
        }
	}
});