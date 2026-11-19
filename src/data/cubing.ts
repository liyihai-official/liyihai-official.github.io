// Snapshot of official WCA results for 2014LIYI03.
// Source: https://www.worldcubeassociation.org/api/v0/persons/2014LIYI03
// Times are in centiseconds, as stored by the WCA. Update after each new competition.
export const cubing = {
  wcaId: '2014LIYI03',
  wcaUrl: 'https://www.worldcubeassociation.org/persons/2014LIYI03',
  cubingUrl: 'https://cubing.com/results/person/2014LIYI03',
  asOf: '2026-11-19',
  competitions: 5,
  firstYear: 2014,
  lastYear: 2026,
  solves: 124,
  records: [
    { event: '333', en: '3×3×3', zh: '三阶', single: 1223, average: 1466 },
    { event: '222', en: '2×2×2', zh: '二阶', single: 358, average: 500 },
    { event: '444', en: '4×4×4', zh: '四阶', single: 4448, average: 4963 },
    { event: '555', en: '5×5×5', zh: '五阶', single: 9470, average: 10092 },
    { event: '666', en: '6×6×6', zh: '六阶', single: 24393, average: null },
    { event: 'pyram', en: 'Pyraminx', zh: '金字塔', single: 1047, average: 1566 },
  ],
};

/** Formats WCA centiseconds as 12.23 or 1:34.70. */
export function formatTime(cs: number | null): string {
  if (cs == null || cs <= 0) return '—';
  const minutes = Math.floor(cs / 6000);
  const seconds = ((cs % 6000) / 100).toFixed(2);
  return minutes ? `${minutes}:${seconds.padStart(5, '0')}` : seconds;
}
