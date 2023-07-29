"use strict";

// --------------------------------------------------------------
//                 H E A D E R    E F F E C T S
// --------------------------------------------------------------
// ----This function removes the first effect on Top-Header------
function removeEffectClass() {
  document
    .querySelector("#a_header")
    .classList.remove("animate__animated", "animate__backInRight");
}
setTimeout(removeEffectClass, 1000);
// ------TOGGLE ANIMATE.STYLE CLASSES ON TOP HEADER--------
function topHeaderEffect() {
  document.querySelector("#a_header").classList.toggle("animate__animated");
  document.querySelector("#a_header").classList.toggle("animate__flash");
}
//  This will execute topHeaderEffect() effect once, then
//    on an interval
const setMixedEffect = function () {
  topHeaderEffect(); // Call the function once after the delay
  setInterval(topHeaderEffect, 2000); // Then set to run every 2 seconds
};
setTimeout(setMixedEffect, 3400);

// ------------------------------------------------------------------
//                     MAIN HEADER NAV ELEMENTS
// ------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const navbarItems = [
    {
      title: "",
      href: "https://creativehubkos.com",
      logo: "./images/1_creativehub_logo.png",
    },
    { title: "Academies", href: "#academy_" },
    { title: "Career", href: "#career_" },
  ];

  const navbarHtml = navbarItems.map(function (item) {
    if (!item.hasOwnProperty("logo")) {
      return `<li class="nav_li_right"><a href="${item.href}">${item.title}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M13 6.5L8 11.5L3 6.5" stroke="#474747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></a></li>`;
    } else {
      return `<li id="logo" class="animate__animated animate__backInLeft animate__slower"><a href="${item.href}"><img src="${item.logo}" alt="Creative Hub Logo"></a></li>`;
    }
  });

  document.querySelector("#nav_elements").innerHTML = navbarHtml.join("");
});
// ----------------------------------------------------------------
//                   LEFT BANNER UL ELEMENTS
// ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const leftUlElements = [
    {
      paragraph: "Program start: <span class='span_lb'>October 2023</span>",
    },
    {
      paragraph: "Apply for Early Bird price until August 15th!</br>",
      redSpan:
        "*The application process is open until August 15th for the fastest 10 students!.",
    },
    {
      paragraph: "<span class='span_lb'>5 months</span> to junior tester.",
    },
    {
      paragraph:
        "Suitable for: <span class='span_lb'>Beginners </br>(We advise you to first see the free course)</span>",
    },
    {
      paragraph: "Program structure: </br> 5 months program + Hire-Me Program",
    },
  ];
  const leftUlHtml = leftUlElements.map(function (item) {
    if (!item.hasOwnProperty("redSpan")) {
      return `<li><p>${item.paragraph}</p></li>`;
    } else {
      return `<li><p>${item.paragraph}<span class="red_span">${item.redSpan}</span></p></li>`;
    }
  });
  document.querySelector("#left_banner_ul").innerHTML = leftUlHtml.join("");
});

// ---------------------------------------------------------------
//    Hire Me Effect Paragraph + Button Banner Effect TIMING
// ---------------------------------------------------------------
function timingEffect() {
  //  ------- Hire Me Effect --------
  function hireMeProgram() {
    document.querySelector(".p_left").classList.toggle("animate__animated");
    document.querySelector(".p_left").classList.toggle("animate__pulse");
  }
  setTimeout(hireMeProgram, 500);
  // -------- Banner Button Effect ---------
  function buttonAnimate() {
    document
      .querySelector("#first_button")
      .classList.toggle("animate__animated");
    document
      .querySelector("#first_button")
      .classList.toggle("animate__rubberBand");
  }
  setTimeout(buttonAnimate, 2000);
}

// setInterval(timingEffect, 8000); - EXECUTED AT WRAPPER (END)

