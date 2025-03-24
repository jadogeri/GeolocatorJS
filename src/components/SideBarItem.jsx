import React from 'react';
import { Link } from 'react-router-dom';
import openView from '../utils/openView';

const SideBarItem = ({
    href,
    className,
    name,
    icon,
    to,
    id
}) => {
  return (
    <Link href={href} className={className} onClick={(evt)=>{openView(evt, id)}}>
      
    <i className={icon} />
    &nbsp; {name}
  </Link>
  );
}

export default SideBarItem;
