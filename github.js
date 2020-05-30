class Github{
  constructor(){
    this.client_id = "0f1bd6f299dbfff91137";
    this.client_secret = 
    '9b07a14a2620794d602eb4c56c0ea0d4a4e1104d'
  };
  async get(user){
    const searchUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const data = await searchUser.json();
    return data;
  }
  async repos(user){
    const repos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposData = await repos.json();
    return reposData;
  }
}