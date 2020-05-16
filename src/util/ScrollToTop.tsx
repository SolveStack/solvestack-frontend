/**
 * Used to scroll page to top after a route change
 */
import { useEffect, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FunctionComponent = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
