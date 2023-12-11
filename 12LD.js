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

    // Validation checks
  if (vardas === '' || pavarde === '' || email === '' || telefonas === '' || adresas === '') {
    alert('Užpildykite visus laukelius.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Elektroninis paštas įvestas neteisingai.');
    return;
  }

  if (!isValidPhoneNumber(telefonas)) {
    alert('Telefono numeris įvestas neteisingai.');
    return;
  }

  if (containsGap(vardas) || containsGap(pavarde)) {
    alert('Vardas ir pavardė turi būti be tarpelių.');
    return;
  }

  if (!isValidAddress(adresas)) {
    alert('Adresas įvestas neteisingai');
    return;
  }

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
      
      // Color change based on the average value
      if (average >= 4) {
        rezultatas.style.color = 'green';
      } else if (average >= 2) {
        rezultatas.style.color = 'orange';
      } else {
        rezultatas.style.color = 'red';
      }
  }

  // Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{9}$/;
  return phoneRegex.test(phoneNumber);
}

// Function to check if there is a gap in the middle
function containsGap(text) {
  return text.includes(' ');
}

// Function to validate address format
function isValidAddress(address) {
  return /\d/.test(address);
}