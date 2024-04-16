import { Box } from '@mui/material'
import './home.css'
import React from 'react'
import TopSection from './TopSection'

const Home = () => {
    return (
        <Box width="100%" height="100vh">
            <Box className="topBar"></Box>
            <Box className="topSection"><TopSection /></Box>
            <Box className="bottomSection"></Box>
        </Box>
    )
}

export default Home