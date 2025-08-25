import { User } from "./interfaces";

const avatar = document.getElementById("avatarUrl") as HTMLImageElement;
const name = document.getElementById("name")!;
const login = document.getElementById("login")!;
const createdAt = document.getElementById("createdAt")!;
const bio = document.getElementById("bio")!;
const repos = document.getElementById("repos")!;
const followers = document.getElementById("followers")!;
const following = document.getElementById("following")!;
const location = document.getElementById("location")!;
const blog = document.getElementById("blog")!;
const company = document.getElementById("company")!;
const twitterUserName = document.getElementById("twitterUserName")!;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const updateMainUI = (user: User) => {
  avatar.src = user.avatar_url;
  name.textContent = user.name || "Not Available";
  login.textContent = `@${user.login}`;
  createdAt.textContent = `Joined ${formatDate(user.created_at)}`;
  bio.textContent = user.bio || "This profile has no bio";
  repos.textContent = user.public_repos.toString();
  followers.textContent = user.followers.toString();
  following.textContent = user.following.toString();
  location.textContent = user.location || "Not Available";
  blog.textContent = user.blog || "Not Available";
  company.textContent = user.company || "Not Available";
  twitterUserName.textContent = user.twitter_username || "Not Available";
};
