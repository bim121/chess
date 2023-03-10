import { Cell } from "../Cell";
import { Colors } from "../Colors";
import {Figure, FigureNames} from "./Figure";
import blackLogo from '../../image/queen_black.png';
import whiteLogo from '../../image/queen_white.png';

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        if(this.cell.isEmptyVertical(target)){
            return true;
        }
        if(this.cell.isEmpryHorizontal(target)){
            return true;
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        return false;
    }
}