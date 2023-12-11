function submitForm() {
    // Get form values
    let vardas = document.getElementById('vardas').value;
    let pavarde = document.getElementById('pavarde').value;
    let email = document.getElementById('email').value;
    let telefonas = document.getElementById('telefonas').value;
    let adresas = document.getElementById('adresas').value;
    let q1 = parseInt(document.getElementById('q1').value);
    let q2 = parseInt(document.getElementById('q2').value);
    let q3 = parseInt(document.getElementById('q3').value);
    let q4 = parseInt(document.getElementById('q4').value);
    let q5 = parseInt(document.getElementById('q5').value);

    // Create JavaScript object
    let surveyData = {
      Vardas: vardas,
      Pavardė: pavarde,
      Email: email,
      Telefonas: telefonas,
      Adresas: adresas,
      Klausimas1: q1,
      Klausimas2: q2,
      Klausimas3: q3,
      Klausimas4: q4,
      Klausimas5: q5
    };

    let average = (surveyData.Klausimas1+surveyData.Klausimas2+surveyData.Klausimas3+surveyData.Klausimas4+surveyData.Klausimas5)/5;

    // Display results in the console
    console.log('Survey Data:', surveyData);

    // Display results on the website
    let outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '<h2>Apklausos rezultatai:</h2>';
      
      for (let key in surveyData) {
        outputDiv.innerHTML += '<p>' + key + ': ' + surveyData[key] + '</p>';
      }

      let rezultatas = document.getElementById('rezultatas');
      rezultatas.innerHTML='<p>'+surveyData.Vardas+' '+surveyData.Pavardė+' ('+surveyData.Email+'): '+average+'</p>';
  }