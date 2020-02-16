export const getModules = async (query: string): Promise<unknown> => {
    return await fetch('https://libraries.io/api/bower-search'+query)
        .then(async response => {
            response.headers.forEach(console.log);
            return await response.json();
        })
        .catch(error => {throw new Error(error)});
};
