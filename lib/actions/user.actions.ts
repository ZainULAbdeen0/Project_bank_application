"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appWrite"
import { cookies } from "next/headers";
import { parseStringify } from "../utils";


export const signIn = async ({email , password}:signInProps)=>{
    try{
      const { account } = await createAdminClient();
       const user = account.createEmailPasswordSession(email,password);
       return parseStringify(user);
    }catch(error){
        console.log("Error: ", error)
    }
}

export const signUp = async (data:SignUpParams)=>{
  console.log(data);
    const {email, password, firstName, lastName} = data;
    try{
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password,
            `${firstName} ${lastName}`,
        );
        const session = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount);
    }catch(error){
        console.log("Error: ", error)
    }
}


export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user=  await account.get();
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }

  export async function logoutAccount() {
    try {
      const { account } = await createSessionClient();
      cookies().delete("appwrite-session");
      await account.deleteSession('current');
    } catch (error) {
      return null;
    }
  }
  
  