// This sets the setTimeout functions above to run on an interval.
// For each 8 seconds it will execute both setTimeout functions above.
// So 8+0.5= 8.5s for hireMeProgram and 8+2= 10s for button effect.
// So the difference between hireMeProgram and button effect will always be 1.5s,
// because setInterval will be executed after 8 seconds, and after each 8 seconds...
// hireMeProgram will be executed (after 0.5s) and then button effect (after 2s). The loop repeats.
// I couldn't do this directly with setInterval, e.g. setInterval(hireMeProgram, 8500) and
// setInterval(buttonAnimate, 10000), because the time would double.
// After 10 times, time for hireMeProgram would be 85s and for button effect would be 100s,
// which tells that their timing wouldn't be correlated.
// .
// .
// ---------------------------------------------------------------
//         H A M B U R G E R    C L I C K     E F F E C T S
// ---------------------------------------------------------------
function showMenu() {
  // Changing the Hamburger Lines with X icon
  const image1 = document.getElementById("hamburger_line1");
  const image2 = document.getElementById("hamburger_line2");
  const image3 = document.getElementById("hamburger_line3");
  const xImage = document.getElementById("x_hamburger");

  // Check if the X image is hidden (not visible)
  if (xImage.style.display === "none") {
    // Hide the original three images
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";

    // Show the X image & resize
    xImage.style.display = "inline-block";
    xImage.style.width = "32px";
    xImage.style.height = "25px";
  } else {
    // If the X image is visible, revert the changes
    image1.style.display = "inline-block";
    image2.style.display = "inline-block";
    image3.style.display = "inline-block";
    xImage.style.display = "none";
  }
  // Changing the Hamburger Lines with X icon - Ending

  // Hamburger_Ul List Show in Mobile
  let hamburgerUl = document.querySelector("#hamburger_ul").classList;
  hamburgerUl.toggle("hamburger_toggle"); // Main.css
  // Adding the moving effects of the Hamburger Menu
  hamburgerUl.toggle("animate__animated");
  hamburgerUl.toggle("animate__backInRight");
}
// ---------------------------------------------------------------------------------
//                         *M O D U L E S (#Sign Up)
// ---------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const weeks = [
    { title: "Introduction to Scrum and Agile ways of work" },
    {
      week: "Week 1:",
      title: "Introduction to Software Testing and Selection ",
    },
    { week: "Week 2:", title: "Manual Testing Fundamentals" },
    { week: "Week 3-6:", title: "Introduction to OOP ( Java )" },
    { week: "Week 7:", title: "Introduction to Automation Testing" },
    {
      week: "Week 8-10:",
      title: "Back-end Test Automation using rest assured ( Java ) ",
    },
    {
      week: "Week 11-13:",
      title: "Front-end Test Automation using Selenium (Java) - GUI",
    },
    { week: "Week 14:", title: "Database connection - Postgre" },
    { week: "Week 15:", title: "End 2 End Testing" },
    { week: "Week 16:", title: "Testing Best Practices" },
    { week: "Week 17: ", title: "Prepare for Job Interview" },
  ];
  //   const weeksHtml = weeks.map(function (item, i) {
  //     if (!item.hasOwnProperty("week")) {
  //       return `<li><p>${item.title}</p></li>`;
  //     } else {
  //       return `<li><p onclick="onWeek${i}()"><span id="span_module">${item.week}</span>  ${item.title}</p></li>`;
  //     }
  //   });
  //   document.querySelector("#module_week").innerHTML = weeksHtml.join(" ");
  //   // ---------------------#module_result---------------------
  // });
  const moduleWeekElement = document.querySelector("#module_week");

  function createWeekItem(item, i) {
    if (!item.hasOwnProperty("week")) {
      return `<li id="li${i}" ><p id="p${i}" onmouseenter="onWeek${i}()" onmouseout="onOut${i}()">${item.title}</p></li>`;
    } else {
      return `<li id="li${i}"><p id="p${i}" onmouseenter="onWeek${i}()" onmouseout="onOut${i}()"><span id="span_module">${item.week}</span> ${item.title}</p></li>`;
    }
  }

  const weeksHtml = weeks.map(createWeekItem).join(" ");
  moduleWeekElement.innerHTML = weeksHtml;
});
// ---------------------------------------------------------------
//     Too much code but I was afraid I will ruin the function
// ---------------------------------------------------------------
// --------------------------
//    W e e k    0
// ---------------------------
function week0() {
  const image = document.querySelector("#module_0");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li0").classList.toggle("click_effect");
  document.querySelector("#p0").classList.toggle("p_color");
}
function out0() {
  const image = document.querySelector("#module_0");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li0").classList.remove("click_effect");
  document.querySelector("#p0").classList.remove("p_color");
}

