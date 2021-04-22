
//Base URL
const base_url = "https://api.rawg.io/api/";

const apiKey = 'c7dd18ceb01d4ebca972d9b8b41d6dd9';

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games.json?dates=${lastYear},${currentDate}&ordering=+rating&page_size=10&api_key=${apiKey}`;
const upcoming_games = `games.json?dates=${currentYear},${nextYear}&ordering=-added&page_size=10&api_key=${apiKey}`;
const new_games = `games.json?dates=${lastYear},${currentYear}&ordering=-released&page_size=10&api_key=${apiKey}`

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`

// Game Details
export const GameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=${apiKey}`
export const GameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=${apiKey}`

