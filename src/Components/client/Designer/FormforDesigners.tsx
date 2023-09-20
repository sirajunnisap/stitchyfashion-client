
import React from 'react'
import FooterHome from '../FooterHome'

function FormforDesigners() {
  return (
    <div>
    
    <div className="p-10 container mx-auto flex justify-evenly gap-10 flex-wrap">
      <div className="relative h-24 w-60 sm:w-96">
        <label className="absolute top-3 left-5 pointer-events-none" htmlFor="name">
          Name
        </label>
        <input
          className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all"
          id="name"
          type="text"
          name="name"
          value=""
        />
        <div className="absolute right-5 bottom-4 pointer-events-none">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <div className="relative h-24 w-60 sm:w-96">
        <label
          className="absolute top-3 left-5 pointer-events-none text-rose-500"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="h-full w-full pt-10 pl-5 pr-10 border border-rose-500 rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-rose-300 focus:border-rose-500 transition-all"
          id="password"
          type="password"
          name="password"
          value=""
        />
        <div className="absolute right-4 bottom-4 cursor-pointer" title="Show/Hide password">
          <i className="fa-solid fa-eye text-rose-500"></i>
        </div>
        <small className="text-rose-500 ml-5">Error message</small>
      </div>
      <div className="relative h-24 w-60 sm:w-96">
     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="email">Email</label>
     <input className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all" id="email" type="text" name="email" value="" />
    <div className="absolute right-5 bottom-4 pointer-events-none">
      <i className="fa-solid fa-envelope"></i>
     </div>
   </div>

   <div className="relative h-24 w-60 sm:w-96">
     <label className="hidden absolute top-3 left-5 pointer-events-none" htmlFor="file">File</label>
     <input className="h-full w-full p-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all" id="file" type="file" name="name" value="" />
     <div className="absolute right-5 bottom-9 pointer-events-none">
       <i className="fa-solid fa-cloud-arrow-up"></i>
     </div>
   </div>

   <div className="relative h-24 w-60 sm:w-96">
     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="date">Date</label>
     <input className="h-full w-full pt-10 pl-5 pr-10 border border-green-500 rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-green-300 focus:border-green-500 transition-all" id="date" type="date" name="date" value="" />
     <div className="absolute right-5 bottom-4 pointer-events-none">
       <i className="fa-solid fa-calendar text-green-500"></i>
     </div>
   </div>
   <div className="relative h-fit w-60 sm:w-96">
        <ul className="text-black bg-white border border-gray-200 rounded-lg overflow-hidden">
          <li className="w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 cursor-pointer">
                Vue JS
              </label>
            </div>
            <div className="absolute right-5 bottom-16 pointer-events-none">
              <i className="fa-brands fa-vuejs"></i>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="react-checkbox" className="w-full py-3 ml-2 cursor-pointer">
                React
              </label>
            </div>
            <div className="absolute right-5 bottom-4 pointer-events-none">
              <i className="fa-brands fa-react"></i>
            </div>
          </li>
        </ul>
      </div>
      
   <div className=" h-fit w-60 sm:w-96">
     <ul className="text-black bg-white border border-gray-200 rounded-lg overflow-hidden">
      <li className="relative w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
         <div className="flex items-center pl-3">
           <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
           <label htmlFor="list-radio-license" className="w-full py-3 ml-2 cursor-pointer">Driver License </label>
         </div>
         <div className="absolute right-5 bottom-3 pointer-events-none">
           <i className="fa-solid fa-id-card"></i>
         </div>
       </li>
       <li className="relative w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
         <div className="flex items-center pl-3">
           <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
           <label htmlFor="list-radio-id" className="w-full py-3 ml-2 cursor-pointer">State ID</label>
         </div>
         <div className="absolute right-5 bottom-3 pointer-events-none">
           <i className="fa-solid fa-address-card"></i>
         </div>
       </li>
     </ul>
   </div>

   <div className="relative w-60 sm:w-96">
     <div className="text-black bg-white flex-grow text-center border rounded-xl px-4 py-3 mb-4">
       <div className="pointer-events-none">
         <i className="fa-solid fa-address-card"></i>
       </div>
       <p className="text-xs mb-4 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Duo Reges: constructio interrete.</p>
       <label className="relative inline-flex items-center cursor-pointer">
         <input type="radio" name="radio" id="radio" value="1" className="sr-only peer"/>
         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
       </label>
     </div>
   </div>

   <div className="relative h-24 w-60 sm:w-96">
        <label htmlFor="countries" className="absolute top-3 left-5 pointer-events-none">
          Select an option
        </label>
        <select
          id="countries"
          className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all"
        >
          <option value="" selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <div className="absolute right-5 bottom-4 pointer-events-none">
          <i className="fa-solid fa-map"></i>
        </div>
      </div>

      <div className="relative h-96 w-60 sm:w-full">
        <label className="absolute top-3 left-5 pointer-events-none" htmlFor="msg">
          Message
        </label>
        <textarea
          className="h-full w-full pt-10 pl-5 pr-5 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 resize-none transition-all"
          id="msg"
          name="msg"
          value=""
        />
        <div className="absolute right-5 bottom-4 pointer-events-none">
          <i className="fa-solid fa-message"></i>
        </div>
      </div>

    </div>
    <div className="flex justify-center">
   <button className="h-14 w-60 sm:w-96 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white uppercase font-bold focus:outline-none focus:ring focus:ring-indigo-300 transition-all">s u b m i t</button>
 </div>
 <FooterHome/>
    </div>
  )
}

