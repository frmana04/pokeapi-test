
import {ctx} from '../index.js'
import  {ct}  from '../helpers/constants.js';

export class Wall {

    constructor(position,size,color){

        this.position = position;
        this.size = size;
       
        this.color=color
       
    }

    draw(){

        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);


    }




}