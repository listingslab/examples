/**
 * Aligent
 *
 * @package     firestore-events
 * @author      Chris Dorward <chris.dorward@aligent.com.au>
 * @repo        https://bitbucket.org/aligent/aligent-pwaboiler
 *
 */

/*
 https://greensock.com/TweenMax
 */

import { TweenMax, Back, Power2 } from 'gsap'
const baseDuration = 1.5;

export function animateScaleIn (target, callback, bounce=true) {
  let easing = Back.easeOut;
  if (!bounce){
    easing = Power2.easeOut
  }
  TweenMax.from( target, baseDuration,{
      css:{
        scale:1.4,
        opacity:0
      },
      ease:easing,
      onComplete: callback
    });
}
