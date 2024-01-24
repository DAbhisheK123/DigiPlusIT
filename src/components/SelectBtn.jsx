import React, { useState ,useRef,useEffect} from 'react';
import NodeDropdownItems from './NodeItems';
const SelectBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {

    setIsOpen(!isOpen);
  };
  const nodeALL=["Parrent","Child","Single"]

  return (
    <div className="relative focus:pointer-events-auto p-2">
<div onClick={toggleDropdown} className={`flex flex-row w-max border-2 rounded-md p-1 hover:bg-slate-200 ${isOpen ? "bg-slate-200" : "bg-inherit"}`}>
  <span className={` text-blue-500 `}>Node type </span>
  <span className='px-1'>
  <svg className={`${isOpen?"hidden":"visible"} `} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" fill='#b3b3b3'/></svg>
  <svg className={`${isOpen?"visible":"hidden"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" fill='#b3b3b3'/></svg>
  </span>
    </div>
      {isOpen && 
      nodeALL.map((value)=>{
      <div key={value}>
      <NodeDropdownItems message={value}></NodeDropdownItems>
    </div>
    })
    }
    </div>
  
)};

export default SelectBtn;