import Handlebars from "handlebars";
import sidebarTemplate from "./layouts/sidebar/sidebar.hbs?raw";
import chatItemTemplate from "./components/chat-item/chat-item.hbs?raw";
import newChatButtonTemplate from "./components/new-chat-button/new-chat-button.hbs?raw";
import lt from "./helpers/lt";
import gt from "./helpers/gt";
import subtract from "./helpers/subtract";
import { chats } from "./mocks/chats";
import "./style.css";

const THEME_STORAGE_KEY = "messenger-theme";
const root = document.documentElement;

function getPreferredTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: "light" | "dark") {
  root.dataset.theme = theme;
}

function getInitialTheme(): "light" | "dark" {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return getPreferredTheme();
}

applyTheme(getInitialTheme());

Handlebars.registerPartial("chat-item", chatItemTemplate);
Handlebars.registerPartial("new-chat-button", newChatButtonTemplate);

Handlebars.registerHelper("lt", lt);
Handlebars.registerHelper("gt", gt);
Handlebars.registerHelper("subtract", subtract);

const compiledTemplate = Handlebars.compile(sidebarTemplate)({ chats });

document.querySelector<HTMLDivElement>("#app")!.innerHTML = compiledTemplate;

const themeToggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const themeToggleLabel = document.querySelector<HTMLElement>("[data-theme-toggle-label]");

function updateThemeToggleLabel(theme: "light" | "dark") {
  if (!themeToggle || !themeToggleLabel) {
    return;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel = nextTheme === "dark" ? "Темная" : "Светлая";

  themeToggle.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggleLabel.textContent = `${nextThemeLabel} тема`;
}

const currentTheme = (root.dataset.theme === "dark" ? "dark" : "light") as "light" | "dark";
updateThemeToggleLabel(currentTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  updateThemeToggleLabel(nextTheme);
});
