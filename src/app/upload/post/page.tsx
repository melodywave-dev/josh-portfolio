'use client';

import { useState, useRef } from 'react';

export default async function Posts() {

  const inputDescriptionRef = useRef<HTMLInputElement>(null);

  return (
  <div>
    <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputDescriptionRef.current?.value) {
            throw new Error('Description was not included');
          }

          //newPost()
        }}
      >
        <input name="description" ref={inputDescriptionRef} type="text" required />
        <button type="submit">Upload</button>
      </form>
    <pre></pre>
  </div>
  );
  
}