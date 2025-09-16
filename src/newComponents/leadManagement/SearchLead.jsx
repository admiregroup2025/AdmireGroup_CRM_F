import { useState } from "react";

const SearchLead = () => {
    const [ text, setText ] = useState('');

  return (
    <div className='bg-[#f3f3f5] w-fit px-1 py-2 flex gap-2 rounded-md'>
        <div className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></div>
        {/* <input className='text-black bg-gray-200 focus:border-gray-600 focus:outline-none focus:ring-2' placeholder="Search users..." type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/> */}
        <input
  className="text-black bg-[#f3f3f5] focus:border-gray-600 focus:outline-none focus:ring-0"
  placeholder="Search leads..."
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>

    </div>
  )
}

export default SearchLead