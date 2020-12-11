class Dustbin{
              constructor(x, y) {
                 var rect_options={

                   isStatic:true

                 }
                
                 this.Image= loadImage("Sprites/dustbingreen.png");

                
                this.bodyleft= Bodies.rectangle(x,y,10,180,rect_options);
                this.bodyright= Bodies.rectangle(x+220,y,10,180,rect_options);
                this.bodydown= Bodies.rectangle(x+110,y+90,230,20,rect_options);
                
                
                World.add(myworld,this.bodyleft);
                World.add(myworld,this.bodyright);
                World.add(myworld,this.bodydown);
                
              
              }



     display() {
        
      push()
      fill("red");
      
      
        rect(this.bodyleft.position.x, this.bodyleft.position.y,10, 180);
        rect(this.bodyright.position.x, this.bodyright.position.y,10, 180);
        imageMode(CENTER);
        image(this.Image, this.bodydown.position.x, this.bodydown.position.y-90,250, 200);
        //rectMode(CENTER);
        //rect(this.bodydown.position.x, this.bodydown.position.y, 230, 20);  
        
        pop();
     }  
}