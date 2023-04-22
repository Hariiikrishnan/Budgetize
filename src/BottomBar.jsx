import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import "./bottomBar.css"

function BottomBar(){


    const navigation_items_elms = document.querySelectorAll(
        ".navigation-bar .list-items .item"
      );
      const navigation_pointer = document.querySelector(".navigation-bar .pointer");
      
      navigation_items_elms.forEach((item, index) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          navigation_items_elms.forEach((itm) => itm.classList.remove("active"));
          item.classList.add("active");
      
          const parentWidth = item.parentElement.clientWidth;
          const lefPercent = (parentWidth / navigation_items_elms.length) * index;
          navigation_pointer.style.left = lefPercent + "px";
        });
      });
      



    return <>
      <nav class="navigation-bar">
  <ul class="list-items">
    <span class="pointer"></span>
    <li class="item active">
      <a class="link" href="#">
     <HomeIcon className="linkIcon"/>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
      <AddIcon className="linkIcon"/>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
      <SignalCellularAltIcon className="linkIcon" />
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
      <PersonIcon className="linkIcon"  />
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
        <SettingsIcon  className="linkIcon" />
      </a>
    </li>
  </ul>
</nav>
    </>
}

export default BottomBar