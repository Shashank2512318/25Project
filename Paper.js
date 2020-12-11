class paper{
    constructor(x, y, r) {
        var paper_options={
   
            restitution:0.3, 
            friction:5, 
            density:0.9

        
          }
        
          this.Image= loadImage("sprites/paper.png");
          this.body= Bodies.circle(x,y,r,paper_options);
          World.add(myworld,this.body);

this.w= r;
this.h= r;

    }

    display() {
        fill("pink");
        imageMode(RADIUS);
        image(this.Image, this.body.position.x, this.body.position.y, this.w, this.h+10);
    }
}