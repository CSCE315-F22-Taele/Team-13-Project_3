const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config();

// Your credentials
const CREDENTIALS = require("./project-3-translate-e0ecfed088f0.json");

// Configuration for the client
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id,
});

const detectLanguage = async (text) => {
  try {
    let response = await translate.detect(text);
    return response[0].language;
  } catch (error) {
    console.log(`Error at detectLanguage --> ${error}`);
    return 0;
  }
};

// detectLanguage('hola, mundo')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const translateText = async (text, targetLanguage) => {
//   try {
//     let [response] = await translate.translate(text, targetLanguage);
//     document.write(response);
//     return response;
//   } catch (error) {
//     console.log(`Error at translateText --> ${error}`);
//     return 0;
//   }
// };

// function translateTextNoAsync(text, targetLanguage){
//     document.write("Here");
//     let [response] = translate.translate(text, targetLanguage);
//     document.write(response);
//     return response;
// }

// function translateTextFuncAsync(text, targetLanguage){
//     translateText(text, targetLanguage).then((res) => {
//       console.log(res);
//       document.write(res);
//     });
// }



// function writeSomething(){
//    translateText("Oggi è lunedì", "en")
//      .then((res) => {
//        console.log(res);
//        document.write(res);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
// }

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}