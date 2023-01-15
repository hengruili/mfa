import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';


export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { currentPath } = history.location;
        if (currentPath !== nextPathname) {
          history.push(nextPathname)
        }
      }
    });

    history.listen((location) => {
      if (onParentNavigate) {
        onParentNavigate(location);
      }
    });
   //history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>
}