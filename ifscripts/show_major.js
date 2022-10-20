var studentName;
var studentMajor;
var advisingLocation;

var majorCode;

if (majorCode="BIOL"){
    studentMajor="Biology"
    advisingLocation="Science Bldg, Room 310"
    console.log("For student"+studentName+" Your major is " + studentMajor + "and your advising location would be "+ advisingLocation)

}else if (majorCode="CSCI"){
   studentMajor="Computer Science "
   advisingLocation="Sheppard Hall, Room 314"
   console.log("For student "+ studentName +" Your major is " + studentMajor + "and your advising location would be "+ advisingLocation)
}else if (majorCode="ENG"){
    studentMajor="English"
    advisingLocation="Kerr Hall, Room 201"
    console.log("For student "+studentName+" Your major is " + studentMajor + "and your advising location would be "+ advisingLocation)

}else if (majorCode="HST"){
    studentMajor="History"
    advisingLocation="Kerr Hall, Room 114"
    console.log("For student "+studentName+" Your major is " + studentMajor + "and your advising location would be "+ advisingLocation)
 }else if (majorCode="MKT"){
    studentMajor="Marketing"
    advisingLocation="Westly Hall, Room 310"
    console.log("For student "+studentName+" Your major is " + studentMajor + "and your advising location would be "+ advisingLocation)
    
 }else{
    console.log("invalid Major Code")
 }