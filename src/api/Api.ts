export const getModules = (query: string): Promise<unknown> => {
    return fetch('https://libraries.io/api/bower-search'+query)
        .then( (response:any) => {
            // response.headers.forEach(console.log);
            console.log('header', response.headers['Per-Page']);
            return response.json();
        })
        .catch(error => {throw new Error(error)});
};
