import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoNavListLight from '../components/todo-nav-list-light';
import Aside from './todo-aside';
import Main from './todo-main';
import { toggleLayout } from '../slices/layoutSlice';
import './home.css';

export default function Home({ isDarkMode, onToggleDarkMode }) {
  const dispatch = useDispatch();
  const layout = useSelector(state => state.layout.layout); // Access layout property from state

  const handleToggleLayout = () => {
    dispatch(toggleLayout());
  };

  return (
    <div className={isDarkMode ? 'homepage dark-mode' : 'homepage'}>
      <TodoNavListLight
        onToggleLayout={handleToggleLayout}
        onMoonClick={onToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Aside isDarkMode={isDarkMode} />
      <Main isDarkMode={isDarkMode} layout={layout} />
    </div>
  );
}
