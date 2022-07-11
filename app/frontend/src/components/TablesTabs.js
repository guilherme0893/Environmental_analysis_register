/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchParameterTable from './parameters/SearchParameterTable';
import SearchSampleTable from './samples/SearchSampleTable';
import CompleteDataTable from './CompleteDataTable';

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

export default function DataTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Samples" />
          <Tab label="Parameters" />
          <Tab label="Complete data" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchSampleTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchParameterTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompleteDataTable />
      </TabPanel>
    </Box>
  );
}
