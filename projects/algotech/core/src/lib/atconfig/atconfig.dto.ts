export class ATConfigDto {
    public baseUrl = `${process.env.API_HOST}:${process.env.API_PORT}`;
    public cachePrefix = 'AT-';
    public cacheKey = 'AT-bearer';
}
