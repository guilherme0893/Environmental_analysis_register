import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import GlobalContext from '../context/GlobalContext';

export default function DescriptionAlerts() {
  const { setError, error, setIsError } = React.useContext(GlobalContext);

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error" onClose={() => { setIsError(false); setError(''); }}>{ error }</Alert>
    </Stack>
  );
}
