import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './auth';

const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => (
                auth.loggedIn() ?
                    <Redirect
                        to={{
                            pathname: "/Dashboard",
                            state: {
                                from: props.location
                            }
                        }}
                    />
                    :
                    <Component {...props} />
            )}
        />
    );
};

export default PublicRoute;