const divContainer = document.getElementById("div_container");
let newdata="";
const fetching=async ()=>{
let res=await fetch('https://restcountries.com/v3.1/all');
let data =await res.json();
console.log(data);
data && data.map((values)=>{

    newdata+=`<table>
           <tr class="row col-lg-4"> 
              <td class="col-sm-12">
          <div class="card">
            <h5 class="card-header">${values.name.common}</h5>
              <img src=${values.flags.png} class="card-img-top" alt="flag1">
              <p class="card-body">Capital: ${values.capital}</p>
              <p class="card-body">Region: ${values.region}</p>
              <p class="card-body">Country Code: ${values.cioc}</p>
              <button class="btn-btn-primary" id="btn-btn" onclick="getweather('${values.name.common}')">Click Me</button>
              
            </div>
          </td>
         </tr>
          </table>`;
                          
        }); 
        
        document.getElementById("container").innerHTML=newdata;
     
}
function getweather(values){
  document.getElementById('new').style.display='block';
  document.getElementById('container').style.opacity='0.7';
 const api="https://api.openweathermap.org/data/2.5/weather?q="+values+"&appid=6fa0b3bc0e7c9304dfc3a6094e6bc2c7";
 fetch(api).then(response=>response.json()).then((data)=>{
              let wname=data.name;
              let wtemp=data.main['temp'];
              let wspeed=data.wind['speed'];
              let whumid=data.main['humidity'];
              document.getElementById("cnamee").innerHTML=wname;
              document.getElementById("chumidd").innerHTML=whumid;
              document.getElementById("cwindd").innerHTML=wspeed;
              document.getElementById("ctempp").innerHTML=wtemp;
 }).catch(err=>{
     alert(err);
 })
}
document.getElementById('close-btn-btn').addEventListener('click',()=>{
  document.getElementById('new').style.display='none';
})
fetching();
