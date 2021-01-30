// React
import React, { FunctionComponent } from 'react';
// App components
import Banner from 'components/Banner';

const LoggedInHomepage: FunctionComponent = () => {
    return <Banner title="Congrats! You're in." subtitle="What do you wanna build?" />;
};

export default LoggedInHomepage;
