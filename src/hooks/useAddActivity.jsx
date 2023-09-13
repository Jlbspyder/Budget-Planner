import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../auth/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddActivity = () => {
  const activityRef = collection(db, "activities");
  const { userID } = useGetUserInfo();
  const addTransaction = async ({ description, amount }) => {
    await addDoc(activityRef, {
      userID,
      description,
      amount,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};
