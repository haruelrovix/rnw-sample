import React from 'react';

export const InputContext = React.createContext({
    onFocus: () => {},
    onBlur: () => {}
});
