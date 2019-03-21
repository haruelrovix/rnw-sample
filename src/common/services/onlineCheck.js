/* eslint-disable */
export const onlineCheck = () => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            // Set online status
            resolve(true);
        };
        xhr.onerror = () => {
            // Set online status
            reject(false);
        };
        xhr.open('GET', 'http://mockbin.com/request?foo=bar&foo=baz', true);
        xhr.send();
    });
};

// this.onlineCheck().then(() => {
//     console.log ('online');
// }).catch(() => {
//     console.log ('offline')
// });
