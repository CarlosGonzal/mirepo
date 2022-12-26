// Módulo 7 - Regular expressions

// Laboratory

//Check IBAN

const pattern = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){5}/;

const values = ["ES9820385778983000760236" , "ES98 2038 5778 9830 0076 0236"]; 

values.forEach(value => {
    console.log('Regex matchs with' + value + '? ->' , pattern.test(value));
})

// Extract country code and check digit

// const pattern = /^[A-Z]{2}\d{2}/;

// const values = ["ES9820385778983000760236" , "ES98 2038 5778 9830 0076 0236"]; 

// values.forEach(value => {
//          console.log('Regex matchs with' + value + '? ->' , pattern.exec(value));
// })

// Validate car registration

// const pattern = /^\d{4}(\s|-|)?[A-Z]{3}/;

// const values = ["2021 GMD" , "2345-GMD" , "4532DBD" , "0320-AAA"];

// values.forEach(value => {
//         console.log('Regex matchs with ' + value + '? => ' , pattern.test(value));
// })

// Extract numbers and letters

// // Validate car registration

// const pattern = /^(\d{4})\s?-?([A-Z]{3})/;

// const values = ["2021 GMD" , "2345-GMD" , "4532DBD" , "0320-AAA"];

// values.forEach(value => {
//         console.log('Regex matchs with ' + value + '? => ' , pattern.exec(value));
// })

//OPTIONAL EXERCISES

// 1 - from a single line extract the contents of src

//const pattern = /^<img src=("[a-z]{5}\:\/\/[a-z]{6}\.[a-z]{12}\.[a-z]{3}\/[a-z]{6}\/[a-z]{7}\/\w{10}\/[a-zA-Z]{6}\-[A-Za-z]{4}\.png\"\/\>)$/;
//const pattern = /^<img src=(.{1,}[a-z]{3,4}\"\/\>)$/;

//const values = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

//console.log(pattern.exec(values));

// 2 - Extract all src

// const pattern = /.{1,}\.(jpg|png)\"\s\s\/\>/gim

// const values = `
// <html>
//  <body>
//  <img
//  src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
//  />
//  <h1>ejemplo</h1>
//  <img
//  src="https://github.githubassets.com/images/modules/logos_page/GitHub.Mark.png"
//  />
//  </body>
// </html>
// `
// console.log(values.match(pattern));

// 3. Check credit card
//

// const pattern = /^(50|51|52|53|54|55)\d{2}(\s|\-)?(\d{4}(\s|\-)?){3}/

// const values = ["5299-6400-0000-0000" , "5299 6400 0000 0000" , "5299640000000000"]

// values.forEach(value => {
//   console.log('Regex matchs with ' + value + '? => ' , pattern.test(values));
// })


// 4. Extract each group of four digits

// const pattern = /^(\d{4}\s?|\-?)(\d{4}\s?|\-?)(\d{4}\s?|\-?)(\d{4}\s?|\-?)/

// const values = ["5299-6400-0000-0000" , "5299 6400 0000 0000" , "5299640000000000"]

// values.forEach(value => {
//   console.log('Regex matchs with ' + value + '? => ' , pattern.exec(value));
// })
