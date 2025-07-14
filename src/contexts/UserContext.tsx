import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  ecoPoints: number;
  co2Offset: number;
  itemsRecycled: number;
}

interface UserContextType {
  user: User | null;
  updateUser: (updates: Partial<User>) => void;
  addEcoPoints: (points: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    ecoPoints: 2450,
    co2Offset: 15.7,
    itemsRecycled: 23
  });

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const addEcoPoints = (points: number) => {
    setUser(prev => prev ? { ...prev, ecoPoints: prev.ecoPoints + points } : null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addEcoPoints }}>
      {children}
    </UserContext.Provider>
  );
};