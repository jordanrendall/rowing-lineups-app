import React from 'react';
import Link from 'next/link'

const page2 = () => {
  return (
    <div>
      <h2>Welcome to page 2</h2>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default page2;
