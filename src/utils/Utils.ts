export const numFormatter = (num: number) => {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K';
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M';
    }else if(num < 900){
        return num;
    }
};

export const serializeQuery = (query: any) => {
    return Object.keys(query)
        .map((key:string) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
