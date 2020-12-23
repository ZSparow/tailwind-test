import {useState} from 'react';
import "tailwindcss/tailwind.css"
function App() {
  const [isOpen, setIsOpen] = useState("invisible");
return(
  <>
  <div className="flex justify-between items-center p-2 fixed bg-white w-screen z-10 shadow-md">
    <div className="rounded-full overflow-hidden flex items-center">
      
      <img src="./avatar.png" alt="avatar.png" className="h-10 mr-2"/>
        <h5>user@emaple.com</h5>
    </div>
    <div className="flex content-center">

    <button className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-lg text-white mr-4 focus:outline-none">Log in</button>
    <button className="bg-white border-yellow-400 hover:bg-yellow-200 border-solid border-2 hover:bg-white-300  p-2 rounded-lg mr-4 focus:outline-none">Sign up</button>
    <button className="focus:outline-none" onClick={()=>isOpen === "invisible" ? setIsOpen("visible"): setIsOpen("invisible")}>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

   { isOpen === "invisible" ?
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      :
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      }
      </svg>




      
    </button>
    </div>
    
  </div>
<div className="flex ">
  {/* begin of main */}
  <div className="h-screen w-screen p-5 pt-24 flex items-center">
    <div className="lg:w-1/2 mr-2">
      <h1 className="md:text-6xl text-3xl font-bold mb-5 capitalize">meet the new cola</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa nesciunt! Sunt eaque tempora asperiores natus, provident ab quo repellat alias blanditiis! Quia cupiditate voluptatibus similique ipsum, illo corporis fuga aperiam enim doloremque id eligendi recusandae sit ipsa repudiandae, minus porro vero fugiat sunt? Debitis cupiditate deleniti est dignissimos a.</p>
    </div>
    <img src="./cola.png" alt="cola image" className="transform rotate-12"/>
  </div>
  {/* begin of slidebar */}


  <div className={`${isOpen} w-3/4 md:w-2/4 lg:w-1/5 h-screen shadow-lg fixed right-0 pt-24 bg-yellow-100`}>
    <div className="flex items-center w-full hover:bg-yellow-400 cursor-pointer px-3 mb-2	">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <h1 className="ml-3">account name</h1>
    </div>
    <div className="flex items-center hover:bg-yellow-400 cursor-pointer px-3 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
      <h1 className="ml-3">setting</h1>
    </div>
    <div className="flex items-center hover:bg-yellow-400 cursor-pointer px-3 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>
      <h1 className="ml-3">about us</h1>
    </div>
  </div>
</div>
  </>
)
}

export default App;
