/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react'
import { User } from '~/types/user.type'
import { getAccessTokenFromLS, getProfileFromLS } from '~/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        profile,
        setProfile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
