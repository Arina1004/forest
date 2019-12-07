import { SIZE_FIELD,SUN_POSITION_TOP,SUN_POSITION_RIGHT,SUN_POSITION_BOTTOM, SUN_POSITION_LEFT,CELL_CONTENT_SEED,CELL_CONTENT_SMALL,CELL_CONTENT_MEDIUM,CELL_CONTENT_LARGE} from '../types/enums';
export const SIZE_FIELD = 6;
export function getFertility(x, y) {
  if (x <= 3 a && x >= 2 && y <= 3 a && y >= 2)
  {
    return 3;

  }
  else if (y = 0 || x = 0 || y =5 || x = 5 )
  {
    return 1;

  }
  else {
    return 2;
  }
}

export function getShadow(field, sun) {
for (let x = 0; x < SIZE_FIELD; x++){
  for (let y = 0; y < SIZE_FIELD; y++){
    if sun === SUN_POSITION_TOP{
      if (field.content[y][x].type ===CELL_CONTENT_SEED){
        return;

      }

      else if (field.content[y][x].type ===CELL_CONTENT_LARGE){
        return;

      }
      else if (field.content[y][x].type ===CELL_CONTENT_MEDIUM){
        return;

      }
      else if (field.content[y][x].type ===CELL_CONTENT_SMALL)
      {
        return;
      }
      return [];

    }
  else if sun === SUN_POSITION_RIGHT{
    if (field.content[y][x].type ===CELL_CONTENT_SEED){
      return;

    }

    else if (field.content[y][x].type ===CELL_CONTENT_LARGE){
      return;

    }
    else if (field.content[y][x].type ===CELL_CONTENT_MEDIUM){
      return;

    }
    else if (field.content[y][x].type ===CELL_CONTENT_SMALL)
      {
        return;
      }
      return [];
  }

  }
  else if sun === SUN_POSITION_BOTTOM {
    if (field.content[y][x].type ===CELL_CONTENT_SEED){
      return;

    }

    else if (field.content[y][x].type ===CELL_CONTENT_LARGE){
      return;

    }
    else if (field.content[y][x].type ===CELL_CONTENT_MEDIUM){
      return;

    }
    else if (field.content[y][x].type ===CELL_CONTENT_SMALL)
      {
        return;
      }
      return [];


  }

      }
  else
  {
    if (field.content[y][x].type ===CELL_CONTENT_SEED){

    }

    else if (field.content[y][x].type ===CELL_CONTENT_LARGE){

    }
    else if (field.content[y][x].type ===CELL_CONTENT_MEDIUM){

    }
    else if (field.content[y][x].type ===CELL_CONTENT_SMALL)
      {
        return;
      }
      return [];

  }

}

