let container_width = document.getElementById("youtube").scrollWidth;
let new_width = container_width/16*9;

console.log(container_width);
console.log(new_width);

$("#youtube").attr("height",new_width);