export default FormforDesigners
// import React from 'react';

// const FormComponent: React.FC = () => {
//   return (
//     <div>
//         <div className="p-10 container mx-auto flex justify-evenly gap-10 flex-wrap">
//   <div className="relative h-24 w-60 sm:w-96">
//     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="name">Name</label>
//     <input className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all" id="name" type="text" name="name" value="" />
//     <div className="absolute right-5 bottom-4 pointer-events-none">
//       <i className="fa-solid fa-user"></i>
//     </div>
//   </div>

//   <div className="relative h-24 w-60 sm:w-96">
//     <label className="absolute top-3 left-5 pointer-events-none text-rose-500" htmlFor="password">Password</label>
//     <input className="h-full w-full pt-10 pl-5 pr-10 border border-rose-500 rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-rose-300 focus:border-rose-500 transition-all" id="password" type="password" name="password" value="" />
//     <div className="absolute right-4 bottom-4 cursor-pointer" title="Show/Hide password">
//       <i className="fa-solid fa-eye text-rose-500"></i>
//     </div>
//     <small className="text-rose-500 ml-5">Error message</small>
//   </div>

//   <div className="relative h-24 w-60 sm:w-96">
//     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="email">Email</label>
//     <input className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all" id="email" type="text" name="email" value="" />
//     <div className="absolute right-5 bottom-4 pointer-events-none">
//       <i className="fa-solid fa-envelope"></i>
//     </div>
//   </div>

//   <div className="relative h-24 w-60 sm:w-96">
//     <label className="hidden absolute top-3 left-5 pointer-events-none" htmlFor="file">File</label>
//     <input className="h-full w-full p-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all" id="file" type="file" name="name" value="" />
//     <div className="absolute right-5 bottom-9 pointer-events-none">
//       <i className="fa-solid fa-cloud-arrow-up"></i>
//     </div>
//   </div>

//   <div className="relative h-24 w-60 sm:w-96">
//     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="date">Date</label>
//     <input className="h-full w-full pt-10 pl-5 pr-10 border border-green-500 rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-green-300 focus:border-green-500 transition-all" id="date" type="date" name="date" value="" />
//     <div className="absolute right-5 bottom-4 pointer-events-none">
//       <i className="fa-solid fa-calendar text-green-500"></i>
//     </div>
//   </div>

