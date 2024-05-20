import { createSlice } from "@reduxjs/toolkit";
 const checkDevice = ()=>{
        const deviceWidth = window.innerWidth;
        if(deviceWidth <= 480)
                return 'mobile';
        else if(deviceWidth <= 768)
                 return 'tablet';
        else if(deviceWidth <= 1024 && /iPad/.test(navigator.userAgent))
                 return 'iPad';
        else
                 return 'desktop';
}
const initialState = {
        DeviceType:checkDevice(),
        Theme:'blue'
}

 const webSlice = createSlice({
        name:'web',
        initialState,
        reducers:{
                setTheme:(state,action)=>{
                        state.Theme = action.payload
                }
        }
})
export default webSlice.reducer;
export const {setTheme} = webSlice.actions;