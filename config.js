let topTitleDiv = "<h4></h4>";

let titleDiv =
  "<h3><center>Back to <a href='index.html' style='text-decoration: none'>#main_page</a></center></h3><br></br><h1>Background</h1><br></br>";

let bylineDiv = "<p></p>";

let descriptionDiv =
  '<p>I usually have a hard time answering the question "Where are you from?". If I was not the overthinker whom I am, I could have simply answered "South Korea." However, this does not explain where I truly come from.</p>' +
  '<p>Though living in certain places have had an immeasurable impact on my life, I believe it is more intriguing to talk about my experiences rather than "where I am from".</p>' +
  "<p>Moving from country to country, it was difficult for me to relate to pre-defined framings commonly used to identify oneself, such as associating to a specific place or a community. It took some time to realize that it is my multicultural, yet rootless background that defines my identity. Based on this unique positionality, my identity continues to shift through my experiences.</p>" +
  '<p>I relate to the term Third Culture Kid (TCK) as it describes people who belong everywhere yet nowhere. I can adapt to any environment and establish a space where I can call home, but I am usually the odd one out.</p>' +
  '<p>As such, I enjoy understanding and working with different people, and prefer working in an environment with people from various backgrounds.</p>';

let footerDiv =
  '<div class="footer"><footer><div class="social"><a href="https://www.linkedin.com/in/2hyunkim/" target="_blank"><i class="icon ion-social-linkedin"></i></a><a href="https://github.com/2hyunie" target="_blank"><i class="icon ion-social-github"></i></a><a href="https://www.instagram.com/art.yhk/" target="_blank"><i class="icon ion-social-instagram"></i></a></div><ul class="list-inline"><li class="list-inline-item"><a href="index.html">Home</a></li><li class="list-inline-item"><a href="background.html">Background</a></li><li class="list-inline-item"><a href="experience.html">Experience</a></li><li class="list-inline-item"><a href="outside.html">Outside Work</a></li></ul><p class="copyright"><a href="mailto:yk2906@columbia.edu" style="text-decoration: none">yk2906@columbia.edu</a></p></footer></div>'

  '<br></br><p>Go back to <a href="index.html">main page</a>.</p>' +
  '<p>Check out my <a href="experience.html">experiences</a>.</p>' +
  '<p>See what I do outside of work <a href="outside.html">here</a>.</p>' +
  '<p>Feel free to reach out. My contact information is <a href="contact.html">here</a>.</p>';

let divChapter1 =
  "<h3>Being Strict to Myself</h3>" +
  "<p>Being strict to myself is a trait that I gained throughout my middle and high school years that I spent in Korea. Having this trait has been challenging at times, but it has also allowed me to achieve everything till now.</p>" +
  '<p>Currently, I am working on being more generous to myself, allowing space to accept who I really am.</p>';

let divChapter2 =
  "<h3>Beginning of a Bilingual Life</h3>" +
  "<p>I lived in Australia from 3 to 8, where I started learning English before my mother tongue (Korean) could fully develop. Interestingly, this has allowed me to incorporate both Korean and 'Western' culture that helped form my identities and values in life.</p>";

let divChapter3 =
  "<h3>A Foreshadow</h3>" +
  "<p>The two and a half years I spent in Singapore was an interesting one. I went to a British school and transferred to an American school after a year. I was part of a reading club outside of school where I met an instructor that studied at the University of Cambridge. In hindsight, I feel like these experiences have influenced me to make the decision to study in the UK and the US.</p>";

  let divChapter4 =
  "<h3>My Second Home</h3>" +
  "<p>I spent two and a half years of high school in the Netherlands, and the rest of my family stayed here for another two. I returned to Amsterdam every holiday during my undergraduate years. This is a place where I felt comfortable with both the local culture and my surrounding environment that I almost take it as my second home.</p>";

let divChapter5 =
  "<h3>Being Independent</h3>" +
  "<p>Going to Cambridge was a significant transition in my life, largely due to studying Geography.</p>" +
  "<p>Studying geography was an eye-opener for me, as it navigated me to see the world from various perspectives and allowed me to discard my previous dichotomous world view.</p>";

let divChapter6 =
  "<h3>A New Start</h3>" +
  '<p>After graduating from Cambridge, I had the freedom to choose where I would end up in the next chapter. I liked Europe but I had an urge to complete my studies in a new environment, leading me to the US.</p>' +
  '<p>I am now looking forward to build a career based on my academic background that encompasses both the social sciences and data sciences here.</p>';

var config = {
  style: "mapbox://styles/yhkkasn/cl2ww3z94000q15p4diu9iuow",
  accessToken: "pk.eyJ1IjoieWhra2FzbiIsImEiOiJjbDFjYWhvYm8wMWxwM2Vuc3Vtb2ZvaDBwIn0.9Le60oPOqfaJUlU7KJjafQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "Korea",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [126.8735, 37.5370],
        zoom: 12,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "Australia",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [151.2093, -33.8688],
        zoom: 8,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Singapore",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [103.8198, 1.3521],
        zoom: 10,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "NL",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [4.9041, 52.3676],
        zoom: 10,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "UK",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [0.1313, 52.1951],
        zoom: 12,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "US",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-73.9626, 40.8075],
        zoom: 13,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};

