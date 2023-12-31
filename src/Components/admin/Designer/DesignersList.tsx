import React,{useState,useEffect} from 'react'
import Home from '../Home/Home'
import { designerType } from '../../../Models/Models'
import { getAllDesignerData } from '../../../Services/designer/designerData'
import { blockDesigner } from '../../../Services/admin/adminData'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


function DesignersList() {
  
  const [designersData, setDesignersData] = useState<designerType[] | undefined>(undefined)
  const [searchResults,setSearchResults] = useState<designerType[]>([]);

  useEffect(() => {

    const getDesigners = async () => {
      try {

        const Designers = await getAllDesignerData()
        setDesignersData(Designers)

      } catch (error: any) {
        console.log(error);
      }
    }
    getDesigners()
  }, [])

  const designerBlockingHandle = async (designer:designerType) => {
    try {
     
        const designerId = designer._id;
        const action = designer.isBlocked ? 'unblock' : 'block';

        
        try {
          const blockedDesigner = await blockDesigner(designerId, action);
          if (blockedDesigner) {
            const updatedDesignerData = designersData?.map((u) => (u._id === designerId ? { ...u, isBlocked: !u.isBlocked } : u));
          setDesignersData(updatedDesignerData);
          }
          return blockedDesigner;
        } catch (error) {
          console.error(`Error ${action === 'block' ? 'blocking' : 'unblocking'} user with ID ${designerId}:`, error);
          return null;
        }
      
   } catch (error) {
      console.error('Error handling blocking/unblocking:', error);
     }
  };

  const updateSearchResults = (results:designerType[])=>{
    setDesignersData(results)
  }

  return (
    <div >

     <div className='mt-5 pr-40 pb-10'>
      <SearchBar updateSearchResults={updateSearchResults} />

      
      </div>
      <div className='flex'>
      <div className=" ml-60 w-4/5 pr-16">
<div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
    {/* <div>
      <h2 className="font-semibold text-gray-700">Designers Accounts</h2>
      <span className="text-xs text-gray-500">View accounts of registered designers</span>
    </div> */}
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40">
        {/* <button className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>

          Add User
        </button> */}
      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">
      <table className="w-full ">
        <thead>
          <tr className="bg-[#0F5762] text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">ID</th>
            <th className="px-1 py-3">Name</th>
            <th className="px-1 py-3">Email</th>
            <th className="px-1 py-3">Phone</th>
            {/* <th className="px-1 py-3">Education</th>
            <th className="px-1 py-3">Experience</th>
            <th className="px-1 py-3">skill</th> */}
            <th className="px-1 py-3">Status</th>
            <th className="px-1 py-3">More Info</th>
          </tr>
        </thead>

      
          <tbody className="text-gray-500">
          {
                      designersData?.map((designer: designerType, index) => {
                        return (
                          <tr>
                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                              <p key={designer._id} className="whitespace-no-wrap">{index + 1}</p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                              <div className="flex items-center">
                                {/* <div className="h-10 w-10 flex-shrink-0">
                                  <img className="h-full w-full rounded-full" src="/profileimage.jpg" alt="" />
                                </div> */}
                                <div className="ml-3">
                                  <p className="whitespace-no-wrap">{designer.name}</p>
                                </div>
                              </div>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                              <p className="whitespace-no-wrap">{designer.email}</p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                              <p className="whitespace-no-wrap">{designer.phone}</p>
                            </td>
                            {/* <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                              <p className="whitespace-no-wrap">{designer.education.map((educationItem)=>educationItem.major)}</p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                              <p className="whitespace-no-wrap">{designer.experience}</p>
                            </td>
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
                            <p className="whitespace-no-wrap">{designer.skill}</p>
                          </td> */}
                            <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
    <button
      className={`rounded-full ${designer.isBlocked ? 'bg-red-300' :'bg-[#44a0ae]'} px-3 py-1 text-xs font-semibold ${designer.isBlocked ? 'text-red-900' :'text-green-900' }`}
      onClick={() => designerBlockingHandle(designer)}
    >
      {designer.isBlocked ? 'Block' : 'Unblock'}
    </button>
  </td>

  <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
  <Link
    className='rounded-full px-6 py-1 text-xs font-semibold bg-[#3b929f] text-green-900'
 to={`/admin/getDesignerMoreInfo/${designer?._id}`}
  >
    View
  </Link>
</td>
                          </tr>
                        )
                      })
                    }
            
          </tbody>
      
       
      </table>
    </div>
    {/* <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div> */}
  </div>
</div>
</div>

      </div>



    </div>
  )
}

export default DesignersList
