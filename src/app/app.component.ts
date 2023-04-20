import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sliderBaseLine';
}


const track = document.getElementById('image-track')

  window.onmousedown = e => (document.getElementById('image-track').dataset['mouseDownAt'] = e.clientX);
  window.onmouseup = () => {
    document.getElementById('image-track').dataset['mouseDownAt'] = "0";
    document.getElementById('image-track').dataset[`prevPercentage`] = document.getElementById('image-track').dataset[`percentage`];
  };
  
  window.onmousemove = e => {
  if(parseInt(document.getElementById('image-track').dataset['mouseDownAt']) === 0)return;
  
    const mouseDelta = parseFloat(document.getElementById('image-track').dataset['mouseDownAt']) - e.clientX,
      maxDelta = window.innerWidth / 2;
  
    var percentage= ( mouseDelta / maxDelta) * -100,
    nextPercentage = Math.max(Math.min(parseFloat(document.getElementById('image-track').dataset['prevPercentage']) + percentage,0), -100);
    //nextPercentageImage = Math.max(Math.min((parseFloat(document.getElementById('image-track').dataset['prevPercentage']) + percentage)/2,0), -100);
  
    ((document.getElementById('image-track').dataset['percentage'] as any) as number) = nextPercentage;
  
    document.getElementById('image-track').animate({
      transform: `translate(${nextPercentage}%, -50%)`,
    }, {
      duration: 1200,
      fill: "forwards"
    });
  
    const tester = document.getElementById('image-track').getElementsByClassName("image");
    console.log(nextPercentage, "NextPercentageImage")
    console.log(nextPercentage, "nextPercentage")
    Array.from(tester).forEach((image) => {
      image.animate({
        objectPosition: `${nextPercentage + 100}% center`,
      },{
        duration: 1200,
        fill: "forwards"
      })
    })
  };
