export interface SpellOptions {
  level: number;
  school: number;
  damage: number;
  aoe: number;
  range: number;
  duration: number;
}

export function calculateGraph(options: SpellOptions) {
  return { ...calculate(options) };
}

function calculate(opts: SpellOptions) {
  // To test
  return {
    0: [1, 2, 3],
    1: [4, 5],
    2: [6, 7],
    3: [8, 9],
    4: [10],
    5: [11],
    6: [11],
    7: [12],
    8: [10, 12],
    9: [11],
    10: [12],
    11: [12],
    12: [1],
    ...opts
  }
}
