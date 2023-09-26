

interface IPaperInfo {
  id: number;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  image: string;
}

export const paperInformationData: IPaperInfo[] = [
  {
    id: 1,
    title: 'Import a certification',
    text1: 'Showing a credential may',
    text2: 'increase your chances of',
    text3: 'Import a certification',
    image: '/assets/images/homeJops/forPaper1.svg',
  },


  {
    id: 2,
    title: 'Build your portfolio',
    text1: 'Adding a project may',
    text2: 'increase your chances of',
    text3: 'earning by 8 times.',
    image: '/assets/images/homeJops/forPaper2.svg',
  },
  {
    id: 3,
    title: 'My jobs',
    text1: 'View your active',
    text2: 'contracts, timesheets, and',
    text3: 'available earnings.',
    image: '/assets/images/homeJops/forPaper3.svg',
  }
]