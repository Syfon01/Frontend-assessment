// SessionManager.js

import { useQuery, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

// Function to fetch user data from localStorage
export async function fetchUserData() {
  const userData = localStorage.getItem('userData');
  return JSON.parse(userData);
}

// Function to set user data in localStorage
export async function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

export function isUserAuthenticated() {
  const userData = localStorage.getItem('userData');
  return !!userData; // Returns true if user data exists, false otherwise
}


// Function to remove user data from localStorage
async function removeUserData() {
  localStorage.removeItem('userData');
}

// Define a function for authentication (replace with your own logic)
export async function authenticateUser(formData, registrationData) {
  console.log(registrationData);
  console.log(formData.registrationData)
  try {
    if (
      formData.formData.email === formData.registrationData.contactEmail &&
      formData.formData.password === formData.registrationData.password
    ) {
      const userSession = { user: formData.registrationData };
      setUserData(userSession);
      console.log(userSession)
      return userSession;
    } else {
      throw new Error('Invalid email or password. Please try again.');
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message); 
    throw error; 
  }
}
// Define a function for logout (replace with your own logic)
export async function logoutUser() {
  removeUserData();
}



// Custom hook for user authentication
export function useAuth() {
  const queryClient = useQueryClient();

  const loginMutation = useMutation(authenticateUser, {
    onSuccess: (data) => {
      // Store user data in React Query cache and localStorage
      queryClient.setQueryData('user', data);
      toast.success('Login successful!');
    },
  });

  const logoutMutation = useMutation(logoutUser, {
    onMutate: () => {
      // Remove user data from React Query cache and localStorage
      queryClient.removeQueries('user');
    },
    onSuccess: () => {
      toast.success('Logout successful!');
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
  };
}
