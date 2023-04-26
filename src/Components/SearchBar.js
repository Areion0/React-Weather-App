import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';


const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');



    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        onSearch(city);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
                className='search-bar'
                label="City"
                value={city}
                onChange={handleCityChange}
                variant="outlined"
                color="primary"
                margin="normal"
                onKeyPress={handleKeyPress}
                sx={{
                    flexGrow: 1, // Allow TextField to grow and take up remaining space
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Set border color of the input field when not focused to blue
                    '& .MuiFormLabel-root': { color: 'white' }, // Set color of the label to green
                    marginLeft: '60px', // Add margin to the left for spacing
                }}
                inputProps={{ style: { color: 'white' } }} // Set color of the input text to white
            />
            <Button
                margin="normal"
                variant="contained" color="primary" onClick={handleSearch}
                sx={{
                    // backgroundColor: 'white', // Set background color to white
                    marginLeft: '16px', // Add margin to the left for spacing
                    marginBottom: '18px', // Add margin to the left for spacing
                }}
            >
                Search
            </Button>
        </div>
    );
};


export default SearchBar