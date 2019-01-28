function year(){
    var year = new Date();
    var yearNow = document.querySelector('.year').innerHTML = year.getFullYear();
    return yearNow;

}
console.log(year());