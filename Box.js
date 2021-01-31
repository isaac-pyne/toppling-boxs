class Box {
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1
        }
        this.box = Bodies.rectangle(x,y,width,height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.box);
    }


    display(){
        var pos = this.box.position;
        var angle = this.box.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }






}