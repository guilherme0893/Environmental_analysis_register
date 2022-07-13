/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SampleForm from './samples/SampleForm';
import ParameterForm from './parameters/ParameterForm';
import SearchParameterForm from './parameters/SearchParameterForm';
import SearchSampleForm from './samples/SearchSampleForm';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FormTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Register sample" />
          <Tab label="Register parameter" />
          <Tab label="Search sample" />
          <Tab label="Search parameter" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SampleForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ParameterForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchSampleForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SearchParameterForm />
      </TabPanel>
    </Box>
  );
}
