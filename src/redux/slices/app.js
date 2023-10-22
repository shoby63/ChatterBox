import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "../store";
const initialState={
    sidebar:{
        open:false,
        type:"CONTACT",//contact/shared/starred
    }
}
const slice=createSlice({
    name:"app",
    initialState,
    reducers:{
    //toggleSidebar
    toggleSidebar(state,action) {
        state.sidebar.open=!state.sidebar.open;
    },
    updateSidebarType(state,action){
        state.sidebar.type=action.payload.type;
    },
}})
export default slice.reducer;
export function toggleSidebar(){
    return async (dispatch,getState)=>{
        dispatch(slice.actions.toggleSidebar())
    }
}
export function updateSidebarType(type){
  return async (dispatch,getState)=>{
     dispatch(slice.actions.updateSidebarType({type}))
  }
}