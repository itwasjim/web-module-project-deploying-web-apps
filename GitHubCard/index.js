document.addEventListener('DOMContentLoaded', function() {

const githubUserData = {
  tetondan: {
    avatar_url: 'https://avatars.githubusercontent.com/u/28383664?v=4',
    name: 'Daniel T.',
    login: 'tetondan',
    location: 'Wisconsin',
    html_url: 'https://github.com/tetondan',
    followers: 398,
    following: 9,
    bio: 'Full-stack developer. Enthusiast in web technologies.'
  },
  dustinmyers: {
    avatar_url: 'https://avatars.githubusercontent.com/u/11372289?v=4',
    name: 'Dustin M.',
    login: 'dustinmyers',
    location: 'Ohio',
    html_url: 'https://github.com/dustinmyers',
    followers: 458,
    following: 22,
    bio: 'Passionate about coding and open-source projects.'
  },
  justsml: {
    avatar_url: 'https://avatars.githubusercontent.com/u/18138328?v=4',
    name: 'John S.',
    login: 'justsml',
    location: 'California',
    html_url: 'https://github.com/justsml',
    followers: 309,
    following: 9,
    bio: 'Web developer. Coffee lover. Explorer of new technologies.'
  },
  luishrd: {
    avatar_url: 'https://avatars.githubusercontent.com/u/19872477?v=4',
    name: 'Luis H.',
    login: 'luishrd',
    location: 'Spain',
    html_url: 'https://github.com/luishrd',
    followers: 234,
    following: 17,
    bio: 'Passionate coder. Building cool stuff with JavaScript.'
  },
  bigknell: {
    avatar_url: 'https://avatars.githubusercontent.com/u/15878727?v=4',
    name: 'Kevin N.',
    login: 'bigknell',
    location: 'New York',
    html_url: 'https://github.com/bigknell',
    followers: 175,
    following: 12,
    bio: 'Software engineer. Enthusiastic about new technologies.'
  }
};

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(username => {
  document.querySelector('.cards').appendChild(githubCard(githubUserData[username]));
});

function githubCard(gitInfo) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');

  img.src = gitInfo.avatar_url;
  img.alt = 'github user';
  name.textContent = gitInfo.name;
  login.textContent = gitInfo.login;
  location.textContent = gitInfo.location;
  profile.textContent = 'Profile';
  profileLink.textContent = 'Link to profile';
  profileLink.href = gitInfo.html_url;
  followers.textContent = `Followers: ${gitInfo.followers}`;
  following.textContent = `Following: ${gitInfo.following}`;
  bio.textContent = gitInfo.bio;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

});