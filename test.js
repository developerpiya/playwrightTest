// users = [
//     { name: "srishti", account: "POA" },
//     { name: "prefigure", account: "POA" },
//     { name: "santosh", account: "POA" },
//     { name: "hritik", account: "POA" },
//     { name: "shruti", account: "POA" },
//     { name: "rahul", account: "POA" },
//     { name: "snehil", account: "POA" },
//     { name: "Aditya_master", account: "POA" },
//     { name: "dhruv", account: "SIP" },
//     { name: "isha", account: "SIP" },
//     { name: "jhasaurabh", account: "SIP" },
//     { name: "pankaj", account: "SIP" },
//     { name: "kanika", account: "SIP" },
//     { name: "jestin", account: "SIP" },
//     { name: "himank", account: "SIP" },
//     { name: "rukhsana", account: "SIP" },
//     { name: "rahulk", account: "SIP" },
//     { name: "Prefiguresd1", account: "POA" },
//     { name: "Prefiguresd2", account: "POA" },
//     { name: "SD3_Prefigure", account: "POA" },
//     { name: "SD4_Prefigure", account: "POA" },
//     { name: "SD5_Prefigure", account: "POA" },
//     { name: "SD6_Prefigure", account: "POA" },
//     { name: "SD7_Prefigure", account: "POA" },
//     { name: "ansh", account: "POA" },
//     { name: "ruchi", account: "POA" },
//     { name: "adnan", account: "POA" },
//     { name: "rosiq5", account: "POA" },
//     //   { name: "rosiq6", account: "POA" },
//     { name: "SD8_Prefigure", account: "POA" },
//     { name: "SD9_Prefigure", account: "POA" },
//     { name: "SD10_Prefigure", account: "POA" },
//     { name: "kirti", account: "POA" },
//     { name: "jema", account: "POA" },
//     { name: "pervin", account: "POA" },
//     { name: "shashank", account: "SIP" },
// ];

users = [
    { name: "srishti", account: "POA" },
    { name: "prefigure", account: "POA" },
    { name: "santosh", account: "POA" },
    { name: "hritik", account: "POA" },
    { name: "shruti", account: "POA" },
    { name: "rahul", account: "POA" },
    { name: "snehil", account: "POA" },
    { name: "Aditya_master", account: "POA" },
    { name: "dhruv", account: "SIP" },
    { name: "isha", account: "SIP" },
    { name: "jhasaurabh", account: "SIP" },
    { name: "pankaj", account: "SIP" },
    { name: "kanika", account: "SIP" },
    { name: "jestin", account: "SIP" },
    { name: "himank", account: "SIP" },
    { name: "rukhsana", account: "SIP" },
    { name: "rahulk", account: "SIP" },
    { name: "Prefiguresd1", account: "POA" },
    { name: "Prefiguresd2", account: "POA" },
    { name: "SD3_Prefigure", account: "POA" },
    { name: "SD4_Prefigure", account: "POA" },
    { name: "SD5_Prefigure", account: "POA" },
    { name: "SD6_Prefigure", account: "POA" },
    { name: "SD7_Prefigure", account: "POA" },
    { name: "ansh", account: "POA" },
    { name: "ruchi", account: "POA" },
    { name: "adnan", account: "POA" },
    { name: "rosiq5", account: "POA" },
    //   { name: "rosiq6", account: "POA" },
    { name: "SD8_Prefigure", account: "POA" },
    { name: "SD9_Prefigure", account: "POA" },
    { name: "SD10_Prefigure", account: "POA" },
    { name: "kirti", account: "POA" },
    { name: "jema", account: "POA" },
    { name: "pervin", account: "POA" },
    { name: "shashank", account: "SIP" },
]

users.forEach(user => {
    user.isActive = true;
    user.ADTYPE = "AFS_CHANNEL";
});

var jsonFormat = JSON.stringify(users);
console.log(jsonFormat);