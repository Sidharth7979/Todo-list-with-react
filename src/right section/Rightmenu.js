import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers';

const TaskOptions = ({ isDarkMode, task, onClose, onDelete, onToggleCompletion, onToggleImportance }) => {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [note, setNote] = useState('');
  const [showCalendar, setShowCalendar] = useState(false); // Calendar visibility state

  if (!task) return null; // Return null if no task is selected

  const handleCloseCalendar = (event) => {
    event.stopPropagation(); // Prevent event from propagating to the calendar
    setShowCalendar(false); // Hide calendar
  };

  return (
    <Paper
      sx={{
        width: 355,
        height: '100%',
        padding: 0,
        backgroundColor: isDarkMode ? '#424242' : 'rgb(238, 246, 239)',
        color: isDarkMode ? '#fff' : '#000',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // Hide scrollbars
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {/* Checkbox */}
        <IconButton onClick={() => onToggleCompletion(task.id)} sx={{ color: isDarkMode ? '#fff' : '#000' }}>
          {task.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
        <Typography
          variant="h6"
          sx={{ ml: 2, color: isDarkMode ? '#fff' : '#000', flexGrow: 1 }}
        >
          {task.text || 'No Task Name'}
        </Typography>
        {/* Importance Star */}
        <IconButton onClick={() => onToggleImportance(task.id)} sx={{ color: isDarkMode ? '#fff' : '#000' }}>
          {task.important ? <StarIcon sx={{ color: '#ffeb3b' }} /> : <StarBorderIcon />}
        </IconButton>
      </Box>

      <MenuList sx={{ flexGrow: 1 }}>
        <MenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
          </ListItemIcon>
          <ListItemText primary="Add Step" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </MenuItem>

        <Divider sx={{ backgroundColor: isDarkMode ? '#666' : '#e0e0e0' }} />

        <MenuItem>
          <ListItemIcon>
            <NotificationsIcon fontSize="small" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
          </ListItemIcon>
          <ListItemText primary="Set Reminder" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </MenuItem>

        <Divider sx={{ backgroundColor: isDarkMode ? '#666' : '#e0e0e0' }} />

        <MenuItem onClick={() => setShowCalendar(prev => !prev)}>
          <ListItemIcon>
            <CalendarTodayIcon fontSize="small" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
          </ListItemIcon>
          <ListItemText primary="Add Due Date" sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </MenuItem>

        {showCalendar && (
          <Box sx={{ p: 2, position: 'relative' }}>
            <IconButton onClick={handleCloseCalendar} sx={{ position: 'absolute', top: 0, right: 0, color: isDarkMode ? '#fff' : '#000' }}>
              <CloseIcon />
            </IconButton>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={null} // Adjust as needed
                onChange={() => {}} // Add logic for handling date changes
                renderInput={(params) => <TextField {...params} />}
                sx={{
                  backgroundColor: isDarkMode ? '#424242' : '#fff', // Apply dark mode styling
                  color: isDarkMode ? '#fff' : '#000', // Apply dark mode styling
                }}
              />
            </LocalizationProvider>
          </Box>
        )}

        <Divider sx={{ backgroundColor: isDarkMode ? '#666' : '#e0e0e0' }} />

        <MenuItem sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {isEditingNote ? (
            <TextField
              fullWidth
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={() => setIsEditingNote(false)}
              variant="standard"
              placeholder="Add Notes"
              sx={{
                input: { color: isDarkMode ? '#fff' : '#000' },
                backgroundColor: isDarkMode ? '#555' : '#fff',
                width: '100%',
              }}
            />
          ) : (
            <ListItemText
              primary={note || 'Add Notes'}
              onClick={() => setIsEditingNote(true)}
              sx={{ color: isDarkMode ? '#fff' : '#000', width: '100%' }}
            />
          )}
        </MenuItem>
      </MenuList>

      <Box sx={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '0 16px',
  position: 'relative', // Add relative positioning
  top: -100, // Move up by 300px
  overflow: 'hidden' // Ensure no scrollbars appear
}}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <IconButton onClick={onClose} sx={{ color: isDarkMode ? '#fff' : '#000' }}>
      <CloseIcon />
    </IconButton>
    <Typography variant="body2" sx={{ ml: 2 }}>
      Created today
    </Typography>
  </Box>
  <IconButton onClick={onDelete} sx={{ color: isDarkMode ? '#fff' : '#000' }}>
    <DeleteIcon />
  </IconButton>
</Box>

    </Paper>
  );
};

export default TaskOptions;
