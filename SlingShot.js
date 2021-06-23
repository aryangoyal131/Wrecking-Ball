class Slingshot{
 constructor(bodyA,pointB){
     var options = {
         bodyA : bodyA,
         pointB : pointB,
         stiffness : 1,
         length : 275
     }
     this.sling = Constraint.create(options);
     World.add(world,this.sling);
 }

 display(){
     var positionA = this.sling.bodyA.position;
     var positionB = this.sling.pointB;
    line(positionA.x,positionA.y,positionB.x,positionB.y);
 }
}