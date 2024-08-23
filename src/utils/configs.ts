const config = {
  api_base: import.meta.env.VITE_API_BASE ?? 'http://localhost:8080',

  game: {
    seconds_per_turn: 60,
  },
};

export default config;
