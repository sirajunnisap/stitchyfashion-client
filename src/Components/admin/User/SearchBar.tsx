import React, { useEffect, useState } from 'react'
import { UserType } from '../../../Models/Models';
import { searchUsersAdmin } from '../../../Services/search/search';

function SearchBar({updateSearchResults}:{updateSearchResults:(results:UserType[])=>void}) {

  const [input, setInput] = useState<string>('');
  const [searchResults,setSearchResults] = useState<UserType[]>([]);

  const handleChange = async(value:string)=>{
    setInput(value);
    
    try {
      const result = await searchUsersAdmin(value);
      setSearchResults(result);
      updateSearchResults(result)
    } catch (error) {
      console.log('error searching users:',error)
    }
  }

  useEffect(()=>{
    handleChange(input)
  },[]);

  return (
    
    <div className=''>


      <div className='ml-96'>
              <div className="search ">
                {/* <form id="searchFormTop" action="" method="get"> */}

                  <input type="text" className="searchbox text-sm text-#07778B " placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
                  <span className="search-btn-wrap ">
                    <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
                  </span>
                {/* </form> */}
              </div>

            
            </div>
      
    </div>
  )
}

export default SearchBar



{/* <div className="search-results">
{searchResults.map((user) => (
  <div key={user._id}>

    <p>{user.name}</p>
  </div>
))}


</div> */}