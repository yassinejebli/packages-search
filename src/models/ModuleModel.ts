export class ModuleModel {
    name: string;
    owner: string;
    description: string;
    homepage: string;
    repositoryURL: string;
    keywords: Array<string>;
    stars: number;

    constructor(json: any) {
        const _owner = json.repository_url.split('/').splice(-2, 1);

        this.name = json.name;
        this.owner = _owner.length>0?_owner[0]:'';
        this.description = json.description;
        this.homepage = json.homepage;
        this.repositoryURL = json.repository_url;
        this.keywords = json.keywords;
        this.stars = json.stars;
    }
}
