fetch("data.json").then(response=>{
	return response.json();
}).then(data=>{
	profile(data.profiles.profile);
	ten(data.profiles.tenth);
	tens(data.profiles.intey);
	teny(data.profiles.btech);

})
var childone=document.querySelector(".childone");
var childtwo=document.querySelector(".childtwo");
var childthe=document.querySelector(".childthe");
var chi=document.querySelector(".chi");
var profile=(profile)=>{
	

	var p=document.createElement("h4");
	p.textContent="Specialization: "+profile.studies;
	childone.append(p);

	var g=document.createElement("h4");
	g.textContent="Hobbies: "+profile.game;
	childone.append(g);

	var r=document.createElement("h4");
	r.textContent="FAV Movies: "+profile.Movies;
	childone.append(r);




}
var ten =(tenth)=>{


	var g=document.createElement("h4");
	g.textContent="School Name: "+tenth.school;
	childtwo.append(g);

	var ed=document.createElement("h4");
	ed.href="tel:"+tenth.Per;
	ed.textContent="Percentage: "+tenth.Per;
	childtwo.append(ed);


	var pass=document.createElement("h4");
	pass.href="tel:"+tenth.pass;
	pass.textContent="Pass Out:"+tenth.pass;
	childtwo.append(pass);
}
var tens=(intey)=>{

	var ga=document.createElement("h4");
	ga.textContent="School Name: "+intey.clg;
	childthe.append(ga);


	var gaa=document.createElement("h4");
	gaa.textContent="Stream: "+intey.stream;
	childthe.append(gaa);

	var edq=document.createElement("h4");
	edq.href="tel:"+intey.per;
	edq.textContent="Percentage: "+intey.per;
	childthe.append(edq);


	var ass=document.createElement("h4");
	ass.href="tel:"+intey.Pass;
	ass.textContent="Pass Out:"+intey.Pass;
	childthe.append(ass);
}
var teny =(btech)=>{


	var gq=document.createElement("h4");
	gq.textContent="University Name: "+btech.un;
	chi.append(gq);

	var edd=document.createElement("h4");
	edd.href="tel:"+btech.Per;
	edd.textContent="Percentage: "+btech.gpa;
	chi.append(edd);


	var passs=document.createElement("h4");
	passs.href="tel:"+btech.out;
	passs.textContent="Pass Out:"+btech.out;
	chi.append(passs);
}

