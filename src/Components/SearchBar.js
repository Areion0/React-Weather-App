import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '& .MuiFormLabel-root': { color: 'white' },
                    marginLeft: '60px',
                }}
                inputProps={{ style: { color: 'white' } }} // Set color of the input text to white
            />
            <Button
                margin="normal"
                variant="contained" color="primary" onClick={handleSearch}
                sx={{
                    marginLeft: '16px',
                    marginBottom: '18px',
                }}
            >
                Search
            </Button>
        </div>
    );
};


export default SearchBar