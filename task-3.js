const arr1=[17,21,23];
const arr2=[12, 5, -5, 0, 4];

console.log(`${arr2[0]}ºC in ${[0+1]} days...${arr2[1]}ºC in ${[0+2]} days...`);
const printForecast=function(arr)
{
   let res="";
   for(i=0;i<arr.length;i++)
   {
     res+=`${arr[i]}ºC in ${[i+1]} days...`;
   }
   return res;
}
console.log(printForecast(arr2));