const onWeek0 = function () {
  setTimeout(week0, 100);
};
const onOut0 = function () {
  setTimeout(out0, 100);
};

// -----------------------------
//       W e e k    1
// -----------------------------

function week1() {
  const image = document.querySelector("#module_1");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li1").classList.toggle("click_effect");
  document.querySelector("#p1").classList.toggle("p_color");
}
function out1() {
  const image = document.querySelector("#module_1");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );

  document.querySelector("#li1").classList.remove("click_effect");
  document.querySelector("#p1").classList.remove("p_color");
}

const onWeek1 = function () {
  setTimeout(week1, 100);
};
const onOut1 = function () {
  setTimeout(out1, 100);
};
// --------------------------
// -----------------------------
//       W e e k    2
// -----------------------------

function week2() {
  const image = document.querySelector("#module_2");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li2").classList.toggle("click_effect");
  document.querySelector("#p2").classList.toggle("p_color");
}
function out2() {
  const image = document.querySelector("#module_2");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li2").classList.remove("click_effect");
  document.querySelector("#p2").classList.remove("p_color");
}

const onWeek2 = function () {
  setTimeout(week2, 100);
};
const onOut2 = function () {
  setTimeout(out2, 100);
};
// --------------------------
// -----------------------------
//       W e e k    3
// -----------------------------

function week3() {
  const image = document.querySelector("#module_3");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li3").classList.toggle("click_effect");
  document.querySelector("#p3").classList.toggle("p_color");
}
function out3() {
  const image = document.querySelector("#module_3");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li3").classList.remove("click_effect");
  document.querySelector("#p3").classList.remove("p_color");
}

const onWeek3 = function () {
  setTimeout(week3, 100);
};
const onOut3 = function () {
  setTimeout(out3, 100);
};
// --------------------------
// -----------------------------
//       W e e k    4
// -----------------------------

function week4() {
  const image = document.querySelector("#module_4");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li4").classList.toggle("click_effect");
  document.querySelector("#p4").classList.toggle("p_color");
}
function out4() {
  const image = document.querySelector("#module_4");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li4").classList.remove("click_effect");
  document.querySelector("#p4").classList.remove("p_color");
}

const onWeek4 = function () {
  setTimeout(week4, 100);
};
const onOut4 = function () {
  setTimeout(out4, 100);
};
// --------------------------
// -----------------------------
//       W e e k    5
// -----------------------------

function week5() {
  const image = document.querySelector("#module_5");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li5").classList.toggle("click_effect");
  document.querySelector("#p5").classList.toggle("p_color");
}
function out5() {
  const image = document.querySelector("#module_5");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li5").classList.remove("click_effect");
  document.querySelector("#p5").classList.remove("p_color");
}

const onWeek5 = function () {
  setTimeout(week5, 100);
};
const onOut5 = function () {
  setTimeout(out5, 100);
};
// --------------------------
// -----------------------------
//       W e e k    6
// -----------------------------

function week6() {
  const image = document.querySelector("#module_6");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li6").classList.toggle("click_effect");
  document.querySelector("#p6").classList.toggle("p_color");
}
function out6() {
  const image = document.querySelector("#module_6");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li6").classList.remove("click_effect");
  document.querySelector("#p6").classList.remove("p_color");
}

const onWeek6 = function () {
  setTimeout(week6, 100);
};
const onOut6 = function () {
  setTimeout(out6, 100);
};
// --------------------------
// -----------------------------
//       W e e k    7
// -----------------------------

function week7() {
  const image = document.querySelector("#module_7");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li7").classList.toggle("click_effect");
  document.querySelector("#p7").classList.toggle("p_color");
}
function out7() {
  const image = document.querySelector("#module_7");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li7").classList.remove("click_effect");
  document.querySelector("#p7").classList.remove("p_color");
}

