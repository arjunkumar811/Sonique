"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
 const session = useSession();

    return <div>
{session.data?.user &&  <button className="bg-red-600 text-white" onClick={() => signOut()}>LogOut</button> }


<br /><br /><br /><br />

        {!session.data?.user &&  <button className="bg-red-600 text-white" onClick={() => signIn()}>signIn</button> }
        
    </div>
}