// array of images used for cards.
let imageList = [
  "a.png",
  "b.png",
  "c.png",
  "d.png",
  "e.png",
  "f.png",
  "g.png",
  "h.png",
  "i.png",
  "j.png",
  "k.png",
  "l.png",
  "m.png",
  "n.png",
  "o.png",
  "p.png",
  "q.png",
  "r.png",
  "s.png",
  "t.png",
  "u.png",
  "v.png",
  "w.png",
  "x.png",
  "y.png",
  "z.png",
  "aa.png",
  "ab.png",
  "ac.png",
  "ad.png",
  "ae.png",
  "af.png",
  "ag.png",
  "ah.png",
  "ai.png",
  "aj.png",
  "ak.png",
  "al.png",
  "am.png",
  "an.png",
  "ao.png",
];

// Array of student objects
// path: The directory created in the team folder
// lastName: Students last name
// firstName: Students first name

let students = [
  {
    path: "amberle",
    lastName: "Seidl",
    firstName: "Amberle",
  },
  {
    path: "Mohannad",
    lastName: "Alzubi",
    firstName: "Mohannad",
  },
];

const maxColor = 15;
const maxClip = 10;
const maxImage = imageList.length + 1;
// loop through the students array.
students.forEach((student, index) => {
  // Get the student full name
  student.fullName = `${student.firstName} ${student.lastName}`;
  // Get the student initials
  student.initial = student.fullName
    .split(" ")
    .reduce((acc, subname) => acc + subname[0], "");
  // Get the colour for the card
  student.color = `color-${((index % maxColor) + 1).toString()}`;
  // Select the shape for the card
  student.clip = `clip-${((index % maxClip) + 1).toString()}`;
  // Select the image from the image array
  student.image = `${imageList[index % maxImage]}`;
});
// Create the new studentList object
let studentList = new StudentList("all-students", students);
