import React from 'react'

async function page() {
    const res = await fetch('/api/send-email', {
        method: 'POST', 
      }
    );
    console.log("res ::",res);
  return (
    <div>Blog page</div>
  )
}

export default page