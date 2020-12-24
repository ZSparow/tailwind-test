import {useState} from 'react';
import "tailwindcss/tailwind.css"
function App() {
  const [isOpen, setIsOpen] = useState("invisible");
return(
  <>
  <div className="flex justify-between items-center py-2 px-5 fixed bg-white w-screen z-10 shadow-md">
    <div className="rounded-full overflow-hidden flex items-center">
      
      <img src="./avatar.png" alt="avatar.png" className="h-10 mr-2"/>
        <h5>user@emaple.com</h5>
    </div>
    <div className="flex content-center">

    <button className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-lg text-white mr-4 focus:outline-none">Log in</button>
    <button className="bg-white border-yellow-400 hover:bg-yellow-200 border-solid border-2 hover:bg-white-300  p-2 rounded-lg mr-4 focus:outline-none">Sign up</button>
    <button className="focus:outline-none" onClick={()=>isOpen === "invisible" ? setIsOpen("visible"): setIsOpen("invisible")}>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

   { isOpen === "invisible" ?
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      :
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      }
      </svg>




      
    </button>
    </div>
    
  </div>
<div className="flex ">


{/* begin of slidebar */}


<div className={`${isOpen} w-3/4 md:w-2/4 lg:w-1/5 h-screen shadow-lg fixed right-0 pt-24 bg-yellow-100`}>
    <div className="flex items-center w-full hover:bg-yellow-400 cursor-pointer px-3 mb-2	">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <h1 className="ml-3">account name</h1>
    </div>
    <div className="flex items-center hover:bg-yellow-400 cursor-pointer px-3 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
      <h1 className="ml-3">setting</h1>
    </div>
    <div className="flex items-center hover:bg-yellow-400 cursor-pointer px-3 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>
      <h1 className="ml-3">about us</h1>
    </div>
  </div>










  {/* begin of main */}
<div>
<div className="p-5 pt-24  w-screen">
  <div className="flex items-center">
    <div className="lg:w-1/2 mr-2">
      <h1 className="md:text-6xl text-3xl font-bold mb-5 capitalize">meet the new cola</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa nesciunt! Sunt eaque tempora asperiores natus, provident ab quo repellat alias blanditiis! Quia cupiditate voluptatibus similique ipsum, illo corporis fuga aperiam enim doloremque id eligendi recusandae sit ipsa repudiandae, minus porro vero fugiat sunt? Debitis cupiditate deleniti est dignissimos a.</p>
    </div>
    <img src="./cola.png" alt="" className="transform rotate-12"/>
  </div>

<div>
<h1 className="md:text-6xl text-3xl font-bold mb-5 capitalize">Yellow is everywhere</h1>


  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-10 items-center justify-items-center">
        <div className="col-span-2">
          <img alt="" src="https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/County_Cork__Credit_Meg_Baggott_1920x1280-700x461.jpg"/>
        </div>
        <div className="">
          <img alt="" src="https://www.liquor.com/thmb/Xi6i5g4u_ZVL_RP-AIsOXkPlvDg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__11__06100319__gin-and-juice-720x720-recipe-a5a7ad4756a34e3eb1e4cdfb3de22392.jpg"/>
        </div>
        <div className="">
          <img alt="" src="https://www.liquor.com/thmb/LkOLr2kF9JSIk6eYU7AwHN_Bzj4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/frenchie-720x720-primary-89663f9590404dcaa3c8972ff5317438.jpg"/>
        </div>
        <div className="col-span-2">
          <img alt="" src="https://njmonthly.com/wp-content/uploads/cache/2019/05/image001_HOR/2682996656.jpg"/>
        </div>
        <div className="col-span-2">
          <img alt="" src="https://www.liquor.com/thmb/EAouRpOdcSpwcefW7ZcPdlerHcM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__22144952__13-Turmeric-Cocktails-to-Drink-in-Bars-and-Be-Healthy-pirate-story-720x720-slideshow-841fbdeb4fc040289c6d409ce382d0f6.jpg"/>
        </div>
        <div className="">
          <img alt="" src="https://media.buzzle.com/media/images-en/gallery/drinks/cocktails/600-533958305-screw-driver-cocktail.jpg"/>
        </div>
        <div className="col-span-3">
          <img alt="" src="https://njmonthly.com/wp-content/uploads/cache/2019/05/image001_HOR/2682996656.jpg"/>
        </div>
        
    </div>
</div>
</div>
<footer className="w-screen bg-yellow-300 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h1 className="capitalize font-black text-2xl">this is the footer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae harum reiciendis debitis libero officia, dolorem veniam a optio aliquam!</p>
      </div>
      <div>
        <h1 className="capitalize font-black text-2xl">visit us on social meia</h1>
        <ul>
          <li><a href="https://www.facebook.com">facebook</a></li>
          <li><a href="https://www.twitter.com">twitter</a></li>
          <li><a href="https://www.instagram.com">instagram</a></li>
        </ul>
      </div>
</footer>

</div>
</div>



  </>
)
}

export default App;
