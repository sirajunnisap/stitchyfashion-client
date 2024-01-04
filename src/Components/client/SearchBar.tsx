import React, { useEffect, useState } from 'react';
import { courseType } from '../../Models/Models';
import { searchCoursesUser } from '../../Services/search/search';
import './searchBar.css'
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const [input, setInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<courseType[]>([]);
  const [courseData, setCourseData] = useState<courseType[] | undefined>(undefined);

  const navigate = useNavigate()
  const handleChange = async (value: string) => {
    setInput(value);

    try {
      const result = await searchCoursesUser(value);
      setSearchResults(result);
      setCourseData(result);
    } catch (error) {
      console.log('error searching users:', error);
    }
  }

  useEffect(() => {
    handleChange(input);
  }, []);

  return (
    <div className="">
      <div className="fixed right-80 top-6 lg:fixed lg:right-90 lg:top-6">
        <div className="search">
          <input
            type="text"
            className="searchbox text-sm text-#07778B"
            placeholder="Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <span className="search-btn-wrap">
            <button className="search-btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </span>
          <div>
            {input !== '' && (
              <div className='border absolute mt-11 w-full px-5 bg-white flex flex-col rounded-lg max-h-80 overflow-auto custom-scrollbar z-50'>
                {courseData?.map((item) => {
                  return(
                    <div  className='search-result flex justify-between border-b' key={item?._id} onClick={()=>navigate(`/courseDetails/${item?._id}`)}>
                    <h1 className='font-bold text-gray-500 w-full py-2 hover:bg-gray-100'>{item?.title}</h1>
                    {/* <p className='text-sm site-txt-color'>{item?.category}</p> */}
                 
                  </div>
                  )
                })}
                
         
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;