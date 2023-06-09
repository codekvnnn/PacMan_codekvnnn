var world = [
    [2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,2,2,2,2,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,1,1,2,2,2,1,1,2],
    [2,1,1,1,1,2,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2],
];

function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            if(world[i][j] == 0) 
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    console.log(output);
    document.getElementById('world').innerHTML = output; 
} 

displayWorld();

document.onkeydown = function(e){
    if(e.keycode == 37){
        document.getElementById('pacman').style.top = 50+"px"
    }
    console.log(e.keycode);
}
