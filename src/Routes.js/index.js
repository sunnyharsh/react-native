import React, { useState } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routing = () => {
    const [isEnable, setEnable] = useState(false)
    const enablePrivate = () => {
        setEnable(true)
    }
    return (
        <>
            {
                isEnable ? <PrivateRoute /> : <PublicRoute enablePrivate={enablePrivate} />
            }
        </>
    )
}

export default Routing;