//   <div className="relative h-fit w-60 sm:w-96">
//     <ul className="text-black bg-white border border-gray-200 rounded-lg overflow-hidden">
//       <li className="w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
//         <div className="flex items-center pl-3">
//           <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
//           <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 cursor-pointer">Vue JS</label>
//         </div>
//         <div className="absolute right-5 bottom-16 pointer-events-none">
//           <i className="fa-brands fa-vuejs"></i>
//           <div>
//       </li>
//       <li className="w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
//         <div className="flex items-center pl-3">
//           <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
//           <label htmlFor="react-checkbox" className="w-full py-3 ml-2 cursor-pointer">React</label>
//         </div>
//         <div className="absolute right-5 bottom-4 pointer-events-none">
//           <i className="fa-brands fa-react"></i>
//         </div>
//       </li>
//     </ul>
//   </div>

//   <div className=" h-fit w-60 sm:w-96">
//     <ul className="text-black bg-white border border-gray-200 rounded-lg overflow-hidden">
//       <li className="relative w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
//         <div className="flex items-center pl-3">
//           <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
//           <label htmlFor="list-radio-license" className="w-full py-3 ml-2 cursor-pointer">Driver License </label>
//         </div>
//         <div className="absolute right-5 bottom-3 pointer-events-none">
//           <i className="fa-solid fa-id-card"></i>
//         </div>
//       </li>
//       <li className="relative w-full border-b border-gray-200 hover:bg-gray-200 transition-all">
//         <div className="flex items-center pl-3">
//           <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
//           <label htmlFor="list-radio-id" className="w-full py-3 ml-2 cursor-pointer">State ID</label>
//         </div>
//         <div className="absolute right-5 bottom-3 pointer-events-none">
//           <i className="fa-solid fa-address-card"></i>
//         </div>
//       </li>
//     </ul>
//   </div>

//   <div className="relative w-60 sm:w-96">
//     <div className="text-black bg-white flex-grow text-center border rounded-xl px-4 py-3 mb-4">
//       <div className="pointer-events-none">
//         <i className="fa-solid fa-address-card"></i>
//       </div>
//       <p className="text-xs mb-4 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Duo Reges: constructio interrete.</p>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input type="radio" name="radio" id="radio" value="1" className="sr-only peer"/>
//         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       </label>
//     </div>
//   </div>

//   <div className="relative h-24 w-60 sm:w-96">
//     <label htmlFor="countries" className="absolute top-3 left-5 pointer-events-none">Select an option</label>
//     <select id="countries" className="h-full w-full pt-10 pl-5 pr-10 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 transition-all">
//       <option selected>Choose a country</option>
//       <option value="US">United States</option>
//       <option value="CA">Canada</option>
//       <option value="FR">France</option>
//       <option value="DE">Germany</option>
//     </select>
//     <div className="absolute right-5 bottom-4 pointer-events-none">
//       <i className="fa-solid fa-map"></i>
//     </div>
//   </div>

//   <div className="relative h-96 w-60 sm:w-full">
//     <label className="absolute top-3 left-5 pointer-events-none" htmlFor="msg">Message</label>
//     <textarea className="h-full w-full pt-10 pl-5 pr-5 border rounded-2xl bg-white text-black focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 resize-none transition-all" id="msg" type="text" name="msg" value="" /></textarea>
//     <div className="absolute right-5 bottom-4 pointer-events-none">
//       <i className="fa-solid fa-message"></i>
//     </div>
//   </div>

// </div>
// <div className="flex justify-center">
//   <button className="h-14 w-60 sm:w-96 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white uppercase font-bold focus:outline-none focus:ring focus:ring-indigo-300 transition-all">s u b m i t</button>
// </div>
//     </div>
//   );
// };

// export default FormComponent;
