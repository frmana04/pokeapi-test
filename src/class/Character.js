
import {Element} from './Element.js'
import  {ct}  from '../helpers/constants.js'
import {ctx} from '../index.js'

export class Character extends Element{

    constructor(urlImage,position,size,speed,maxSpeed,onFire){
        super(urlImage,position,size);
        this.speed=speed;
        this.maxSpeed = maxSpeed;
        this.direction="RIGHT";
        this.onFire=onFire;

    }

    move(){

        
        this.position.x+=this.speed.x;
        this.position.y+=this.speed.y;

    }

    

    draw(){


        if (this.speed.x)
        ctx.drawImage(this.image, ct.SIZE_IMAGE*(this.position.x%(ct.SPEED_SPRITES*2) >= ct.SPEED_SPRITES), 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.UNIT_MAP, ct.UNIT_MAP);

        else
        ctx.drawImage(this.image, ct.SIZE_IMAGE*(this.position.y%(ct.SPEED_SPRITES*2) >= ct.SPEED_SPRITES), 0, ct.SIZE_IMAGE, ct.SIZE_IMAGE, this.position.x, this.position.y, ct.UNIT_MAP, ct.UNIT_MAP);

        

    }

    

    canMove(){

        
    }

}