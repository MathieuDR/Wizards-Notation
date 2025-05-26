export interface SpellOptions {
  level: number;
  school: number;
  damage: number;
  aoe: number;
  range: number;
  duration: number;
}

export function calculateGraph(options: SpellOptions) {
  return calculate(options);
}

function calculate(opts: SpellOptions) {
  const nums = [opts.level, opts.school, opts.damage, opts.aoe, opts.range, opts.duration]
  const { map } = nums.reduce((acc, n) => {
    let { map, k } = acc
    const nMap = connections(n, k)
    return { map: mergeMaps(map, nMap), k: k + 1 }
  }, { map: new Map(), k: 1 })

  return map
}

function mergeMaps(a: Map<number, number[]>, b: Map<number, number[]>): Map<number, number[]> {
  let merged = new Map()

  for (const [key, value] of a) {
    merged.set(key, [...value])
  }

  for (const [key, value] of b) {
    if (merged.has(key)) {
      const combined = [...merged.get(key)!, ...value]
      merged.set(key, [...new Set(combined)])
    } else {
      merged.set(key, [...value])
    }
  }


  return merged
}

function connections(n: number, k: number): Map<number, number[]> {
  let conns = new Map();
  let sum = 0
  let pow = 0

  while (sum != n && sum < n) {
    const powN = Math.pow(2, pow)
    const res = n & powN

    if (res == powN) {
      sum += powN
      conns.set(pow, [(pow + k)])
    }

    pow += 1
  }

  return conns
}
