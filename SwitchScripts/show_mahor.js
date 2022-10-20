var studentName= "Kenny";
var studentMajor;
var advisingLocation;

var majorCode ="mkl";
var majorCodes =majorCode.toUpperCase();



 switch(majorCodes){
    case "BIOL":
        studentMajor="Biology"
        advisingLocation="Science Bldg, Room 310"
        console.log("For student"+studentName+". Your major is " + studentMajor + " and your advising location would be "+ advisingLocation)
        break;
    case "CSCI":
        studentMajor="Computer Science "
        advisingLocation="Sheppard Hall, Room 314"
        console.log("For student "+ studentName +". Your major is " + studentMajor + " and your advising location would be "+ advisingLocation)
        break;
    case "ENG":
        studentMajor="English"
        advisingLocation="Kerr Hall, Room 201"
        console.log("For student "+studentName+". Your major is " + studentMajor + " and your advising location would be "+ advisingLocation)
    case "HIS":
        studentMajor="History"
        advisingLocation="Kerr Hall, Room 114"
        console.log("For student "+studentName+". Your major is " + studentMajor + " and your advising location would be "+ advisingLocation)
        break;
    case "MKR":
        studentMajor="Marketing"
        advisingLocation="Westly Hall, Room 310"
        console.log("For student "+studentName+". Your major is " + studentMajor + " and your advising location would be "+ advisingLocation)
        break;
    default:
        console.log("The Major Code entered is invalid ")
 }