const onWeek7 = function () {
  setTimeout(week7, 100);
};
const onOut7 = function () {
  setTimeout(out7, 100);
};
// --------------------------
// -----------------------------
//       W e e k    8
// -----------------------------

function week8() {
  const image = document.querySelector("#module_8");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li8").classList.toggle("click_effect");
  document.querySelector("#p8").classList.toggle("p_color");
}
function out8() {
  const image = document.querySelector("#module_8");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li8").classList.remove("click_effect");
  document.querySelector("#p8").classList.remove("p_color");
}

const onWeek8 = function () {
  setTimeout(week8, 100);
};
const onOut8 = function () {
  setTimeout(out8, 100);
};
// --------------------------
// -----------------------------
//       W e e k    9
// -----------------------------

function week9() {
  const image = document.querySelector("#module_9");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li9").classList.toggle("click_effect");
  document.querySelector("#p9").classList.toggle("p_color");
}
function out9() {
  const image = document.querySelector("#module_9");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li9").classList.remove("click_effect");
  document.querySelector("#p9").classList.remove("p_color");
}

const onWeek9 = function () {
  setTimeout(week9, 100);
};
const onOut9 = function () {
  setTimeout(out9, 100);
};
// --------------------------
// -----------------------------
//       W e e k    9
// -----------------------------

function week10() {
  const image = document.querySelector("#module_10");
  image.classList.toggle("image_block");
  image.classList.toggle("animate__animated");
  image.classList.toggle("animate__backInRight");
  image.classList.toggle("animate__faster");
  document.querySelector("#li10").classList.toggle("click_effect");
  document.querySelector("#p10").classList.toggle("p_color");
}
function out10() {
  const image = document.querySelector("#module_10");

  image.classList.remove(
    "image_block",
    "animate__animated",
    "animate__backInRight",
    "animate__faster"
  );
  document.querySelector("#li10").classList.remove("click_effect");
  document.querySelector("#p10").classList.remove("p_color");
}

const onWeek10 = function () {
  setTimeout(week10, 100);
};
const onOut10 = function () {
  setTimeout(out10, 100);
};
// --------------------------
// ---------------------------------------------------------
//   Ending of Weeks Module Effects
// -------------------------------------------
// -------------------------Modules MOBILE Accordion------------------------
function accordionClick(element) {
  element.classList.toggle("accordion_css");
}
// ---------------------------------------------------------
// --------------------------
// ------------------------------------------------------------------------------
//                         *  C A L C U L A T O R
// ------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const buttonsGroup1 = document.querySelectorAll(".first_buttons button");
  const buttonsGroup2 = document.querySelectorAll(".second_buttons button");
  const resultParagraph = document.getElementById("result_paragraph");

  let selectedButtonGroup1 = null;
  let selectedButtonGroup2 = null;

  // Set initial selected buttons and styles
  function setInitialSelection() {
    selectedButtonGroup1 = document.getElementById("button_2");
    selectedButtonGroup2 = document.getElementById("button_5");

    buttonsGroup1.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
    });

    buttonsGroup2.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
    });

    selectedButtonGroup1.style.backgroundColor = "white";
    selectedButtonGroup1.style.color = "black";
    selectedButtonGroup2.style.backgroundColor = "white";
    selectedButtonGroup2.style.color = "black";

    calculateResult(selectedButtonGroup1, selectedButtonGroup2);
  }

  // Call the function to set the initial selection
  setInitialSelection();

  function calculateGroup1Result(button1, button2) {
    const button1Value = parseInt(button1.textContent.replace(/[^\d]/g, ""));
    const button2Value = parseInt(button2.textContent.replace(/[^\d]/g, ""));

    if (button1 === document.getElementById("button_1")) {
      if (button2 === document.getElementById("button_3")) {
        return "4";
      } else if (button2 === document.getElementById("button_4")) {
        return "3";
      } else if (button2 === document.getElementById("button_5")) {
        return "2";
      }
    } else if (button1 === document.getElementById("button_2")) {
      if (button2 === document.getElementById("button_3")) {
        return "5";
      } else if (button2 === document.getElementById("button_4")) {
        return "4";
      } else if (button2 === document.getElementById("button_5")) {
        return "3";
      }
    }

    return "Unknown";
  }

  function calculateGroup2Result(button) {
    // Add your custom logic for calculating the result for Group 2 here
    // For now, let's return the button value as an example
    return button.textContent.replace(/[^\d]/g, "");
  }

  function calculateResult(buttonGroup1, buttonGroup2) {
    const result = calculateGroup1Result(buttonGroup1, buttonGroup2);
    resultParagraph.textContent = result;
  }

  function handleClick(button, group) {
    // Remove non-numeric characters using regular expression
    const buttonValue = parseInt(button.textContent.replace(/[^\d]/g, ""));

    console.log(`Button ${button.id} value:`, buttonValue);

    // Change background color to white for the previous selected button in the group
    if (group === 1) {
      if (selectedButtonGroup1) {
        selectedButtonGroup1.style.backgroundColor = "";
        selectedButtonGroup1.style.color = "";
      }
      selectedButtonGroup1 = button;
      button.style.backgroundColor = "white";
      button.style.color = "black";
    } else if (group === 2) {
      if (selectedButtonGroup2) {
        selectedButtonGroup2.style.backgroundColor = "";
        selectedButtonGroup2.style.color = "";
      }
      selectedButtonGroup2 = button;
      button.style.backgroundColor = "white";
      button.style.color = "black";
    }

    // Update the result based on the selected buttons
    calculateResult(selectedButtonGroup1, selectedButtonGroup2);
  }

  buttonsGroup1.forEach((button) => {
    button.addEventListener("click", () => handleClick(button, 1));
  });

  buttonsGroup2.forEach((button) => {
    button.addEventListener("click", () => handleClick(button, 2));
  });
});

