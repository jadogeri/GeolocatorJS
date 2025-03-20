// Save state to LocalStorage
const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('geolocatorReduxState', serializedState);
    } catch (err) {
      console.error('Error saving state:', err);
    }
  };
  
  // Load state from LocalStorage
 const loadState = () => {
    try {
      const serializedState = localStorage.getItem('geolocatorReduxState');
      console.log("loading state..............................")
      console.log(serializedState)
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error('Error loading state:', err);
      return undefined;
    }
  };

// import { encryptData } from "../utils/encryptData";
// import { decryptData } from "../utils/decryptData";

// // Save state to LocalStorage
// export const saveState = (state) => {
//   try {
//     const encryptedState = encryptData(state);
//     localStorage.setItem('reduxState', encryptedState);
//   } catch (err) {
//     console.error('Error saving state:', err);
//   }
// };

// // Load state from LocalStorage
// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     console.log("loading encrypted state..............................")
//     console.log(serializedState)
//     return serializedState ? decryptData(serializedState) : undefined;
//   } catch (err) {
//     console.error('Error loading state:', err);
//     return undefined;
//   }
// };


export {saveState, loadState}