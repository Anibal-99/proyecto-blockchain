import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { Navbar, Sidebar } from './components'
import { useLogout } from '@thirdweb-dev/react';

const App = () => {
  const { logout, isLoading } = useLogout()

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
        <button onClick={() => logout()}>
          {isLoading ? "Logging out..." : "Logout"}
        </button>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
