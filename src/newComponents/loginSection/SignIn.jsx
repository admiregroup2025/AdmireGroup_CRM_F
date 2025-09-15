import React from "react";

const SignIn = () => {
    return <div class="grid grid-cols-1 md:grid-cols-2 bg-white h-screen w-full ">

          
            <div class="bg-[linear-gradient(180deg,#E9F0FB_0%,#F6FBFF_100%)] flex flex-col justify-center items-center p-6">
              <div class="flex flex-col items-center justify-center gap-4 text-center">
                <img src="https://images.unsplash.com/photo-1646215993316-c98f642303ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBDUk18ZW58MXx8fHwxNzU3ODg5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" class="rounded-md w-72 h-40 md:w-96 md:h-52 object-cover"/>
                <h3 class="text-[#0F2133] text-lg md:text-xl text-center">Welcome To CRM PRO</h3>
                <span class='text-gray-500 text-sm md:text-base px-2 md:px-0'>Manage your customer relationships with our powerful, intuitive platform</span>
              </div>
             
            </div>
            <div class=" flex flex-col justify-center px-4 py-8">
                <div class="px-4 py-4 flex flex-col justify-center items-center">
             
              <div class="bg-white gap-4 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
                 <div class="flex justify-center items-center flex-col gap-2">
                <button class="bg-black rounded-md px-4 py-3 text-white">C</button>
                <p class="text-sm md:text-base">CRM Pro</p>
              </div>
                <div class="flex flex-col justify-center items-center gap-3">
                    <p>Welcome back</p>
                    <p>Sign in to your account</p>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col">
                    <label>
                        Email
                   
                    </label>
                     <input type="email" placeholder="Enter your email" class="bg-[#FBFDFF] outline-none border rounded-lg px-2 py-3" />
                    </div>
                    <div class="flex flex-col">
  <label>Password</label>

  <div class="relative w-full">
    <input 
      type="password" 
      placeholder="Enter your password" 
      class="bg-[#FBFDFF] outline-none border rounded-lg px-2 py-3 w-full pr-10" 
      id="password"
    />
    {/* <!-- Eye Icon --> */}
    <svg id="eyeOpen" xmlns="http://www.w3.org/2000/svg" 
         class="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M2.458 12C3.732 7.943 7.523 5 
               12 5c4.478 0 8.268 2.943 
               9.542 7-1.274 4.057-5.064 
               7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  </div>
</div>
                    <button class="bg-black w-full text-white py-2">Login</button>
                </div>
                <div class="text-center">Forgot Password?</div>
              </div>
              </div>
            </div>

        
        
    </div>;
};

export default SignIn;
