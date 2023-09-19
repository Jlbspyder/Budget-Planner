import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../auth/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddActivity = () => {
  const activityRef = collection(database, "activities");
  const { userID } = useGetUserInfo();
  const addTransaction = async ({ description, amount }) => {
    await addDoc(activityRef, {
      userID,
      description,
      amount: Number(amount),
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};
