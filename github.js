class GitHub{
    constructor(){
        this.client_ID ='d9cc02c97cff7f77cca1';
        this.client_secret='f813e68c4d76fd324491c9054c7273c1c20a9b0';
        this.repos_count=10;
        this.repos_sort='created: asc';
        this.user='brittaa';
        this.apiUrl='https://api.github.com/users/';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }
}