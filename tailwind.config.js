/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#267cda",
        button: "#007bff",
      },
      backgroundImage: {
        "login-image": "url('https://dev.xtend.my.id/img/bg-login.jpg')",
      },
    },
  },
  plugins: [],
};
