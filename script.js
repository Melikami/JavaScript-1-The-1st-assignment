//Function to activate the javascript with one btn click
btn1.addEventListener('click', function () {
  let nameList = [];
  let name1 = document.getElementById('name1').value;
  let name2 = document.getElementById('name2').value;
  let password = document.getElementById('password').value;
  let repeat = document.getElementById('repeat');
  let checkbox = document.getElementById('checkbox');
  let output = document.getElementById('output');

  //Checks if at least one name has been entered
  if (name1 == "" && name2 == "") {
    output.innerHTML = 'Du måste skriva in minst ett namn';
    return;

    //Checks that the password is KYH
  } else if (password != 'KYH') {
    output.innerHTML = "";
    output.innerHTML = 'Inkorrekt lösenord';
    return;
  }

  //Empties output
  output.innerHTML = "";

  //Pushes in the entered names into the array
  if (name1 != "") {
    nameList.push(name1);
  }
  if (name2 != "") {
    nameList.push(name2);
  }

  //Pushes Marcus and Cihan into the array
  nameList.push('Marcus', 'Cihan');

  //If checkbox is checked and value for repeat entered, displays greeting selected amounts of times. If checkbox is not checked, displays a greeting once to all the names entered into the array
  if (checkbox.checked == true && repeat.value > 0) {
    for (let i = 1; i <= repeat.value; i++) {
      nameList.forEach((name) => {
        output.innerHTML += 'Shout out to ' + name + '<br>';
      });
    }
  } else {
    nameList.forEach(
      (element) => (output.innerHTML += 'Yo my bro ' + element + '<br>')
    );
  }
});

//Makes the second added btn empty the output
btn2.addEventListener('click', function cleanOutput() {
  output.innerHTML = "";
});

//A third btn that empties all input fields
btn3.addEventListener('click', function cleanInput() {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  document.getElementById('password').value = '';
  document.getElementById('repeat').value = '';
  document.getElementById('checkbox').checked = false;
});

//Makes the headline blink which is totally unneccessary, but was kind of fun, and I needed some fun :)
var blink_speed = 1200; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('headline');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);