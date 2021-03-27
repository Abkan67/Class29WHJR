class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.birdposition = {x:x, y:y};
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    if (!haslaunched){
    Body.setPosition(this.body, this.birdposition);}
    super.display();
  }
}
