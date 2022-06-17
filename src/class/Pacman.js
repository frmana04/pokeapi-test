import  {Character}  from "./Character.js";
import {createImage} from '../helpers/load-image.js';
import  {ct}  from '../helpers/constants.js';




export class Pacman extends Character {

    constructor(urlImage,position,size,speed,maxSpeed,points,lifes){


        return (async ()=> {

            super(urlImage,position,size,speed,maxSpeed);
            this.points=points;
            this.lifes=lifes;
            this.image = await createImage(urlImage);
            this.onFire=0;
            return this;
        }) ()       
    }

    die(){

        this.lifes--;
        this.direction="RIGHT";
        this.position.x =ct.UNIT_MAP*9;
        this.position.y = ct.UNIT_MAP*19;
        this.speed.x=0;
        this.speed.y=0;
        this.image.src='./images/pacman-right.png'

    }
    
  

    addPoints(points){

        this.points+=points
    }

 

    goUp(){

        this.direction="UP";
        if (this.onFire)
        this.image.src='./images/pacman-up-fire.png'

        else
       this.image.src='./images/pacman-up.png'
       this.speed.y=-this.maxSpeed; 
       this.speed.x=0;
           
    }

    goDown(){
        this.direction="DOWN";
        if (this.onFire)
        this.image.src='./images/pacman-down-fire.png'

        else
        this.image.src='./images/pacman-down.png'

        this.speed.y= this.maxSpeed; 
        this.speed.x=0;
    }

    goLeft(){

        this.direction="LEFT";
        if (this.onFire)
       this.image.src='./images/pacman-left-fire.png'
       else
       this.image.src='./images/pacman-left.png'

       this.speed.x=-this.maxSpeed; 
       this.speed.y=0;
    }

    goRight(){

        this.direction="RIGHT";
        if (this.onFire)
        this.image.src='./images/pacman-right-fire.png'
        else
        this.image.src='./images/pacman-right.png'

        this.speed.x= this.maxSpeed; 
        this.speed.y=0;
    }

   setOnFire(){

    this.onFire++;

    this._setImageDirection()
        setTimeout(()=>{

            this.onFire--;
            this._setImageDirection()


        },ct.TIME_ONFIRE)
    
      

   }

   _setImageDirection(){

    let dir = ""
    if (this.onFire) dir="-fire";
    switch (this.direction){

        case "UP": this.image.src=`./images/pacman-up${dir}.png`;break;
        case "DOWN": this.image.src=`./images/pacman-down${dir}.png`;break;
        case "LEFT": this.image.src=`./images/pacman-left${dir}.png`;break;
        case "RIGHT": this.image.src=`./images/pacman-right${dir}.png`;break;


    }

}

}