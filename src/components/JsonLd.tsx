// src/components/JsonLd.tsx
'use client';

import { useEffect } from 'react';

type JsonLdProps = {
  data: object;
};

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const scriptId = 'json-ld-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.innerHTML = JSON.stringify(data);

    // Optional: Cleanup script on component unmount
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [data]);

  return null;
}
