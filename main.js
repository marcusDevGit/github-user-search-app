//Variáveis
const searchBar = document.querySelector(".searchbar_container"); // Seleciona o elemento com a classe "searchbar_container"
const profileContainer = document.querySelector(".section_profile_wrapper"); // Seleciona o elemento com a classe "section_profile_wrapper"
const root = document.documentElement.style; // Acessa os estilos do elemento raiz do documento
const get = (param) => document.getElementById(`${param}`); // Função para obter um elemento pelo seu ID
const url = "https://api.github.com/users/"; // URL base da API do GitHub
const noresults = get("no_results"); // Seleciona o elemento com o ID "no_results"
const btnMode = get("btn_mode"); // Seleciona o elemento com o ID "btn_mode"
const modeBtnText = get("mode_btn_text"); // Seleciona o elemento com o ID "mode_btn_text"
const modeIcon = get("mode_icon"); // Seleciona o elemento com o ID "mode_icon"
const btnSubmit = get("submit"); // Seleciona o elemento com o ID "submit"
const input = get("input"); // Seleciona o elemento com o ID "input"
const avatar = get("avatar"); // Seleciona o elemento com o ID "avatar"
const userName = get("name"); // Seleciona o elemento com o ID "name"
const user = get("user"); // Seleciona o elemento com o ID "user"
const date = get("date"); // Seleciona o elemento com o ID "date"
const months = [ // Array com os nomes dos meses
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
const bio = get("bio"); // Seleciona o elemento com o ID "bio"
const repos = get("repos"); // Seleciona o elemento com o ID "repos"
const followers = get("followers"); // Seleciona o elemento com o ID "followers"
const following = get("following"); // Seleciona o elemento com o ID "following"
const userLocation = get("location"); // Seleciona o elemento com o ID "location"
const page = get("website"); // Seleciona o elemento com o ID "page"
const twitter = get("twitter"); // Seleciona o elemento com o ID "twitter"
const company = get("company"); // Seleciona o elemento com o ID "company"
let darkMode = false; // Variável booleana para controlar o modo escuro
