const github = new Github;
const ui = new UI;

document.getElementById("searchUser").addEventListener("keyup", (e) => {
  const searchUs = e.target.value;
  if(searchUs !== ""){
    github.get(searchUs).then((data) => {
      if(data.message === "Not Found"){
        ui.showAlert("Not found");
      }else {
      // console.log(reposData);
      ui.showProfile(data);
      github.repos(searchUs).then(dataRepos => {
        console.log(dataRepos);
        dataRepos.forEach(element => {
          ui.createRepos(element);
        });
      })

    }
  })
  } else{
    ui.clearProfile();
  }
  // if(searchUs === "NOT FOUND")
})
