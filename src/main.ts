import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // const track = document.getElementById('image-track')

  // window.onmousedown = e => (track.dataset['mouseDownAt'] = e.clientX);
  
  // window.onmouseup = () => {
  // track.dataset['mouseDownAt'] = "0";
  // track.dataset[`prevPercentage`] = track.dataset[`percentage`];
  // };
  
  // window.onmousemove = e => {
  // if(parseInt(track.dataset['mouseDownAt']) === 0)return;
  
  //   const mouseDelta = parseFloat(track.dataset['mouseDownAt']) - e.clientX,
  //     maxDelta = window.innerWidth / 2;
  
  //   var percentage= ( mouseDelta / maxDelta) * -100,
  //   nextPercentage = Math.max(Math.min(parseFloat(track.dataset['prevPercentage']) + percentage,0), -175),
  //   nextPercentageImage = Math.max(Math.min((parseFloat(track.dataset['prevPercentage']) + percentage)/2,0), -100);
  
  //   ((track.dataset['percentage'] as any) as number) = nextPercentage;
  
  //   track.animate({
  //     transform: `translate(${nextPercentage}%, -50%)`,
  //   }, {
  //     duration: 1200,
  //     fill: "forwards"
  //   });
  
  //   const tester = track.getElementsByClassName("image");
  //   console.log(nextPercentageImage, "NextPercentageImage")
  //   console.log(nextPercentage, "nextPercentage")
  //   Array.from(tester).forEach((image) => {
  //     image.animate({
  //       objectPosition: `${nextPercentageImage + 100}% center`,
  //     },{
  //       duration: 1200,
  //       fill: "forwards"
  //     })
  //   })
  // };