// ------------------ Calculator End ---------------------
// ----------------------------------------------------------
//                 SEND SLIDE BUTTON EFFECTS
// ----------------------------------------------------------

function onSendButton() {
  let form = document.getElementById("send_form");
  let button = document.getElementById("send_button");
  form.classList.add("send_form_effects");
  form.textContent = "Your courses are on the way";
  button.classList.add("send__button_effects");
}

// ---------------------------------------------------------------------------
//                *  F O R M     S U B M I T     H A N D L E R
// ---------------------------------------------------------------------------
// function submitHandler() {
//   let nameValue = document.getElementById("full_name").value;
//   let dataName = console.log("Name: " + nameValue);
//   let emailValue = document.getElementById("email_").value;
//   let dataEmail = console.log("Email: " + emailValue);
//   let phoneValue = document.getElementById("phone_").value;

//   let dataPhone = console.log("Phone Number: " + phoneValue);
//   let program = document.getElementById("choose_program").value;
//   let programData = console.log("Choosen Program: " + program);
// }
function submitHandler(event) {
  // Reset error messages
  document.getElementById("name_error").innerText = "";
  document.getElementById("email_error").innerText = "";
  document.getElementById("phone_error").innerText = "";
  document.getElementById("choose_error").innerText = "";
  document.getElementById("check_error").innerText = "";

  let nameValue = document.getElementById("full_name").value;
  let emailValue = document.getElementById("email_").value;
  let phoneValue = document.getElementById("phone_").value;
  let program = document.getElementById("choose_program").value;
  let checkboxChecked = document.getElementById("check_box").checked;

  // Validate Name
  if (!nameValue.trim() || /[^a-zA-Z\s]/.test(nameValue)) {
    document.getElementById("name_error").innerText = !nameValue.trim()
      ? "Name cannot be blank."
      : "*Full name can contain only letters.";
    event.preventDefault();
  }

  // Validate Email
  if (
    !emailValue.trim() ||
    !emailValue.includes("@") ||
    emailValue.split("@").length !== 2 ||
    !emailValue.split("@")[1].includes(".") // Check if the part after "@" contains "."
  ) {
    document.getElementById("email_error").innerText = !emailValue.trim()
      ? "Email cannot be blank."
      : "*Email address is invalid.";
    event.preventDefault();
  }

  // Validate Phone Number
  if (!phoneValue.trim() || /[^0-9]/.test(phoneValue)) {
    document.getElementById("phone_error").innerText = !phoneValue.trim()
      ? "Phone cannot be blank."
      : "*Phone number can contain only numbers.";
    event.preventDefault();
  }

  // Validate Program Selection
  if (!program) {
    document.getElementById("choose_error").innerText =
      "*Please select a program to register.";
    event.preventDefault();
  }

  // Validate Checkbox
  if (!checkboxChecked) {
    document.getElementById("check_error").innerText =
      "*Please agree to the terms and conditions.";
    event.preventDefault();
  }

  // If there are any errors, prevent form submission
  if (
    !nameValue.trim() ||
    /[^a-zA-Z\s]/.test(nameValue) ||
    !emailValue.trim() ||
    !emailValue.includes("@") ||
    emailValue.split("@").length !== 2 ||
    !emailValue.split("@")[1].includes(".") ||
    !phoneValue.trim() ||
    /[^0-9]/.test(phoneValue) ||
    !program ||
    !checkboxChecked
  ) {
    return; // Stop form submission if there are errors
  }

  // Do anything else you want with the validated data
  console.log("Name: " + nameValue);
  console.log("Email: " + emailValue);
  console.log("Phone Number: " + phoneValue);
  console.log("Choosen Program: " + program);
}
// -------------------------------------------------------------------------------------
//                          * F O O T E R    ( S L I D E R )
// -------------------------------------------------------------------------------------
function moveSliderLeft() {
  const sponsorWrapper = document.querySelector(".sponsor_wrapper");
  const firstItem = sponsorWrapper.firstElementChild;

  // Move the first item to the end of the list
  sponsorWrapper.appendChild(firstItem);
}

