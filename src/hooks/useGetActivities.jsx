import { useState, useEffect } from 'react';
import { query, collection, where, onSnapshot, orderBy } from 'firebase/firestore'
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { database } from "../pages/firebase-config";

export const useGetActivities = () => {
    const [activities, setActivities] = useState([])
    
    const activityRef = collection(db, "activities");
    const {userID} = useGetUserInfo()
  
    const getActivity = async () => {
      let cleanup
      try {
        const queryActivity = query(activityRef, where('userID', "==", userID),
        orderBy('createdAt'))
  
        cleanup = onSnapshot(queryActivity, (snapshot) => {
          let snaps = []
            snapshot.forEach((snap) => {
            const data = snap.data()
            const id = snap.id
  
            snaps.push({...data, id})
          })
          setActivities(snaps)
        })
      } catch (error) {
        console.error(error)
      }
      return () => cleanup()
    }
  
    useEffect(() => {
      getActivity()
    }, [])
    
    return { activities }
  }
