function catGenerator(){
    var image = document.createElement('img');
    var pck = document.getElementById('generateImages');
    image.src= "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    pck.appendChild(image);
}