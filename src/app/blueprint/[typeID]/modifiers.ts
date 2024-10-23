import { reduce, toPairs } from 'ramda'

type DogmaticFilter = {
  dogmaAttributeID?: number
  filterID?: number
}

type Activity = {
  material?: DogmaticFilter[]
  time?: DogmaticFilter[]
  cost?: DogmaticFilter[]
}

type Modifier = {
  research_material?: Activity
  research_time?: Activity
  manufacturing?: Activity
  reaction?: Activity
  invention?: Activity
  copying?: Activity
}

export const modifiers: Record<string, Modifier> = {
  '48023': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '48047': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '43919': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
      ],
    },
  },
  '43920': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
      ],
    },
  },
  '45640': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '45641': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '46489': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2715,
          filterID: 16,
        },
      ],
    },
  },
  '43921': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
      ],
    },
  },
  '48030': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48031': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '47981': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '47982': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '46488': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2715,
          filterID: 16,
        },
      ],
    },
  },
  '47984': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48032': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '47985': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '48024': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '43890': {
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
    },
  },
  '43891': {
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
    },
  },
  '43704': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '43705': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '43707': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2550,
          filterID: 6,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
      ],
    },
  },
  '43708': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2550,
          filterID: 6,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
      ],
    },
  },
  '43709': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2552,
          filterID: 8,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
      ],
    },
  },
  '43711': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2552,
          filterID: 8,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
      ],
    },
  },
  '43712': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '43713': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '43714': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2544,
          filterID: 5,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
      ],
    },
  },
  '43715': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2544,
          filterID: 5,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
      ],
    },
  },
  '43716': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2546,
          filterID: 7,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
      ],
    },
  },
  '43717': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2546,
          filterID: 7,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
      ],
    },
  },
  '43718': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '43719': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '43720': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
      ],
    },
  },
  '43721': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
      ],
    },
  },
  '43722': {
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
  },
  '43723': {
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
  },
  '43724': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
  },
  '43725': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
  },
  '43726': {
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
  },
  '43727': {
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
  },
  '43729': {
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '43730': {
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '43732': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2548,
          filterID: 9,
        },
      ],
    },
  },
  '43733': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
      ],
    },
  },
  '43734': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
      ],
    },
  },
  '46490': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2716,
          filterID: 16,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '37178': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '47883': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '37146': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2546,
          filterID: 7,
        },
      ],
    },
  },
  '37147': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2546,
          filterID: 7,
        },
      ],
    },
  },
  '37148': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '37149': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '37150': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
      ],
    },
  },
  '37151': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
      ],
    },
  },
  '37152': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2548,
          filterID: 9,
        },
      ],
    },
  },
  '37153': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
      ],
    },
  },
  '37154': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2544,
          filterID: 5,
        },
      ],
    },
  },
  '37155': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2544,
          filterID: 5,
        },
      ],
    },
  },
  '37156': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
    },
  },
  '37157': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
    },
  },
  '37158': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
      ],
    },
  },
  '37159': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
      ],
    },
  },
  '37160': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '37161': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '37162': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
      ],
    },
  },
  '37163': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
      ],
    },
  },
  '37164': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
      ],
    },
  },
  '37165': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
      ],
    },
  },
  '37166': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2548,
          filterID: 9,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
      ],
    },
  },
  '37167': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2548,
          filterID: 9,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
      ],
    },
  },
  '37168': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2555,
          filterID: 10,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '37169': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2555,
          filterID: 10,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '37170': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '37171': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '37172': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2575,
          filterID: 11,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '37173': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2575,
          filterID: 11,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '37174': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '37175': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '48020': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '37179': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2538,
          filterID: 2,
        },
        {
          dogmaAttributeID: 2540,
          filterID: 4,
        },
        {
          dogmaAttributeID: 2542,
          filterID: 1,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
        {
          dogmaAttributeID: 2541,
          filterID: 4,
        },
        {
          dogmaAttributeID: 2543,
          filterID: 1,
        },
      ],
    },
  },
  '37180': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2592,
          filterID: 3,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2591,
          filterID: 3,
        },
      ],
    },
  },
  '37181': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2592,
          filterID: 3,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2591,
          filterID: 3,
        },
      ],
    },
  },
  '37182': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '37183': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '43854': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2550,
          filterID: 6,
        },
      ],
    },
  },
  '43855': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2550,
          filterID: 6,
        },
      ],
    },
  },
  '43856': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
      ],
    },
  },
  '43857': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
      ],
    },
  },
  '43858': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2552,
          filterID: 8,
        },
      ],
    },
  },
  '43859': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2552,
          filterID: 8,
        },
      ],
    },
  },
  '43860': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
      ],
    },
  },
  '43861': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
      ],
    },
  },
  '43862': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2555,
          filterID: 10,
        },
      ],
    },
  },
  '43863': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2555,
          filterID: 10,
        },
      ],
    },
  },
  '43864': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '43865': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '43866': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '43867': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '43868': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '43869': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '43870': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
    },
  },
  '43871': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
    },
  },
  '43872': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '43873': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '43874': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
      ],
    },
  },
  '43875': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
      ],
    },
  },
  '43876': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
      ],
    },
  },
  '43877': {
    manufacturing: {
      time: [
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
      ],
    },
  },
  '43878': {
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
    },
  },
  '43879': {
    invention: {
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
    },
  },
  '43880': {
    invention: {
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
  },
  '43881': {
    invention: {
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
  },
  '43882': {
    research_material: {
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
  },
  '43883': {
    research_material: {
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
  },
  '43884': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
    },
  },
  '43885': {
    research_material: {
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
    },
  },
  '43886': {
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
    },
  },
  '43887': {
    research_time: {
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
    },
  },
  '43888': {
    research_time: {
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
  },
  '43889': {
    research_time: {
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
  },
  '47986': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '47987': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '43892': {
    copying: {
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '43893': {
    copying: {
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '47990': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '47991': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '47992': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '47993': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '47997': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '47998': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '47999': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48001': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48002': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48003': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48022': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '48007': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48008': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '48009': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48010': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48011': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '48012': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48013': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48014': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48015': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48016': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48017': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48018': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48019': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '46484': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2717,
          filterID: 18,
        },
      ],
    },
  },
  '46485': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2717,
          filterID: 18,
        },
      ],
    },
  },
  '46486': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2718,
          filterID: 18,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '46487': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2718,
          filterID: 18,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '47512': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    manufacturing: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '47513': {
    manufacturing: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '47514': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '46491': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2716,
          filterID: 16,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48028': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '46493': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2719,
          filterID: 17,
        },
      ],
    },
  },
  '46494': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2720,
          filterID: 17,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '46495': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2720,
          filterID: 17,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '46496': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2716,
          filterID: 16,
        },
        {
          dogmaAttributeID: 2718,
          filterID: 18,
        },
        {
          dogmaAttributeID: 2720,
          filterID: 17,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2715,
          filterID: 16,
        },
        {
          dogmaAttributeID: 2717,
          filterID: 18,
        },
        {
          dogmaAttributeID: 2719,
          filterID: 17,
        },
      ],
    },
  },
  '46497': {
    reaction: {
      material: [
        {
          dogmaAttributeID: 2716,
          filterID: 16,
        },
        {
          dogmaAttributeID: 2718,
          filterID: 18,
        },
        {
          dogmaAttributeID: 2720,
          filterID: 17,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2715,
          filterID: 16,
        },
        {
          dogmaAttributeID: 2717,
          filterID: 18,
        },
        {
          dogmaAttributeID: 2719,
          filterID: 17,
        },
      ],
    },
  },
  '48034': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48027': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48036': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48037': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48038': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '48039': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48040': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48041': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48042': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '48043': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48044': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48045': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48046': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48029': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48048': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48049': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48050': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48051': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '48052': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48053': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
  },
  '48054': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '48055': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48056': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48057': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48058': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48059': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48060': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48061': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48062': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48063': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48064': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48065': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48066': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '48067': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '48068': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48069': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48070': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2545,
          filterID: 5,
        },
        {
          dogmaAttributeID: 2547,
          filterID: 7,
        },
        {
          dogmaAttributeID: 2549,
          filterID: 9,
        },
        {
          dogmaAttributeID: 2551,
          filterID: 6,
        },
        {
          dogmaAttributeID: 2553,
          filterID: 8,
        },
        {
          dogmaAttributeID: 2556,
          filterID: 10,
        },
        {
          dogmaAttributeID: 2576,
          filterID: 11,
        },
      ],
    },
  },
  '48071': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48072': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48073': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48074': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48075': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48076': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '48077': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48078': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '48025': {
    manufacturing: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2539,
          filterID: 2,
        },
      ],
    },
  },
  '48035': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '45544': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
      cost: [],
      time: [],
    },
  },
  '45546': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
      ],
    },
  },
  '45548': {
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2557,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2559,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2561,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2658,
          filterID: 15,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2560,
          filterID: 13,
        },
        {
          dogmaAttributeID: 2562,
          filterID: 12,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
  },
  '48026': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2566,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2558,
          filterID: 14,
        },
        {
          dogmaAttributeID: 2659,
          filterID: 15,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2563,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2564,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2570,
        },
      ],
    },
  },
  '35825': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '35826': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '35827': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    manufacturing: {
      material: [
        {
          dogmaAttributeID: 2600,
        },
      ],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    invention: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2601,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2602,
        },
      ],
    },
  },
  '48033': {
    research_material: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2565,
        },
      ],
      time: [],
    },
    research_time: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2567,
        },
      ],
      time: [
        {
          dogmaAttributeID: 2568,
        },
      ],
    },
    copying: {
      material: [],
      cost: [
        {
          dogmaAttributeID: 2569,
        },
      ],
      time: [],
    },
  },
  '46492': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2719,
          filterID: 17,
        },
      ],
    },
  },
  '35836': {
    reaction: {
      material: [],
      cost: [],
      time: [
        {
          dogmaAttributeID: 2721,
        },
      ],
    },
  },
}

export const filtersForRigs = reduce(
  (accum, [rigType, modifier]) => {
    modifier.reaction?.material?.forEach(({ filterID }) => {
      if (filterID === undefined) return
      accum[filterID] = [...(accum[filterID] ?? []), rigType]
    })
    modifier.manufacturing?.material?.forEach(({ filterID }) => {
      if (filterID === undefined) return
      accum[filterID] = [...(accum[filterID] ?? []), rigType]
    })
    return accum
  },
  {} as Record<string, string[]>,
  toPairs(modifiers)
)

export const rigsForFilter = (filterID: string) => {
  return filtersForRigs[filterID]
}
