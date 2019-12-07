import { SIZE_FIELD, shadows, SUN_POSITION_TOP, SUN_POSITION_RIGHT, SUN_POSITION_BOTTOM, SUN_POSITION_LEFT } from '../types/enums';

export function getFertility(x, y) {
  if (x <= 3 && x >= 2 && y <= 3 && y >= 2) {
    return 3;

  }
  else if (y === 0 || x === 0 || y === 5 || x === 5) {
    return 1;

  }
  else {
    return 2;
  }
}

export function getShadow(field, sun) {
  const res = [];

  for (let x = 0; x < SIZE_FIELD; x++) {
    for (let y = 0; y < SIZE_FIELD; y++) {
      if (shadows[field.content[y][x].type] > 0) {
        let shadowsLeft = shadows[field.content[y][x].type];

        if (sun === SUN_POSITION_TOP) {
          for (let i = y + 1; i < 6 && shadowsLeft > 0; i++) {
            res.push({
              x: x,
              y: i
            });

            shadowsLeft -= 1;
          }
        }
        else if (sun === SUN_POSITION_BOTTOM) {
          for (let i = y - 1; i >= 0 && shadowsLeft > 0; i--) {
            res.push({
              x: x,
              y: i
            });

            shadowsLeft -= 1;
          }
        }
        else if (sun === SUN_POSITION_LEFT) {
          for (let i = x + 1; i < 6 && shadowsLeft > 0; i++) {
            res.push({
              x: i,
              y: y
            });

            shadowsLeft -= 1;
          }
        }
        else if (sun === SUN_POSITION_RIGHT) {
          for (let i = x - 1; i >= 0 && shadowsLeft > 0; i--) {
            res.push({
              x: i,
              y: y
            });

            shadowsLeft -= 1;
          }
        }
      }
    }
  }
}