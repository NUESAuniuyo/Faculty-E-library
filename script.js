document.getElementById("redirectForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const semester = document.getElementById("semester").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("department").value;

  // const fileMapping = {
  //   "100": {
  //     "first": {
  //       "mechanical": "Mech_Yr1_100L/100level_firstsemestermechanical.html",
  //       "computer": "Com_Yr1_100L/100level_firstsemestercomputer.html",
  //       "civil": "Civil_Yr1_100L/100level_firstsemestercivil.html",
  //       "agric": "Agric_Yr1_100L/100level_firstsemesteragric.html",
  //       "chemical": "Chm_Yr1_100/100level_firstsemesterchemical.html",
  //       "food": "Food_Yr1_100L/100level_firstsemesterfood.html",
  //       "electrical": "Elect_Yr1_100L/100level_firstsemesterelectrical.html",
  //       "petroleum": "Pet_Yr1_100L/100level_firstsemesterpetroleum.html"
  //     },
  //     "second": {
  //       "mechanical": "Mech_Yr1_100L/100level_secondsemestermechanical.html",
  //       "computer": "Com_Yr1_100L/100level_secondsemestercomputer.html",
  //       "civil": "Civil_Yr1_100L/100level_secondsemestercivil.html",
  //       "agric": "Agric_Yr1_100L/100level_secondsemesteragric.html",
  //       "chemical": "Chm_Yr1_100/100level_secondsemesterchemical.html",
  //       "food": "Food_Yr1_100L/100level_secondsemesterfood.html",
  //       "electrical": "Elect_Yr1_100L/100level_secondsemesterelectrical.html",
  //       "petroleum": "Pet_Yr1_100L/100level_secondsemesterpetroleum.html"
  //     }
  //   },
  //   "200": {
  //     "first": {
  //       "mechanical": "Mech_Yr2_200L/200level_firstsemestermechanical.html",
  //       "computer": "Com_Yr2_200L/200level_firstsemestercomputer.html",
  //       "civil": "Civil_Yr2_200L/200level_firstsemestercivil.html",
  //       "agric": "Agric_Yr2_200L/200level_firstsemesteragric.html",
  //       "chemical": "Chm_Yr2_200L/200level_firstsemesterchemical.html",
  //       "food": "Food_Yr2_200L/200level_firstsemesterfood.html",
  //       "electrical": "Elect_Yr2_200L/200level_firstsemesterelectrical.html",
  //       "petroleum": "Pet_Yr2_200L/200level_firstsemesterpetroleum.html"
  //     },
  //     "second": {
  //       "mechanical": "Mech_Yr2_200L/200level_secondsemestermechanical.html",
  //       "computer": "Com_Yr2_200L/200level_secondsemestercomputer.html",
  //       "civil": "Civil_Yr2_200L/200level_secondsemestercivil.html",
  //       "agric": "Agric_Yr2_200L/200level_secondsemesteragric.html",
  //       "chemical": "Chm_Yr2_200L/200level_secondsemesterchemical.html",
  //       "food": "Food_Yr2_200L/200level_secondsemesterfood.html",
  //       "electrical": "Elect_Yr2_200L/200level_secondsemesterelectrical.html",
  //       "petroleum": "Pet_Yr2_200L/200level_secondsemesterpetroleum.html"
  //     }
  //   },
  //   "300": {
  //     "first": {
  //       "mechanical": "Mech_Yr3_300L/300level_firstsemestermechanical.html",
  //       "computer": "Com_Yr3_300L/300level_firstsemestercomputer.html",
  //       "civil": "Civil_Yr3_300L/300level_firstsemestercivil.html",
  //       "agric": "Agric_Yr3_300L/300level_firstsemesteragric.html",
  //       "chemical": "Chm_Yr3_300L/300level_firstsemesterchemical.html",
  //       "food": "Food_Yr3_300L/300level_firstsemesterfood.html",
  //       "electrical": "Elect_Yr3_300L/300level_firstsemesterelectrical.html",
  //       "petroleum": "Pet_Yr3_300L/300level_firstsemesterpetroleum.html"
  //     },
  //     "second": {
  //       "mechanical": "Mech_Yr3_300L/300level_secondsemestermechanical.html",
  //       "computer": "Com_Yr3_300L/300level_secondsemestercomputer.html",
  //       "civil": "Civil_Yr3_300L/300level_secondsemestercivil.html",
  //       "agric": "Agric_Yr3_300L/300level_secondsemesteragric.html",
  //       "chemical": "Chm_Yr3_300L/300level_secondsemesterchemical.html",
  //       "food": "Food_Yr3_300L/300level_secondsemesterfood.html",
  //       "electrical": "Elect_Yr3_300L/300level_secondsemesterelectrical.html",
  //       "petroleum": "Pet_Yr3_300L/300level_secondsemesterpetroleum.html"
  //     }
  //   },
  //   "400": {
  //     "first": {
  //       "mechanical": "Mech_Yr4_400L/400level_firstsemestermechanical.html",
  //       "computer": "Com_Yr4_400L/400level_firstsemestercomputer.html",
  //       "civil": "Civil_Yr4_400L/400level_firstsemestercivil.html",
  //       "agric": "Agric_Yr4_400L/400level_firstsemesteragric.html",
  //       "chemical": "Chm_Yr4_400L/400level_firstsemesterchemical.html",
  //       "food": "Food_Yr4_400L/400level_firstsemesterfood.html",
  //       "electrical": "Elect_Yr4_400L/400level_frstsemesterelectrical (2).html",
  //       "petroleum": "Pet_Yr4_400L/400level_firstsemesterpetroleum.html"
  //     },
  //     "second": {
  //       "mechanical": "Mech_Yr4_400L/400level_secondsemestermechanical.html",
  //       "computer": "Com_Yr4_400L/400level_secondsemestercomputer.html",
  //       "civil": "Civil_Yr4_400L/400level_secondsemestercivil.html",
  //       "agric": "Agric_Yr4_400L/400level_secondsemesteragric.html",
  //       "chemical": "Chm_Yr4_400L/400level_secondsemesterchemical.html",
  //       "food": "Food_Yr4_400L/400level_secondsemesterfood.html",
  //       "electrical": "Elect_Yr4_400L/400level_secondsemesterelectrical.html",
  //       "petroleum": "Pet_Yr4_400L/400level_secondsemesterpetroleum.html"
  //     }
  //   },
  //   "500": {
  //     "first": {
  //       "mechanical": "Mech_Yr5_500L/500level_firstsemestermechanical.html",
  //       "computer": "Com_Yr5_500L/500level_firstsemestercomputer.html",
  //       "civil": "Civil_Yr5_500L/500level_firstsemestercivil.html",
  //       "agric": "Agric_Yr5_500L/500level_firstsemesteragric.html",
  //       "chemical": "Chm_Yr5_500L/500level_firstsemesterchemical.html",
  //       "food": "Food_Yr5_500L/500level_firstsemesterfood.html",
  //       "electrical": "Elect_Yr5_500L/500level_firstsemesterelectrical.html",
  //       "petroleum": "Pet_Yr5_500L/500level_firstsemesterpetroleum.html"
  //     },
  //     "second": {
  //       "mechanical": "Mech_Yr5_500L/500level_secondsemestermechanical.html",
  //       "computer": "Com_Yr5_500L/500level_secondsemestercomputer.html",
  //       "civil": "Civil_Yr5_500L/500level_secondsemestercivil.html",
  //       "agric": "Agric_Yr5_500L/500level_secondsemesteragric.html",
  //       "chemical": "Chm_Yr5_500L/500level_secondsemesterchemical.html",
  //       "food": "Food_Yr5_500L/500level_secondsemesterfood.html",
  //       "electrical": "Elect_Yr5_500L/500level_secondsemesterelectrical.html",
  //       "petroleum": "Pet_Yr5_500L/500level_secondsemesterpetroleum.html"
  //     }
  //   }
  // };

  // const fileName = fileMapping[level]?.[semester]?.[department];

  const fileName = `resources/${department}/${level}/${semester}.html`;
  if (fileName) {
    alert(`Redirecting to ${level} Level ${semester} Semester - ${department.charAt(0).toUpperCase() + department.slice(1)} Materials`);
    console.log(fileName);
    window.location.href = fileName;
  } else {
    alert("Invalid selection. Please choose valid options.");
  }
});
