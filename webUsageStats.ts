// Data derived from https://gs.statcounter.com/os-market-share/desktop/worldwide/2023
// And https://gs.statcounter.com/os-market-share/mobile/worldwide/2023
// And https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2023
// For the month of December 2023

export const techUsage = [
  {
    label: 'HTML',
    value: 25, 
  },
  {
    label: 'CSS',
    value: 20, 
  },
  {
    label: 'JS',
    value: 18, 
  },
  {
    label: 'React',
    value: 15, 
  },
  {
    label: 'TS',
    value: 1, 
  },
  {
    label: 'Redux',
    value: 8, 
  },
  {
    label: 'Node.js',
    value: 1, 
  },
  {
    label: 'DB',
    value: 10, 
  },
  {
  label: 'AXIOS',
    value: 2, 
  },
];

export const mobileOS = [
  {
    label: 'Android',
    value: 70.48,
  },
  {
    label: 'iOS',
    value: 28.8,
  },
  {
    label: 'Other',
    value: 0.71,
  },
];

export const platforms = [
  {
    label: 'Mobile',
    value: 59.12,
  },
  {
    label: 'Desktop',
    value: 40.88,
  },
];

const normalize = (v: number, v2: number) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
    value: normalize(v.value, platforms[0].value),
  })),
  ...techUsage.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
