class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });

    // this.display();
  }

  display(data) {
    document.querySelector('#repo-name').innerHTML = data.full_name;
    document.querySelector('#repo-description').innerHTML = data.description;

    
    if (document.querySelectorAll('#repo-info-container img').length == 0) {
      const img = document.createElement('img');
      img.src = data.organization.avatar_url;
      document.querySelector('#repo-info-container').append(img);
    } else {
      document.querySelector('#repo-info-container img').src = data.organization.avatar_url;
    }
  }
}

module.exports = GithubView;