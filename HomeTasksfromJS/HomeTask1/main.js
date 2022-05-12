//Query1
let text="vghjdgvcbhdn";
console.log(text.length);

//Query2
//1ci start 2ci end-dir.2cini yazmasaq startdan stringin sonuna qeder olan setri goturecek.
var str="Mustang, Supra, Skyline";
console.log(str.slice(9,14));
console.log(str.slice(9));

//Query3
var str="Mustang, Supra, Skyline";
console.log(str.substring(9,14));

//Query4
//substr'de start ve startdan bashlayaraq length goturur.
var str="Mustang, Supra, Skyline";
console.log(str.substr(9,14));
console.log(str.substr(-7));

//Query5
var str="Mustang, Supra, Skyline";
var newstr=str.replace("Mustang","Drift Car");
console.log(newstr);

//Query6
//i upperCase yazilan stringi lowerCase olaraq oxumaga komek edir
var str="Mustang, Supra, Skyline";
var newstr=str.replace(/MUSTANG/i,"Drift Car");
console.log(newstr);

//Query7
//g 1den artiq olan stringlerin hamsini deyishmeye imkan verir.
var str="Mustang, Mustang, Supra, Skyline";
var newstr=str.replace(/Mustang/g,"Drift Car");
console.log(newstr);

//Query8
str="Supra";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Query9
//stringe add etmeye komek edir.
let text2="Dashgin";
console.log(text2.concat(" ","Yoldashov"));

//Query10
//trim kenarlardaki boshluqlari legv edir.
let text3="     Zekeriyye Babil     ";
console.log(text3);
console.log(text3.trim());

//Query11
//1ci reqem umumi stringin uzunlugunu gosterir ve elimizde olan stringin uzerine add etdiyimiz stringin uzunugunu gelerek qeyd edirik.
let text4="layiq";
console.log(text4.padStart(7,"Na"));
console.log(text4.padEnd(11," deyil"));
//eger reqem verilibse stringe chevrilib pad istifade edilmelidir.
let a=5;
console.log(a.toString().padEnd(3,"0"));

//Query12
let text5="Shamama"
console.log(text5.charAt(0));
console.log(text5.charCodeAt(0));
//or
console.log(text5[2]);

//Query13
let text6="Dashgin Leon Ali";
console.log(text6.split(' ',3));

