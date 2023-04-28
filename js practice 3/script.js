function sumArray(a) {
    sum=0;
    a.forEach(element => {
        sum=sum+element;
    });
    return sum;
  }
  
  document.write(sumArray([4, 6, 16, 73, 5]));
  document.write("<br>");
  
  function getAboveZero(a){
    b=[]
    a.forEach(element => {
        if(element>0)b.push(element);
    });
      return b;
  }
  
  document.write(getAboveZero([1, -3, -2, 4, 10]));
  document.write("<br>");
  
  function getPonies(ponies, ponie){
      if(ponies.includes(ponie)){
        return ponie;
      }
      else{
        return false;
      }
      
  }
  
  document.write(getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'],'AppleJack'));
    document.write("<br>");
  
  function isTxIncluded(bk, tx){
    if(bk.includes(tx)){

        return ponie;
      }
      else{

        return false;
      }
  }
  
  document.write(isTxIncluded(["0xaea0","0x8f80", "0xf3ad", "0x17ec"],"0x9e0a"));
  document.write("<br>");
  
  function getSizes(strings){
    lengths=[]
    strings.forEach(element => {
        lengths.push(element.length)
    });
    return lengths
  }
  
  document.write(getSizes(["Moscow","Coding", "School"]));
  document.write("<br>");

function getWithSpaces(strings){
    s="";
    strings.forEach(element => {
        s+=" "+element;
    });
    s.slice(1);
    return [s, s.length];
}

document.write(getWithSpaces(["Moscow", "never","sleep"]));
document.write("<br>");

function getEpisodes(anime){
    return `Аниме ${anime.title} включает ${anime.episodes} серий`;
}

document.write(getEpisodes({title:"Code Geass", episodes: 25}));
document.write("<br>");

let triple = (a) => a*3;

document.write(triple(2));
document.write("<br>");

let getAvgGlucose = (a) => a.reduce((a, b) => (a + b)) / a.length;

document.write(getAvgGlucose([5.4, 8.1, 6.3, 4.9]).toFixed(1));
document.write("<br>")
