
let JSONData = {
  titolo: "Test",
  fasce: [
    {
      titolo: "Giovanni",
      type: "hero",
      imgUrl: URL('/src_images/calceolariaMobile.jpg'),
      sottotitolo: "string"
    },
    {
      type: "slider",
      titolo: "string",
      elencoCard: [
        {
          titolo: "BO",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "vediamo",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "come",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "procede",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "string",
          imgUrl: "string",
          description: "string"
        }
      ]
    }
  ],
};

Handlebars.registerHelper("eq", (params1, params2) => {
  return params1 === params2;
});


//Faccio una fetch API del file hbs 
fetch('./card.hbs').then(async (data) => {
  let templateText = await data.text();
  //Con compile il file è convertito in file HTML
  let compiledTemplate = Handlebars.compile(templateText);
  //Metto i dati su compiled template
  let outputHTML = compiledTemplate(JSONData);
  console.log(outputHTML);
  console.log("Io funziono");
  document.querySelector('#container').innerHTML = outputHTML;
});



