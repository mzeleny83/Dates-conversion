const arrayOfDates=["1993-11-10","2005-10-05","2020-05-01"];

const formatDates=(()=>{
  const datesInCorrectFormat=[];
  for(let i=0;i<arrayOfDates.length;i++){
  const date=arrayOfDates[i]
  const newDate=date.split("-")
  const year=newDate
  console.log(newDate);
  let year="";
  let month=""
  let day="";

  for(let j=0;j<date.length;j++){
  if(j<4) year+=date[j];
  console.log(date[j]);
  if(j>4&&j<7) month+=date[j]
  if(j>7) day +=date[j];
) 
}

datesInCOrrectFormat.push("${day"}.${month}.${year}");
}

return datesInCorrectFormat;
};
