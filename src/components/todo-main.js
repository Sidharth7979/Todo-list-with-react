import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Divider,
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  List,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TaskOptions from '../right section/Rightmenu'; // Ensure this path is correct

const TaskItem = ({ task, onToggleCompletion, onToggleImportance, onClick, isDarkMode }) => (
  <React.Fragment>
    <ListItem
      key={task.id}
      onClick={() => onClick(task)}
      sx={{
        height: '80px',
        width: '950px',
        paddingBottom: '12px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: isDarkMode ? '#424242' : '#fff',
        '&:hover': {
          backgroundColor: isDarkMode ? 'rgb(47, 54, 48)' : '#f0f0f0',
        },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Checkbox
          checked={task.completed}
          sx={{ height: '80px', width: '80px' }}
          onChange={() => onToggleCompletion(task.id)}
        />
        <ListItemText primary={task.text} sx={{ width: 'calc(100% - 160px)', color: isDarkMode ? '#fff' : '#000' }} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => onToggleImportance(task.id)}>
            {task.important ? <StarIcon sx={{ color: '#ffeb3b' }} /> : <StarBorderIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </Box>
    </ListItem>
    <Divider sx={{ marginBottom: '12px', backgroundColor: isDarkMode ? '#666' : '#e0e0e0' }} />
  </React.Fragment>
);

const TaskList = ({ tasks, onToggleCompletion, onToggleImportance, onTaskClick, isDarkMode, layout }) => (
  <List
    sx={{
      width: 'auto',
      display: 'flex',
      flexDirection: layout === 'horizontal' ? 'row' : 'column',
      overflow: 'hidden',
    }}
  >
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggleCompletion={onToggleCompletion}
        onToggleImportance={onToggleImportance}
        onClick={onTaskClick}
        isDarkMode={isDarkMode}
      />
    ))}
  </List>
);

const AddTaskForm = ({ newTaskText, setNewTaskText, handleAddTask, isDarkMode, onToggleLayout }) => (
  <Box
    sx={{
      height: '178px',
      mb: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? 'rgb(47, 54, 48)' : '#f5f5f5',
      color: isDarkMode ? '#fff' : '#000',
      borderRadius: '8px',
    }}
  >
    <Typography variant="h6" sx={{ height: '32px' }}>
      To Do
    </Typography>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" gap={2}>
        <TextField
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a task"
          variant="outlined"
          size="medium"
          InputProps={{
            style: { fontSize: '18px', color: isDarkMode ? '#fff' : '#000' },
          }}
        />
        <IconButton onClick={handleAddTask}>
          <AddIcon sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </IconButton>
        <IconButton>
          <CalendarTodayIcon sx={{ color: isDarkMode ? '#fff' : '#000' }} />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center">
       
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleAddTask}
          sx={{ marginRight: '30px' }}
        >
          Add Task
        </Button>
      </Box>
    </Box>
  </Box>
);

const Main = ({ isDarkMode, layout, onToggleLayout }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleToggleImportance = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, important: !task.important } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
      important: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText('');
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleClose = () => {
    setSelectedTask(null);
  };

  const handleDelete = () => {
    if (selectedTask) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTask.id));
      setSelectedTask(null);
    }
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Container
        sx={{
          width: '500px',
          height: '1050px',
          padding: '6px',
          backgroundColor: isDarkMode ? '#424242' : '#f5f5f5',
          borderRadius: '0px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          color: isDarkMode ? '#fff' : '#000',
          transition: 'flex 0.3s ease-in-out',
          marginLeft: '280px',
          flex: selectedTask ? '0 0 700px' : '1 1 auto',
        }}
      >
        <AddTaskForm
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          handleAddTask={handleAddTask}
          isDarkMode={isDarkMode}
          onToggleLayout={onToggleLayout}
        />
        <Box sx={{ flex: 1, overflowY: 'hidden' }}>
          <TaskList
            tasks={tasks.filter((task) => !task.completed)}
            onToggleCompletion={handleToggleCompletion}
            onToggleImportance={handleToggleImportance}
            onTaskClick={handleTaskClick}
            isDarkMode={isDarkMode}
            layout={layout}
          />
          <Typography variant="subtitle1" sx={{ marginTop: '24px' }}>
            Completed
          </Typography>
          <TaskList
            tasks={tasks.filter((task) => task.completed)}
            onToggleCompletion={handleToggleCompletion}
            onToggleImportance={handleToggleImportance}
            onTaskClick={handleTaskClick}
            isDarkMode={isDarkMode}
            layout={layout}
          />
        </Box>
      </Container>

      {selectedTask && (
        <Box
          sx={{
            width: '500px',
            height: '1050px',
            backgroundColor: isDarkMode ? '#333' : '#fff',
            transition: 'flex 0.3s ease-in-out',
            flex: '0 1 500px',
            padding: '0px',
          }}
        >
          <TaskOptions
            task={selectedTask}
            onClose={handleClose}
            onDelete={handleDelete}
            isDarkMode={isDarkMode}
          />
        </Box>
      )}
    </Box>
  );
};

export default Main;
