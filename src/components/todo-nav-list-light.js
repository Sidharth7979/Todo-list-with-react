import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLayout } from '../slices/layoutSlice';
import { IconButton, Box } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import logo from '../images/TO DO + Nav/logo.svg';
import TaskOptions from '../right section/Rightmenu';
import './light.css';

const TodoNavListLight = ({ onMoonClick, isDarkMode }) => {
  const dispatch = useDispatch();
  const handleToggleLayout = () => {
    dispatch(toggleLayout());
  };

  const [showTaskOptions, setShowTaskOptions] = useState(false);

  const handleTaskOptionsToggle = () => {
    setShowTaskOptions(prev => !prev);
  };

  return (
    <div>
      <div className={`nav-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <IconButton
          className="nav-icon"
          sx={{ color: isDarkMode ? '#fff' : '#000' }}
          onClick={handleTaskOptionsToggle}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <img src={logo} alt="Logo" className="nav-logo" />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          className="nav-search"
          sx={{ color: isDarkMode ? '#fff' : '#000' }}
        >
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton
          className="nav-appgrid"
          sx={{ color: isDarkMode ? '#fff' : '#000' }}
          onClick={handleToggleLayout} // Trigger Redux action
        >
          <GridViewOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={onMoonClick}
          className="nav-moon"
          sx={{ color: isDarkMode ? '#fff' : '#000' }}
        >
          <DarkModeOutlinedIcon />
        </IconButton>
      </div>
      
      {showTaskOptions && (
        <div className="task-options-container">
          <TaskOptions isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
};

export default TodoNavListLight;
