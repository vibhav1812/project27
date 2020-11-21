class Bob{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
this.body = Bodies.circle(x,y,35,options);
World.add(myWorld,this.body);


    }
display(){
    var pos = this.body.position;
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,35);
    
}

}