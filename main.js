// let date = prompt("hgcfhchhfcf,2001");
// let age = 2018-date;
// alert(age);




// let  date = prompt("Dogum tarixinizi daxil edin...");

// if (date==2001){
//     alert("Bu sizin dogum tarixinizdir.");
// }

// else if (date==2017){
//     alert("BU kecen ildir");
// }

// else{
//     alert("Bu sizin dogum tarixiniz deyil");
// }




// let number=prompt("Reqemi daxil edin");

// if (number>0 );
// {
//     alert("+");
// }

// if (number<0 );
// {
//     alert("-");
// }




// let login="tehmine"

// password=12345;

// let question = prompt("LOgini daxil edin, ");

// if (question == login){
//     alert("Duzgundur");
// }
// else{
//     alert("Sehfdir");
// }

// let questionPassword = prompt("Parolu daxil edin..., ");




// let time=prompt("Ders saatinizi daxil edin ");

// if (time < 12 || time > 15){
//         alert("DErs vaxti deyil");
//     }
// else{
//         alert("DErs vaxtidir");
//     }




// alert("Nezrin");
// alert("Nezrin");
// alert("Nezrin");
// alert("Nezrin");
// alert("Nezrin");





// for(let i=0; i<=10; i++){
//     alert('Nezrin');
// }





// for(let y=10; y>0; y-=3){
//     alert(y);
//     console.log(y);
// }





// for(let i=0; i<10; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }





// let num1, num2;
// num1 = prompt('BIrinci ededi daxil et',"0");
// num2 = prompt('Ikinci ededi daxil et',"0");

// if(num1 > num2){
//     alert(`${num1} boyukdur ${num2} - den`);
// }

// else if(num2 > num1){
//     alert(`${num1} boyukdur ${num2} - den`);
// }

// else{
//     alert(`${num1} ve ${num2} - beraberdir`);
// }


// let a=0;
// while(a<13){
//     console.log(a)
//     alert(a)
//     a++;
// }



// let sum = 0;

// while(true){
//     let value = prompt("Reqemi daxil edin", 0);

//     if(!value){
//         break;
//     }
//     sum += Number(value);
// }

// console.log('Toplam' , sum)




// studentName = prompt("Ad daxil edin ");

// switch (studentName){
//     case"Nezrin":
//         alert("Sinifkomdur");
//         break;
//     case"Mecnun":
//     case"Resad":
//     case"Kerem":
//         alert("Arxa partadakilar");
//         break;
//     default:
//     alert("Yalnish");
//     break;
// }




// number = prompt("Reqemi daxil edin ");

// switch (number){
//     case "0":
//         alert("0");
//         break;
//     case "1":
//         alert("1");
//         break;
//     case("2"):
//     case("3"):
//         alert("2,3");
//         break;
//     default:
//         alert("Yalnishdir");
//         break;
// }



// function number(a,b){
//     if(a>b){
//         alert(`${a} boyukdur ${b} den`);
//     }
//     else{
//         alert(`${a} kicikdir ${b} den`);
//     }
// }

// number(4,8);


document.getElementById("menu-btn").onclick = function(){
    if(document.getElementById("mobile-menu").classList.contains("open-menu")){
        document.getElementById("mobile-menu").classList.remove("open-menu");
    }else{
        document.getElementById("mobile-menu").classList.add("open-menu");
    }
}   