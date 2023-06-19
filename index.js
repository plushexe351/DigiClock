let a, date, time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    a = new Date();
    time = a.toLocaleTimeString();
    console.log(time);
    date = weekday[a.getDay()];
    console.log(date);
    function concat(e) {
        if (e < 10) {
            return e = '0' + e;
        }
        else return e;
    }

    document.getElementById('am-pm').innerHTML = a.getHours() > 12 ? "PM" : "AM";
    // document.getElementById('time').innerHTML = time;
    document.getElementById('hr').innerHTML = a.getHours() > 12 ? concat(a.getHours() - 12) : a.getHours();
    document.getElementById('min').innerHTML = concat(a.getMinutes());
    document.getElementById('sec').innerHTML = concat(a.getSeconds());
    document.getElementById('date').innerHTML = date;
}, 1000);

