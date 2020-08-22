class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
  }

  display() {
    this.body.position.x = 200;
    this.body.position.y = 200;
    super.display();
  }
}
