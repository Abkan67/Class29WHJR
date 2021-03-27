class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2, 170,17);
    }
    drawLine() {
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y,pointB.x-10,pointB.y-45);
            line(pointA.x-20, pointA.y, pointB.x+18,pointB.y-45);
            var xoffset=0;
            if(pointA.x>200) {xoffset=50}
            image(this.sling3,-25+xoffset,-15,10,30);
/*            push();
            translate(pointA.x,pointA.y);
            rotate(bird.body.angle);
            pop(); */
        }
    }
    
}