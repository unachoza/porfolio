
// const PROJECTS: {
//     id: number;
//     name: string;
//     projectLink: string;
//     imageLinks: string[];
//     description: string;
//     githubLink: string;
// }[]

export const PROJECTS = [
  {
    id: 1,
    name: 'Susan Says',

    projectLink: 'http://susans.surge.sh/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1553110722/Screen_Shot_2019-03-20_at_3.38.20_PM.png',
      'https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_230/v1546220914/susan-sarandon.jpg',
    ],
    description:
      'Interactive arcade style memory game using vanilla javascript, CSS and Responsive Web Design. Users repeat a color pattern delivered by "Susan" that gets infinitely longer as they continue to repeat correctly. Upon arriving to each new level, the background changes to a differnt feminist. Users recieve a score at the end. Be ware, it\'s addictive!',
    githubLink: 'https://github.com/unachoza/Susan-Says',
  },
  {
    id: 2,
    name: 'Cancel R Kelly',
    projectLink: '',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1574386294/Screen_Shot_2019-11-21_at_8.31.22_PM.png',
    ],
    description:
      'Cancel RKelly is an app that effortlessly allows users remove Rkelly songs from their Spotify Playists and Library. This app populates users playlists, then filters through to find playlists containing R Kelly songs and promps the user to delete them. Using the Spotify API, React, Nodejs, Express, and PostgreSQL.',

    githubLink: 'https://github.com/unachoza/Cancel-RKelly-with-Spotify-Aut',
  },
  {
    id: 3,
    name: 'Pinnacle Clothing',
    projectLink: 'https://pinnacle-clothing.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1580794434/Screen_Shot_2020-02-04_at_12.33.27_AM.png',
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1580794434/Screen_Shot_2020-02-04_at_12.32.36_AM.png',
    ],
    description:
      'E-commerce site using Firebase Authentication. Built using React and Redux, integrated with Stripe API to accept credit or debt payments. This is a fictional online clothing store, but gosh does it look great!',

    githubLink: 'https://github.com/unachoza/e-commerce',
  },
    {
    id: 4,
    name: 'Nature Tours',
    projectLink: 'http://amazinguinatours.surge.sh/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1582638321/Screen_Shot_2020-02-25_at_8.44.43_AM.png',
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1582638324/Screen_Shot_2020-02-25_at_8.44.19_AM.png',
    ],
    description:
      'Nature tours booking website. This is a non-functional site showcaseing addvanced styling techniques: SCSS architecture; The 7-1 rule, component-based design, the BEM methodolog, annimations, checkbox hack, css grid, and more.',

    githubLink: 'https://github.com/unachoza/AdvancedCSS/tree/master/Natours',
 },
        {
    id: 5,
    name: 'Mobilize Political Volunteer Event Search',
    projectLink: 'https://event-search-md.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1591717092/Screen_Shot_2020-06-09_at_10.13.52_AM.png',
    ],
    description:
      'This app uses the Mobile API to allows users to search for volunteer events based on filters and location that are desplayed on the google map. Users can click on the map marker to see cooresponding event. This app features infinite scrolling, responsiveness, and activism. Written in React using Hooks,  Context API for state management, and react-google-maps library, and links origin state. ',

    githubLink: 'https://github.com/unachoza/mobilize-feedback',
  },
  
  {
    id: 6,
    name: 'Face Recognition AI',
    projectLink: 'https://image-recognition-w.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1580792102/Screen_Shot_2020-02-03_at_11.49.54_PM.png',
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1580792102/Screen_Shot_2020-02-03_at_11.53.31_PM.png',
    ],
    description:
      'Artificial Intelligence is used to detect faces in images. Users enter image urls and AI does the rest!',
    githubLink: 'https://github.com/unachoza/Recognition-Fullstack-',
  },
  {
    id: 6,
    name: 'Github Respo Search',
    projectLink: 'https://searchinggithub.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1571777311/Screen_Shot_2019-10-22_at_4.46.59_PM.png',
    ],
    description:
      'This app uses the Github API to allow users to search for a specific respository. Users can filter by license types, number of stars and decide to include forks. Links provide take users to that repo on Github. Written in Typescript',
    githubLink: 'https://github.com/unachoza/PrivateGithubSearch',
  },
  {
    id: 7,
    name: 'These Friends',
    projectLink: 'https://cat-friends.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_230/v1553108095/Screen_Shot_2019-03-20_at_2.54.09_PM.png',
    ],
    description:
      'React App displaying contact cards for cat friends using react, jsx,css, and making use of component lifecyles while fetching data. Users can search for friends by name or email address',

    githubLink: 'https://github.com/unachoza/cat-friends',
  },
  {
    id: 8,
    name: 'Stream Videos',
    projectLink: 'https://this-youtube-clone.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_230/v1553109235/Screen_Shot_2019-03-20_at_2.59.22_PM.png',
    ],
    description: "React App fetching data from Youtube API. Design so similar to Youtube it's almost freaky",
    githubLink: 'https://github.com/unachoza/search-video',
  },
  {
    id: 9,
    name: 'Image Search',
    projectLink: 'https://searching-images.herokuapp.com/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1574443242/Screen_Shot_2019-11-22_at_12.20.00_PM.png',
    ],
    description:
      "React App to Search the Google Images API and display the first 10 returns. Register and sign in to keep track of how many images you've entered!",
    githubLink: 'https://github.com/unachoza/Image-Search',
  },
  {
    id: 10,
    name: 'Flower Finder',
    projectLink: 'http://interestingflowers.surge.sh/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1574386767/Screen_Shot_2019-11-21_at_8.39.16_PM.png',
    ],
    description:
      'React app using fetches, JSX, CSS animations, local storage and data files. This web app displays a library of interesting flower cards.When users click on the flower image, more information about that flower is pulled from a database.',
    githubLink: 'https://github.com/unachoza/FlowerFinder',
  },
  {
    id: 11,
    name: 'Magic 8 Ball',
    projectLink: 'http://askmagic8ball.surge.sh/',
    imageLinks: [
      'https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140/v1550079485/Screen_Shot_2019-02-13_at_12.37.02_PM.png',
    ],
    description:
      'An Interactive Fortune Telling game using javascript, html, and CSS Animations. Ask the magic 8 ball a Yes or No question and recieve a very accurate response.',
    githubLink: 'https://github.com/unachoza/Magic-8-Ball',
  },
  {
    id: 12,
    name: 'Garden Party',
    projectLink: 'http://thesearethedetailsforthisparty.surge.sh/',
    imageLinks: ['https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_247/v1550016489/Screen_Shot_2019-02-12_at_7.06.34_PM.png'],
    description: 'Mobile party invitation,heavy on CSS Animations. This invitation begins with a 10 seconds flower animation followered by details of the party to inform the guest of the whimsical garden party they\'ve been invited to.',

    githubLink: 'https://github.com/unachoza/Garden-Party-Invite',
  },
  {
    id: 13,
    name: 'Book Club',
    projectLink: '',
    imageLinks: ['https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,w_40/v1546887547/angle-double-down.png'],
    description:
      "Full-stack MVC app intergraded with APIs, Node.js, Express and PostgreSQL. Users can create a profile, search the library, that pulls from the Google Books API for a book they wish to read or create a book club for. Users can add to the reading list, create book clubs, and find more interesting reads. A RESTful API was built to support a database of users, users' reading lists, and book clubs.",

    githubLink: 'https://github.com/unachoza/Book-Clubs',
  },
];



// {
//  id: 2,
//  name: '',
//     projectLink: '',
//     imageLinks: [],
//     description: '',

//     githubLink: '',
//   },

https://res.cloudinary.com/dh41vh9dx/image/upload/v1592347343/Screen_Shot_2020-06-16_at_6.41.39_PM.png