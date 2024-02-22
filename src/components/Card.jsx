import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUser, faEye } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  
  const tag = props.tag;
  const arr = tag.split(', ')
  const timestamp = props.date;
  const parsedDate = new Date(timestamp);

  const month = parsedDate.toLocaleString("default", { month: "short" });
  const day = parsedDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${month}-${day}`;
  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  return (
    <div className="border border-black m-2 p-4 w-[300px]">
      <div className="flex flex-col">
        <div className='flex border-b border-black items-center justify-between'>
      <h3 className='text-xl font-semibold  '>{titleCase(props.title)}</h3>
          <div className='flex items-center space-x-2'>
          <FontAwesomeIcon icon={faEye} />
            <p>{props.views}</p>
          </div>
        </div>
      <p className="text-justify py-4">{props.description.slice(0, 100)}...</p>
        <div className="overflow-x-scroll flex space-x-4 items-center justify-between whitespace-nowrap p-2">
          {  arr.map((tag, index)=> {
          return <p key={index} className=''>#<i>{tag}</i></p>
        })}
        </div>
      <div className='flex flex-col space-y-2'>
        <Link className='text-secondary border border-black p-1 rounded text-center' to={`/blog/${props.id}`}>Read more</Link>
        <div className="flex justify-between items-center border-t border-black py-1">
      <p className='text-sm'><FontAwesomeIcon icon={faCalendarDays} className="px-1" />{formattedDate}</p>
      <p className='text-sm'><FontAwesomeIcon icon={faUser} className="px-1" />{props.author}</p>
          </div>
</div>
      </div>
    </div>
  );
};

export default Card;