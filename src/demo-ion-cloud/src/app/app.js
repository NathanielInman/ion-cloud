import 'file-loader?name=[name].html!./index.jade';
import './app.styl';
import {Easel,Ion,IonCloud} from '../../../lib/';
import {demo} from './demo';

/**
 * Launch application if easel was able to create a canvas,
 * if it wasn't then we know canvas isn't supported
 */
let noscript = document.querySelector('noscript'),
    easel = new Easel(),
    scene = new IonCloud(easel,Ion);

if(!easel.activated){
  noscript.innerHTML = `
  <p class="browsehappy">
    You are using an outdated browser. Please
    <a href="http://browsehappy.com/"> upgrade your browser</a>
    to improve your experience.
    <span style="color:red;"><br/>Canvas isn't supported in your browser.</span>
  </p>`;
}else{
  noscript.style.visibility='hidden';
  demo(scene);
} //end if
