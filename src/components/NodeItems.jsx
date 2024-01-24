
import React from "react";
const NodeDropdownItems=(props)=>{
    console.log(props)
    return (
        <div  className="hover:bg-slate-200">
            <div className="flex flex-col space-x-1 p-1">
                <h2 className="font-bold">{props.message}</h2>
            </div>
        </div>
    )
}
export default NodeDropdownItems;