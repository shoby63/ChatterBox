import React from 'react'
import { useDispatch } from 'react-redux'
// import { dispatch } from 'redux'
import { updateSidebarType } from '../redux/slices/app';
const StarredMessages = () => {
  const dispatch=useDispatch();
  // dispatch(updateSidebarType("CONTACT"));

  return (
    <div onClick={()=>{
        dispatch(updateSidebarType("CONTACT"));
    }}>StarredMessages</div>
  )
}

export default StarredMessages