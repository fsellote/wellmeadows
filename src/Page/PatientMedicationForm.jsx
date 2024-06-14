import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';  // Import Typography component

export default function PatientMedicationPage() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: '100vh', 
        mt: 5 
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start',  
          mb: 5,
          width: '100%',  
          pl: 5,  
        }}
      >
        <Box sx={{ maxWidth: 400, ml: 8, mt: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Patient Medication Form
          </Typography>
        </Box>
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start',  
          mb: 5,
          width: '100%',  
          pl: 5, 
        }}
      >
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, ml: 10 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by ID"
            inputProps={{ 'aria-label': 'search by id' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={12}>
          <Box sx={{ ml: 10, mr: 10 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Full Name</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Ward Number</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Bed Number</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Ward Name</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Drug Number</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Description</th> 
                  <th style={{ border: '1px solid black', padding: '8px' }}>Dosage</th> 
                  <th style={{ border: '1px solid black', padding: '8px' }}>Method of Admin</th> 
                  <th style={{ border: '1px solid black', padding: '8px' }}>Units per Day</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Start Date</th>  
                  <th style={{ border: '1px solid black', padding: '8px' }}>Finish Date</th> 
                </tr>
              </thead>
            </table>
          </Box>
          </Grid>
        </Grid>
    </Box>
  );
}
