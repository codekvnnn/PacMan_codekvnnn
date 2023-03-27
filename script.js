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
        output += "<\ndiv class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<\n\tdiv class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<\n\tdiv class='coin'></div>";
            if(world[i][j] == 0) 
                output += "<\n\tdiv class='empty'></div>";
        }
        output += "<\n/div>";
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