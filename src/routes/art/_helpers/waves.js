import { twoPi } from './pi'

export const sine = x => Math.sin(x * twoPi)
export const cosine = x => Math.cos(x * twoPi)
export const triangle = x => {
  const modded = (x * 4) % 4
  return 1 - Math.abs(modded - 2)
}
