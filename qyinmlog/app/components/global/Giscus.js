'use client';

import { useEffect, useRef } from 'react';

const Giscus = () => {
  const ref = useRef(null);
  // const { resolvedTheme } = useTheme();
  // console.log(resolvedTheme);
  // https://github.com/giscus/giscus/tree/main/styles/themes
  // const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('data-repo', 'qyinm/blogComment');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKzdmtw');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKzdmt84CbW1r');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '1');
    scriptElem.setAttribute('data-input-position', 'top');
    // scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'en');
    scriptElem.setAttribute('data-loading', 'lazy');

    ref.current.appendChild(scriptElem);
  }, []);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    );
  }, []);

  return <section ref={ref} />;
};

export default Giscus;
