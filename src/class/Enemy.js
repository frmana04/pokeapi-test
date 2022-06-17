import  {Character}  from "./Character.js";
import {createImage} from '../helpers/load-image.js';
import {ctx} from '../index.js';
import  {ct}  from '../helpers/constants.js';


export class Enemy extends Character {



    constructor(urlImage,position,size,speed,maxSpeed,type,onFire){


        return (async ()=> {

            super(urlImage,position,size,speed,maxSpeed,onFire);
            this.type=type;
          
            this.image = await createImage(urlImage);
            return this;
        }) ()       
    }


   

    goUp(){

        this.direction="UP";
        if (this.onFire)
        this.image.src=`./images/enemy-${this.type}-up-fire.png`

        else
       this.image.src=`./images/enemy.png`
       this.speed.y=-this.maxSpeed; 
       this.speed.x=0;
           
    }

    goDown(){
        this.direction="DOWN";
        if (this.onFire)
        this.image.src=`./images/enemy-${this.type}-down-fire.png`

        else
        this.image.src=`./images/enemy.png`

        this.speed.y= this.maxSpeed; 
        this.speed.x=0;
    }

    goLeft(){

        this.direction="LEFT";
        if (this.onFire)
       this.image.src=`./images/enemy-${this.type}-left-fire.png`
       else
       this.image.src=`./images/enemy.png`

       this.speed.x=-this.maxSpeed; 
       this.speed.y=0;
    }

    goRight(){

        this.direction="RIGHT";
        if (this.onFire)
        this.image.src=`./images/enemy-${this.type}-right-fire.png`
        else
        this.image.src=`./images/enemy.png`

        this.speed.x= this.maxSpeed; 
        this.speed.y=0;
    }

    randomMovement(){

        let direction=this.direction;

        if  (this.speed.x==0 && this.speed.y==0){

            const randomNumber=Math.floor(Math.random() * 4); 
            switch (randomNumber){
                case 0: direction = "UP"; break;
                case 1: direction = "DOWN"; break;
                case 2: direction = "LEFT"; break;
                case 3: direction = "RIGHT"; break;
            } 
           

        }

        else if  (this.position.x%ct.UNIT_MAP==0 && this.position.y%ct.UNIT_MAP==0 ){
        
        
        const randomNumber=Math.floor(Math.random() * 2); 
        if (this.speed.x!=0){
            if (randomNumber==0)
                direction = "UP";
            else 
                direction="DOWN";
        }
        else if(this.speed.y!=0){
            if (randomNumber==0)
                 direction = "LEFT";
            else 
                direction="RIGHT";
        }
       
    }
        
    return direction

    }

    die(){

        this.position.x=ct.UNIT_MAP*9
        this.position.y=ct.UNIT_MAP*10

    }
   

 

    setOnFire(){

        this.onFire=1;
        this.maxSpeed=5;
       }


    deleteOnFire(){

        this.onFire=0;
        this.maxSpeed=2.5;
       }
}