class UI{
  constructor(){
    this.profile = document.getElementById("profile");
  }
  showProfile(user, dataRepos){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}
          </span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span
          <br><br>
          <ul class="list-group">
            <loi class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3"> Latest Repos:</h3>
    <div id="repos">
    <div class="
    </div>
    
    `

  

}
clearProfile(){
  this.profile.innerHTML = " ";
}
showAlert(text){
    this.deleteAlert();
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.innerText = text;
    document.querySelector(".bef").prepend(div);
    setTimeout(() => {
      this.deleteAlert();
    }, 3000)

  }
deleteAlert(){
  const current = document.querySelector(".alert");
  if(current){
    current.remove()
  }
}
createRepos(element){
  const ser = document.createElement("div");
  ser.className = "container"
  ser.innerHTML = `Repos: ${element.name}`;
  const repos = document.querySelector("#repos")
  repos.prepend(ser);
}
}
