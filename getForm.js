
function pastikan(){
    var inputNama = document.getElementById("fullName").value;
    var inputEmail = document.getElementById("email").value;
    var inputCompany = document.getElementById("company").value;
    var inputIndustry = document.getElementById("industry").value;
    var inputLevel = document.getElementById("level").value;
    var inputTitle = document.getElementById("jobTitle").value;


var body =  document.body;
body.innerHTML = "";
var container = document.createElement("div");
container.setAttribute("class", "container")

var judul = document.createElement("h1");
judul.innerHTML = "Silakan cek detail seluruh detail di bawah ini";
container.appendChild(judul);

body.appendChild(container);

var ul1 = document.createElement("ul");
var li1 = document.createElement("li");
li1.innerHTML = "Nama Lengkap Anda : " + inputNama;
var li2 = document.createElement("li");
li2.innerHTML = "Email Anda : " + inputEmail;
var li3 = document.createElement("li");
li3.innerHTML = "Startup Anda: " + inputCompany;
var li4 = document.createElement("li");
li4.innerHTML = "Industri Anda: " + inputIndustry;
var li5 = document.createElement("li");
li5.innerHTML = "Level Pekerjaan: " + inputLevel;
var li6 = document.createElement("li");
li6.innerHTML = "Nama Pekerjaan : " + inputTitle;

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);

container.appendChild(ul1);

var pBaru = document.createElement("p");
pBaru.setAttribute("class", "confirmation");
pBaru.innerHTML = "Silakan cek input Anda, apakah semua benar?";
container.appendChild(pBaru);

var buttonCorrect = document.createElement("button");
buttonCorrect.setAttribute("type", "submit");
buttonCorrect.setAttribute("class", "submit");
buttonCorrect.setAttribute("onclick", "confirm()");
buttonCorrect.innerHTML = "Benar";
container.appendChild(buttonCorrect);

var buttonIncorrect = document.createElement("button");
buttonIncorrect.setAttribute("type", "submit");
buttonIncorrect.setAttribute("class", "submit");
buttonIncorrect.setAttribute("onclick", "incorrect()");
buttonIncorrect.innerHTML = "Salah";
container.appendChild(buttonIncorrect);


}

//confirm functions
function confirm(){

    var body =  document.body;
    body.innerHTML = "";
    var container = document.createElement("div");
    container.setAttribute("class", "container")

    var judul = document.createElement("h2");
    judul.innerHTML = "Terima kasih sudah menggunakan jasa kami. Kami akan segera memberi konfirmasi melalui email.";
    container.appendChild(judul);

    body.appendChild(container);
}

