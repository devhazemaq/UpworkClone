
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SmallText2 } from '@/components/atoms/typography';
import { StyleMainJobsYouMightLike } from './style';
import { API_URL_ALLJOPS } from '@/config/api';
import CardJobs from '../CardJobs';
import CardsJobsSaved from '../CardsJobsSaved/CardsJobsSaved';
import { useAppDispatch, useAppSelector } from '@/redux/store';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {value === 0 && <SmallText2 className="title__tap">Browse jobs that match your experience to a client&apos;s hiring preferences. Ordered by most relevant</SmallText2>}
          {value === 0 && <CardJobs />}
        </Box>
      )}
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
          {value === 1 && <CardsJobsSaved />}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);
  const {saveJobs} = useAppSelector((state)=> state.saveJobs );

  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };




  return (
    <StyleMainJobsYouMightLike>


      <Box sx={{ width: '100%', border: '1px solid #D5E0D5' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Best Matches" {...a11yProps(0)} />
            {/* <Tab label="Saved Jobs" {...a11yProps(1)} /> */}
            <Tab label={saveJobs?.length > 0 ? `Saved Jobs(${saveJobs?.length})` : "Saved Jobs" } {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* <SmallText2 className="title__tap">Browse jobs that match your experience to a client&apos;s hiring preferences. Ordered by most relevant</SmallText2> */}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>

        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
      </Box>
    </StyleMainJobsYouMightLike>

  );
}
