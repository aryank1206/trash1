class Bin {
    constructor(x,y,width,height,angle,option){
        
            this.body= Bodies.rectangle(x,y,width,height,angle,option)
            this.width=width;
            this.height=height;
        World.add(world,this.body)
        }
        
}
