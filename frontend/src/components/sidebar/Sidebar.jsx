import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logoutbutton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>

      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      
      <Logoutbutton />
      
    </div>
  )
};

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import Logoutbutton from './Logoutbutton';

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>

//       <SearchInput />
//       <div className='divider px-3'></div>
//       <Conversations />
      
//       <Logoutbutton />
      
//     </div>
//   )
// };

// export default Sidebar;
