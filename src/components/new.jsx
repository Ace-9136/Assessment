import React from 'react';
import { LinearProgress, Box, Slider, Typography, Button } from '@mui/material';


const FormComponent = () => {


    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Box 
      sx={{
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2, 
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        boxShadow: 1,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" color="primary">IDEALISTIC</Typography>
          <Typography variant="h6">DISILLUSIONED</Typography>
          <Typography variant="h6">CYNICAL</Typography>
          <Typography variant="h6">HOPEFUL</Typography>
        </Box>
        <LinearProgress variant="determinate" value={(2 / 20) * 100} sx={{ height: 10, mb: 2 }} />
        <Typography variant="body1" sx={{ my: 2 }}>2/20</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>My leadership journey has progressed as I anticipated.</Typography>
        <div className='px-10'>
            <Slider
            value={value}
            onChange={handleChange}
            step={1}
            marks
            min={1}
            max={5}
            valueLabelDisplay="off"
            sx={{ mb: 4 }}
            />
        </div>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Strongly Disagree</Typography>
          <Typography variant="body2">Disagree</Typography>
          <Typography variant="body2">Neutral</Typography>
          <Typography variant="body2">Agree</Typography>
          <Typography variant="body2">Strongly Agree</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button variant="text" startIcon={<i className="fas fa-arrow-left"></i>}>PREV</Button>
          <Button variant="text" endIcon={<i className="fas fa-arrow-right"></i>}>NEXT</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FormComponent


