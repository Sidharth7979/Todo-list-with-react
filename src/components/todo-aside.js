import React from 'react';
import './aside.css';
import allTasksIcon from '../images/aside/hugeicons_task-01.svg';
import TodayIcon from '../images/aside/Icon.svg';
import ImportantIcon from '../images/aside/important.svg';
import PlannedIcon from '../images/aside/clock.svg';
import AsingnedIcon from '../images/aside/iwwa_assign.svg';
import Menu from '../images/frame2/menu.svg';
import TodayTasksCard from '../components/Todaytask';

const Aside = ({ isDarkMode }) => {
  return (
    
    <div className={isDarkMode ? 'aside dark-mode' : 'aside'}>
      <div className='frame1'>
        <div className='profile' />
        <p className='name'>Hey, Sidharth</p>
        <div className='sidebar1'>
          <ul>
            <li><img src={allTasksIcon} alt="All Tasks" />All Tasks</li>
            <li><img src={TodayIcon} alt="Today" />Today</li>
            <li><img src={ImportantIcon} alt="Important" />Important</li>
            <li><img src={PlannedIcon} alt="Planned" />Planned</li>
            <li><img src={AsingnedIcon} alt="Assigned to me" />Assigned to me</li>
          </ul>
          <div className='frame2'>
            <p className='textadd'><img className='addlist' src={Menu} alt='+' /> Add list</p>
          </div>
          <div className='sidepanel'>
            <TodayTasksCard isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Aside;
