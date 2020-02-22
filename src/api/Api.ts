export const getModules = (query: string): Promise<unknown> => {
    return fetch('https://libraries.io/api/bower-search'+query)
        .then(response => {
            response.headers.forEach(console.log);
            // Unfortunately I can't get total from response headers due to CORS,
            // some Response headers (total, per-page) are present in browser but not accessed by client!!
            // developer console != client
            console.log(response.headers.get('total'));
            return response.json();
        })
        .catch(error => {throw new Error(error)});
};
