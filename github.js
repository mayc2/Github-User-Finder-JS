class Github {
    constructor() {
        this.client_id = '99827b26964245c6cd08';
        this.client_secret = '275b46fb8e4cf894a80d32e4c406cab1651f4b5b';
        this.base_url = `https://api.github.com`
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`${this.base_url}/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`${this.base_url}/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return  { profile, repos }
    }
}