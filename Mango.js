class Mango

{
    constructor(x,y,r)
    {

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }

    display()
    
    {

        var pos = this.body.position;
         push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
         pop()

    }

}