function incorrect() {
    var body = document.body;


var form = document.createElement("form");
form.setAttribute = ("id", "main-form");
body.appendChild(form);

var container = document.createElement("div");
container.setAttribute("class", "container")
form.appendChild(container);

var judul = document.createElement("h1");
judul.innerHTML = "Search for Employee for Your Startup";
container.appendChild(judul);

var createP = document.createElement("p");
createP.innerHTML = "Silakan mengisi kembali form di bawah ini";
container.appendChild(createP);

container.appendChild(document.createElement("hr"));

var label1 = document.createElement("label");
label1.setAttribute("for", "fullName");
var bold = document.createElement("b");
bold.innerHTML = "Full Name";
label1.appendChild(bold);
container.appendChild(label1);

var fullNameBox = document.createElement("input");
fullNameBox.setAttribute("type", "text");
fullNameBox.setAttribute("placeholder", "Your Full Name Here");
fullNameBox.setAttribute("name", "fullName");
fullNameBox.setAttribute("id", "fullName");
fullNameBox.required = true;
container.appendChild(fullNameBox);

var label2 = document.createElement("label");
label2.setAttribute("for", "email");
var bold2 = document.createElement("b");
bold2.innerHTML = "Email Address";
label2.appendChild(bold2);
container.appendChild(label2);

var emailBox = document.createElement("input");
emailBox.setAttribute("type", "email");
emailBox.setAttribute("placeholder", "Your Email Here");
emailBox.setAttribute("name", "email");
emailBox.setAttribute("id", "email");
emailBox.required = true;
container.appendChild(emailBox);

var label3 = document.createElement("label");
label3.setAttribute("for", "company");
var bold3 = document.createElement("b");
bold3.innerHTML = "Company Name";
label3.appendChild(bold3);
container.appendChild(label3);

var companyBox = document.createElement("input");
companyBox.setAttribute("type", "text");
companyBox.setAttribute("placeholder", "Your Company Name Here");
companyBox.setAttribute("name", "company");
companyBox.setAttribute("id", "company");
companyBox.required = true;
container.appendChild(companyBox);

var label4 = document.createElement("label");
label4.setAttribute("for", "industry");
var bold4 = document.createElement("b");
bold4.innerHTML = "Industry Sector";
label4.appendChild(bold4);
container.appendChild(label4);

var industryDrop = document.createElement("select");
industryDrop.setAttribute("id", "industry");

var option1 = document.createElement("option");
option1.setAttribute("value", "Advertising & Marketing");
option1.innerHTML = "Advertising & Marketing";
industryDrop.appendChild(option1);

var option2 = document.createElement("option");
option2.setAttribute("value", "Accounting");
option2.innerHTML = "Accounting";
industryDrop.appendChild(option2);

var option3 = document.createElement("option");
option3.setAttribute("value", "Agriculture");
option3.innerHTML = "Agriculture";
industryDrop.appendChild(option3);

var option4 = document.createElement("option");
option4.setAttribute("value", "Education");
option4.innerHTML = "Education";
industryDrop.appendChild(option4);

var option5 = document.createElement("option");
option5.setAttribute("value", "Fintech");
option5.innerHTML = "Fintech";
industryDrop.appendChild(option5);

var option6 = document.createElement("option");
option6.setAttribute("value", "Health");
option6.innerHTML = "Health";
industryDrop.appendChild(option6);

var option7 = document.createElement("option");
option7.setAttribute("value", "Others");
option7.innerHTML = "Others";
industryDrop.appendChild(option7);

container.appendChild(industryDrop);

var label5 = document.createElement("label");
label5.setAttribute("for", "level");
var bold5 = document.createElement("b");
bold5.innerHTML = "Job's Level";
label5.appendChild(bold5);
container.appendChild(label5);

var levelDrop = document.createElement("select");
levelDrop.setAttribute("id", "level");

var level1 = document.createElement("option");
level1.setAttribute("value", "Entry Level");
level1.innerHTML = "Entry Level";
levelDrop.appendChild(level1);

var level2 = document.createElement("option");
level2.setAttribute("value", "Junior Leve");
level2.innerHTML = "Junior Level";
levelDrop.appendChild(level2);

var level3 = document.createElement("option");
level3.setAttribute("value", "Senior Level");
level3.innerHTML = "Senior Level";
levelDrop.appendChild(level3);

var level4 = document.createElement("option");
level4.setAttribute("value", "Managerial Level");
level4.innerHTML = "Managerial Level";
levelDrop.appendChild(level4);

var level5 = document.createElement("option");
level5.setAttribute("value", "Directorate Level");
level5.innerHTML = "Directorate";
levelDrop.appendChild(level5);

container.appendChild(levelDrop);

var label6 = document.createElement("label");
label6.setAttribute("for", "jobTitle");
var bold6 = document.createElement("b");
bold6.innerHTML = "Job Title";
label6.appendChild(bold6);
container.appendChild(label6);

var titleBox = document.createElement("input");
titleBox.setAttribute("type", "text");
titleBox.setAttribute("placeholder", "Position/Job Title");
titleBox.setAttribute("name", "jobTitle");
titleBox.setAttribute("id", "jobTitle");
titleBox.required = true;
container.appendChild(titleBox);

container.appendChild(document.createElement("hr"));

var newP = document.createElement("p");
newP.innerHTML = "Dengan mengisi form ini, Anda setuju dengan syarat dan ketentuan yang berlaku";
container.appendChild(newP);

var button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "submit");
button.setAttribute("onclick", "pastikan()");
button.innerHTML = "Register";

container.appendChild(button);

}