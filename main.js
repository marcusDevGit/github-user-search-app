//Variáveis
const searchBar = document.querySelector(".searchbar_container"); // Seleciona o elemento com a classe "searchbar_container"
const sectionProfile = document.querySelector(".section_profile_wrapper"); // Seleciona o elemento com a classe "section_profile_wrapper"
const root = document.documentElement.style; // Acessa os estilos do elemento raiz do documento
const url = "https://api.github.com/users/"; // URL base da API do GitHub
const get = (param) => document.getElementById(`${param}`); // Função para obter um elemento pelo seu ID
const btnMode = get("btn_mode"); // Seleciona o elemento com o ID "btn_mode"
const modeBtnText = get("mode_btn_text"); // Seleciona o elemento com o ID "mode_btn_text"
const modeIcon = get("mode_icon"); // Seleciona o elemento com o ID "mode_icon"
const input = get("input"); // Seleciona o elemento com o ID "input"
const noresults = get("no_results"); // Seleciona o elemento com o ID "no_results"
const btnSubmit = get("submit"); // Seleciona o elemento com o ID "submit"
const avatar = get("avatar"); // Seleciona o elemento com o ID "avatar"
const userName = get("name"); // Seleciona o elemento com o ID "name"
const user = get("user"); // Seleciona o elemento com o ID "user"
const date = get("date"); // Seleciona o elemento com o ID "date"
const bio = get("bio"); // Seleciona o elemento com o ID "bio"
const months = [
  // Array com os nomes dos meses
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const repos = get("repos"); // Seleciona o elemento com o ID "repos"
const followers = get("followers"); // Seleciona o elemento com o ID "followers"
const following = get("following"); // Seleciona o elemento com o ID "following"
const userLocation = get("location"); // Seleciona o elemento com o ID "location"
const page = get("website"); // Seleciona o elemento com o ID "page"
const twitter = get("twitter"); // Seleciona o elemento com o ID "twitter"
const company = get("company"); // Seleciona o elemento com o ID "company"
let darkMode = false; // Variável booleana para controlar o modo escuro

//btns
btnSubmit.addEventListener("click", function () {
    // Quando o botão de envio é clicado, verifica se o campo de entrada não está vazio
    // Se não estiver vazio, chama a função getUserData com a URL da API do GitHub e o valor de entrada
  if (input.value !== "") {
    getUserData(url + input.value);
  }
});
input.addEventListener(
  "keydown",
  function (e) {
    // Quando uma tecla é pressionada no campo de entrada
      // Verifica se a tecla pressionada é 'Enter'
      // Se for 'Enter' e o campo de entrada não estiver vazio, chama a função getUserData
    if (!e) {
      var e = window.Event;
    }
    if (e.key == "Enter") {
      if (input.value !== "") {
        getUserData(url + input.value);
      }
    }
  },
  false
);
input.addEventListener("input", function () {
    // Quando o valor do campo de entrada muda
    // Esconde a mensagem de 'sem resultados'
    // Remove a classe 'active' do perfil e adiciona a classe 'active' na barra de pesquisa
  noresults.style.display = "none";
  sectionProfile.classList.remove("active");
  searchBar.classList.add("active");
});
btnMode.addEventListener("click", function () {
     // Quando o botão de modo é clicado
    // Verifica se o modo escuro está ativo
    // Se estiver ativo, chama a função lightModeProperties, senão chama a função darkModeProperties
  if (darkMode == false) {
    proprietsDM();
  } else {
    proprietsLM();
  }
});

//function
function getUserData(gitUrl) {
    // Função para obter dados do usuário do GitHub
    // Faz uma requisição para a API do GitHub
    // Transforma a resposta em JSON
    // Chama a função updateProfile com os dados do usuário
    // Se ocorrer um erro, lança o erro
  fetch(gitUrl)
    .then((response) => response.json())
    .then((data) => {
      updateProfile(data);
    })
    .catch((error) => {
      throw error;
    });
}
function updateProfile(data) {
    // Função para atualizar o perfil com os dados do usuário
    // Verifica se a mensagem da API do GitHub não é 'Not Found'
    // Se não for 'Not Found', atualiza os elementos do perfil com os dados do usuário
    // Se for 'Not Found', mostra a mensagem de 'sem resultados'
  if (data.message !== "Not Found") {
    noresults.style.display = "none";
    function checkNull(param1, param2) {
        // Função para verificar se um parâmetro é nulo ou vazio
            // Se for nulo ou vazio, retorna 'Not available'
            // Senão, retorna o valor do parâmetro
      if (param1 === "" || param1 === null) {
        param2.style.opacity = 0.5;
        param2.previousElementSibling.style.opacity = 0.5;
        return "Not available";
      } else {
        return `${param1}`;
      }
    }
    // Atualiza os elementos do perfil com os dados do usuário
    avatar.src = `${data.avatar_url}`;
    userName.innerText = `${data.name}`;
    user.innerText = `@${data.login}`;
    datasegments = data.created_at.split("T").shift().split("-");
    date.innerText = `Joined ${datasegments[2]} ${
      months[datasegments[1] - 1]
    } ${datasegments[0]}`;
    bio.innerText =
      data.bio == null ? "This profile has no bio" : `${data.bio}`;
    repos.innerText = `${data.public_repos}`;
    followers.innerText = `${data.followers}`;
    following.innerText = `${data.following}`;
    userLocation.innerText = checkNull(data.location, userLocation);
    page.innerText = checkNull(data.blog, page);
    twitter.innerText = checkNull(data.twitter_username, twitter);
    company.innerText = checkNull(data.company, company);
    searchBar.classList.toggle("active");
    sectionProfile.classList.toggle("active");
  } else {
    noresults.style.display = "block";
  }
}
//dark mode
const darkModePrefers =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const localStorageDarkM = localStorage.getItem("daresfesf");
if (localStorageDarkM === null) {
  localStorage.setItem("dark_mode", darkModePrefers);
  darkMode = darkModePrefers;
}
if (localStorageDarkM) {
  darkMode = localStorageDarkM;
  proprietsDM();
} else {
  localStorage.setItem("dark_mode", darkModePrefers);
  darkMode = darkModePrefers;
  proprietsLM();
}

function proprietsDM() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-cont", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-bold", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modeBtnText.innerText = "LIGHT";
  modeIcon.src = "./assets/icon-sun.svg";
  root.setProperty("--icon", "brightness(1000%)");
  darkMode = true;
  localStorage.setItem("dark_mode", true);
}
function proprietsLM() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-cont", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-bold", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modeBtnText.innerText = "DARK";
  modeIcon.src = "./assets/icon-moon.svg";
  root.setProperty("--icon", "brightness(100%)");
  darkMode = false;
  localStorage.setItem("dark_mode", false);
}

searchBar.classList.toggle("active");
sectionProfile.classList.toggle("active");
getUserData(url + "octocat");
