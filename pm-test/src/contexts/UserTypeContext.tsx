'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = 'personal' | 'institutional';

interface UserTypeContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const UserTypeContext = createContext<UserTypeContextType | undefined>(undefined);

export const UserTypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>('personal');

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = () => {
  const context = useContext(UserTypeContext);
  if (context === undefined) {
    throw new Error('useUserType must be used within a UserTypeProvider');
  }
  return context;
};

