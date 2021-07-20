import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './auth';

const PrivateRoute = ({
    component: Component, data,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.loggedIn()) {
                    return <Component {...props} {...data} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;