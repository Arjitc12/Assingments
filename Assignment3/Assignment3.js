function​ ​m2s(​num​)​ ​{
​let Seconds =​ num * ​60;
​return   Seconds; }

function​ ​evnDvd(a,b)​ ​{
​return​ Boolean(b%a)​;
}

function​ ​charCtr(​letter,str​) {
​let​ ltr_count ​=​ ​0;
​for​ ​(let​ pos ​=​ ​0;​ pos ​<​ str​.​length​;​ pos​++) ​{
​if​ ​(​str​.charAt(​position​)​ ​==​ letter​)​ ​{​ ltr_count ​+=​ ​1;} ​}
​return​ ltr_count​; }


function​ ​addsUpTo(​num​)​ ​{
let​ result ​=​ ​0; if(num==0||num==1){return num;} else
{
for​ ​(let​ i ​=​ ​0;​ i ​<=​ num​;​ i​++)​ ​{​result +=i;​}
return result; }


function reverseInPlace(str,alpha) { let words = [];
 let result = "";
for (var i = indexOf(alpha); i < “ ”; i++) {
result += words[i].split('').reverse().join('') + " "; } return result;
}


function (arr){
let var1 = arr[0];
let ctr = 0;
for(let i=1;i<arr.length;i++){ if(arr[i] != var1){ ctr+=1; }
}
if(!ctr){return ‘JACKPOT’;}
}



function getUnique(array){ var uniqueArray = [];

 for(i=0; i < array.length; i++){ if(uniqueArray.indexOf(array[i]) === -1) {
uniqueArray.push(array[i]); }
}
return uniqueArray; }



function realType(x){ return (typeof x); }




function numOnly(arr){
let arr1=[];
let num= [‘1’,’0’,’2’,’3’,’4’,’5’,’6’,’7’,’8’,’9’] for(let i=0;i<arr.length;i++){
if(arr[i].contains(num))
{arr1.append(arr[i]);} }
return arr1;
}
