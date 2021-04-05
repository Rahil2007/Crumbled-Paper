class Paper {
    constructor(x,y,diameter){
        this.diameter=diameter
        this.image = loadImage("paper.png");
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 0,
            density: 0.16
        }
        this.body = Bodies.circle(x,y,this.diameter,options)
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        angleMode(RADIANS);
        push();
        fill("white");
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0);
        pop();
    }
}