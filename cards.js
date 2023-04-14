
let JSONData = {
  titolo: "Test",
  fasce: [
    {
      titolo: "string",
      type: "hero",
      imgUrl: "string",
      sottotitolo: "string"
    },
    {
      type: "slider",
      titolo: "string",
      elencoCard: [
        {
          titolo: "string",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "string",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "string",
          imgUrl: "string",
          description: "string"
        },
        {
          titolo: "string",
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

//Faccio una fetch API del file hbs 
fetch('./card.hbs').then(async (data) => {
  let templateText = await data.text();
  //Con compile il file è convertito in file HTML
  let compiledTemplate = Handlebars.compile(templateText);
  //Metto i dati su compiled template
  let outputHTML = compiledTemplate(JSONData);
  console.log(outputHTML);
  document.querySelector('#container').innerHTML = outputHTML;
});