// Call moveSliderLeft function every second
setInterval(moveSliderLeft, 1000);

// -----------------------------------------------------
//               * Footer Map Lists
// -----------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const ulFooter = [
    { title: "Digital marketing", href: "" },
    { title: "Graphic design", href: "" },
    { title: "Human resources", href: "" },
    { title: "UX/UI design", href: "" },
    { title: "Front-End", href: "" },
    { title: "Data Science", href: "" },
    { title: "Java", href: "" },
    { title: "Power Bi", href: "" },
  ];
  const ulFooterHtml = ulFooter.map(function (item, i) {
    return `<li><a href="" target="_blank">${item.title}</a></li>`;
  });
  document.querySelector("#footer_ul").innerHTML = ulFooterHtml.join(" ");
});

//
// .
// *********************************************************************************************
// *********************************************************************************************
// *********************************************************************************************
// *********************************************************************************************
// *********************************************************************************************
// .
// .
// .
// .
// ----------------------------------------------------------------
//                   W R A P P E R     W I D T H
//  ------------------ ( O N    R E S I Z E)
// ----------------------------------------------------------------
// .
// I put this at the end because some functions may not get executed before
// initialization, so to avoid that I put wrapper function at the end, and
// all of the above functions in JS file that are linked with the width of
//  the wrapper, will be written inside of here.
// This function also listens to the Resize event and updates the functions.
// .
// .

document.addEventListener("DOMContentLoaded", function () {
  function updateOnResize() {
    let wrapperWidth = document.querySelector("#wrapper").offsetWidth;
    // ----------------------///////////////////////--------------------
    const navLiRightElements = document.querySelectorAll(".nav_li_right");
    const logo = document.querySelector("#logo");
    // --------------------------  > 9 9 2  ---------------------------
    if (wrapperWidth > 992) {
      // Hire Me + Button Effect function Execution
      setInterval(timingEffect, 8000);
      // Navbar Elements Added on >992
      navLiRightElements.forEach((element) => {
        element.classList.remove("removed_in_mobile");
      });
    }

    // -------------------------- < =   9 9 2-----------------------------------
    if (wrapperWidth <= 992) {
      // Logo Effect Removed on Mobile
      logo.classList.remove(
        "animate__animated",
        "animate__backInLeft",
        "animate__slower"
      );
      // Navbar Elements Removed in Mobile
      navLiRightElements.forEach((element) => {
        element.classList.add("removed_in_mobile");
      });
    }
  }

  // Initial call to set behavior based on the initial window width
  updateOnResize();

  // Event listener for window resize
  window.addEventListener("resize", () => {
    updateOnResize();
  });
});
