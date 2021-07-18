import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './auth';

const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.loggedIn()) {
                    <Redirect
                            to={{
                                pathname: "/Dashboard",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                } else {
                    return (
                        <Component {...props} />
                    );
                }
            }}
        />
    );
};

export default PublicRoute;