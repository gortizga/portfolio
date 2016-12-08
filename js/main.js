function myFunction() {
    window.open("https://drive.google.com/file/d/0Bx7f62t80QLfdkZETWdYWno0Zjg/view?usp=sharing");
}

function getYear() {
        document.write(new Date().getFullYear());
}


function accordian(section){ 
// 	alert('GOT TO THE' + section + 'FUNCTION');
	
	if(section == 'skills'){	
	document.getElementById('SkillsSection').classList.toggle("show");
	document.getElementById('AboutSection').classList.remove("show");
	document.getElementById('InterestsSection').classList.remove("show");
	}
	
	else if(section == 'about'){
	
	document.getElementById('SkillsSection').classList.remove("show");
	document.getElementById('AboutSection').classList.toggle("show");
	document.getElementById('InterestsSection').classList.remove("show");
	
	}
	else if(section == 'interests'){
	document.getElementById('SkillsSection').classList.remove("show");
	document.getElementById('AboutSection').classList.remove("show");
	document.getElementById('InterestsSection').classList.toggle("show");
	
	}
	
}

