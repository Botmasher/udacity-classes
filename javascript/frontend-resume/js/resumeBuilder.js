/**
 *		Create and display bio, education and projects objects in resume
 *		Maps and formatted html are found in helper.js.
 *
 *			- store data strings in bio, education, projects objects
 *			- add display() function to each object
 *				- iterate through data and format it into associated helper.js HTML
 *				- add formatted data to the DOM
 *			- call each object's display function
 *			- display map (course instructors' code from helper.js)
 */
var bio = {
	"name": "Ewe Arrh",
	"role": "Web Developer",
	"pic": "http://placehold.it/150x150",
	"message": "Welcome to my resume! This is a sample welcome message.",
	"contacts":
		{
			"mobile": "1-555-8675309",
			"email": "myMail@mail.com",
			"twitter": "@TwitterTweetMe",
			"github": "My GitHub",
			"blog": "My Blog",
			"location": "Kailua Kona, HI"
		},
	"skills": ["fishing","hunting","climbing Everest","pulling your leg"]
}

// format and display bio json
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);
	$("#header").prepend(formattedMessage);
	$("#header").prepend(formattedRole);
		// toggle international name (Firstname Lastname <-> Firstname LASTNAME)
	$("#header").prepend(internationalizeButton);
	$("#header").prepend(formattedName);

	formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
	formattedBlog=HTMLblog.replace("%data%",bio.contacts.blog);
	formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedBlog);
	$("#topContacts").append(formattedLocation);

	$("#header").append(HTMLbioPic.replace("%data%",bio.pic));

	if (bio["skills"].length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
}

// create name toggle internationalize button ("First Last" <-> "First LAST")
function inName () {
	var firstLast = bio.name.split(" ");
	var camelFirst = firstLast[0][0].toUpperCase()+firstLast[0].slice(1).toLowerCase();
	var upperLast = firstLast[1].toUpperCase();
	var camelLast = firstLast[1][0].toUpperCase()+firstLast[1].slice(1).toLowerCase();
	if (bio.name===camelFirst+" "+camelLast) {
		bio.name=(camelFirst+" "+upperLast);	
	} else {
		bio.name=(camelFirst+" "+camelLast);
	}
	return bio.name;
}

var work = {
	"jobs": [
		{
			"position": "Animator/Developer",
			"employer": "Company",
			"years": "1",
			"location": "New York, NY",
			"description": "I was responsible for making things move and making code run."
		},
		{
			"position": "Honorary Orangutan",
			"employer": "Company",
			"years": "2",
			"location": "San Diego, CA",
			"description": "I handled all trade disputes with charisma."
		},
		{
			"position": "Marketer",
			"employer": "Company",
			"years": "10",
			"location": "San Miguel, Cozumel, Mexico",
			"description": "I was responsible for nothing, but digital-marketed and built websites anyhow."
		}
	]
}

// format and display job history
work.display = function() {
	for (var i=0; i<work.jobs.length; i++) {
		$("#workExperience").append (HTMLworkStart);
		/** 
		 *	Post formatted entries.
		 *	/!\ If just append HTMLvar entries without storing in these intermediate vars,
		 *	loop will repeat (continue to append) to original HTMLvar entries.
		 *	That would create and append cumulative ever-growing lists on each pass!
		 */
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].position);
		formattedEmployer+=formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].years);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);	
		$(".work-entry:last").append (formattedEmployer);
		$(".work-entry:last").append (formattedDates);
		$(".work-entry:last").append (formattedLocation);
		$(".work-entry:last").append (formattedDescription);
	}
}

var education = {
	"schools": [
		{
			"name": "University",
			"years": "1999-2003",
			"degree": "BA",
			"location": "New York, NY",
			"major": "Computers"
		},
		{
			"name": "High School",
			"years": "1995-1999",
			"degree": "diploma",
			"location": "Montréal, Québec, Canada",
			"major": "Computers"
		}
	],
	"online": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"URL": "udacity.com"
		},
		{
			"title": "HTML/CSS",
			"school": "Udacity",
			"dates": "2015",
			"URL": "udacity.com"
		},
		{
			"title": "Everything",
			"school": "Codecademy",
			"dates": "2014",
			"URL": "codecademy.com"
		},
		{
			"title": "Web Application Development",
			"school": "Udacity",
			"dates": "2013",
			"URL": "udacity.com"
		},
		{
			"title": "Programming Languages",
			"school": "Udacity",
			"dates": "2013",
			"URL": "udacity.com"
		},
		{
			"title": "AI",
			"school": "Stanford",
			"dates": "2012",
			"URL": "stanford.edu"
		},
		{
			"title": "MIT 600",
			"school": "MIT",
			"dates": "2012",
			"URL": "ocw.mit.edu"
		}
	]
}

// format and display job history
education.display = function() {
	for (var i=0; i<education.schools.length; i++) {
		$("#education").append (HTMLschoolStart);
		/** 
		 *	Post formatted entries.
		 *	/!\ If just append HTMLvar entries without storing in these intermediate vars,
		 *	loop will repeat (continue to append) to original HTMLvar entries.
		 *	That would create and append cumulative ever-growing lists on each pass!
		 */
		var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		formattedName+=formattedDegree;
		var formattedYears = HTMLschoolDates.replace("%data%",education.schools[i].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
		$(".education-entry:last").append (formattedName);
		$(".education-entry:last").append (formattedYears);
		$(".education-entry:last").append (formattedLocation);
		$(".education-entry:last").append (formattedMajor);
	}

	$(".education-entry:last").append (HTMLonlineClasses);
	for (var i=0; i<education.online.length; i++) {
		/** 
		 *	Post formatted entries.
		 *	/!\ If just append HTMLvar entries without storing in these intermediate vars,
		 *	loop will repeat (continue to append) to original HTMLvar entries.
		 *	That would create and append cumulative ever-growing lists on each pass!
		 */
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.online[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.online[i].school);
		formattedTitle+=formattedSchool;
		var formattedDates = HTMLonlineDates.replace("%data%",education.online[i].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.online[i].URL);	
		$(".education-entry:last").append (formattedTitle);
		$(".education-entry:last").append (formattedDates);
		$(".education-entry:last").append (formattedURL);
	}
}

var projects = {
	"projects": [
		{
			"title": "Title",
			"date": "2015",
			"description": "My latest and greatest creation!",
			"images": [
				"https://placehold.it/200x100",
				"https://placehold.it/200x100"
			]
		},
		{
			"title": "Moveration",
			"date": "2014",
			"description": "My second greatest creation!",
			"images": [
				"https://placehold.it/200x100",
				"https://placehold.it/200x100"
			]
		}
	]
}

projects.display = function () {
		for (var i=0; i<projects.projects.length; i++) {
			$("#workExperience").append (HTMLworkStart);
			/** 
			 *	Post formatted entries.
			 *	/!\ If just append HTMLvar entries without storing in these intermediate vars,
			 *	loop will repeat (continue to append) to original HTMLvar entries.
			 *	That would create and append cumulative ever-growing lists on each pass!
			 */
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].date);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);	
			$("#projects").append (HTMLprojectStart);
			$(".project-entry:last").append (formattedTitle);
			$(".project-entry:last").append (formattedDates);
			$(".project-entry:last").append (formattedDescription);
			for (img in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[img]);
				$(".project-entry:last").append (formattedImage);
			}
	}
}

bio.display();
education.display();
projects.display();
work.display();


// display map (see helper.js for Google map code)
$("#mapDiv").append(googleMap);