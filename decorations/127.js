module.exports=((l,e,n,t,i,L,M,f,o,a,r)=>{var d=l(28,39),c=d.getContext("2d");n(c);var p=new t(0,0,0,0,255,255,255,255);function s(l,e,n,t,i){l.fillStyle=L(e.apply([115,138,126,0])),o(l,"M 0 0 L 708 0 708 92 0 92 0 0",!1),l.fill("evenodd")}function u(l,e,n,t,L){switch(n%=1){case 0:i(s,d,l,[1,0,0,1,0,0],e,1,0,0,L)}}var v=0;function y(l,e,n,t,i){var M="M 454 416 L 457 431 300 386 300 372 454 416 M 461 452 L 463 464 96 464 98 452 100 439 257 375 257 389 119 452 98 452 119 452 190 452 257 452 300 452 388 452 461 452 M 545 722 L 432 151 447 94 562 722 545 722 M 43 47 Q 40 24 51 0 L 545 0 Q 553 24 551 47 L 43 47 M 111 115 L 127 142 19 722 0 722 111 115";l.fillStyle=L(e.apply(a(r[v],[128,128,128,1]))),o(l,M,!1),l.fill("evenodd");M="M 457 431 L 454 416 391 72 443 72 391 72 300 72 257 72 300 72 300 372 300 386 457 431 461 452 457 431 M 463 464 L 461 452 388 452 300 425 300 452 257 452 257 424 257 389 257 424 190 452 119 452 257 389 257 375 257 72 167 72 119 72 167 72 100 439 98 452 96 464 90 496 96 464 463 464 469 496 463 464 M 545 722 L 510 722 469 496 300 496 300 698 257 698 257 496 90 496 48 722 19 722 127 142 111 115 119 72 51 72 43 47 551 47 545 72 443 72 447 94 432 151 545 722 M 300 386 L 300 425 300 386 M 300 496 L 257 496 300 496";l.fillStyle=L(e.apply(a(r[v],[60,55,53,1]))),o(l,M,!1),l.fill("evenodd");M="M 457 431 L 454 416 300 372 300 386 M 457 431 L 461 452 463 464 469 496 510 722 545 722 562 722 447 94 443 72 391 72 454 416 M 43 47 Q 40 24 51 0 L 545 0 Q 553 24 551 47 L 545 72 443 72 M 300 72 L 391 72 M 300 72 L 257 72 257 375 257 389 257 424 257 452 300 452 300 425 300 386 M 43 47 L 51 72 119 72 167 72 257 72 M 119 72 L 111 115 M 19 722 L 48 722 90 496 96 464 98 452 100 439 167 72 M 119 452 L 98 452 M 190 452 L 119 452 M 300 425 L 388 452 461 452 M 388 452 L 300 452 M 100 439 L 257 375 M 300 372 L 300 72 M 190 452 L 257 452 M 257 424 L 190 452 M 469 496 L 300 496 300 698 257 698 257 496 90 496 M 19 722 L 0 722 111 115 M 257 496 L 300 496";l.strokeStyle=L(e.apply(a(r[v],[0,0,0,.8]))),l.lineWidth=.3,l.lineCap="round",l.lineJoin="round",o(l,M,!0,"NORMAL")}function h(l,e,n,t,L){switch(n%=1){case 0:i(y,d,l,[1,0,0,1,0,0],e,1,0,0,L)}}var S=1;function w(l,e,n,t,i){var M="M 0 47 L 0 34 Q 74 2 200 0 309 -2 395 21 361 49 0 47";l.fillStyle=L(e.apply(a(r[S],[128,128,128,1]))),o(l,M,!1),l.fill("evenodd");M="M 395 21 L 424 30 424 61 0 61 0 47 Q 361 49 395 21";l.fillStyle=L(e.apply(a(r[S],[79,68,68,1]))),o(l,M,!1),l.fill("evenodd");M="M 395 21 L 424 30 424 61 0 61 0 47 0 34 Q 74 2 200 0 309 -2 395 21 Z";l.strokeStyle=L(e.apply(a(r[S],[0,0,0,.8]))),l.lineWidth=.3,l.lineCap="round",l.lineJoin="round",o(l,M,!0,"NORMAL")}function Q(l,e,n,t,L){switch(n%=1){case 0:i(w,d,l,[1,0,0,1,0,0],e,1,0,0,L)}}var g=-1,m=0,C=[];C.push(0);var R="#ffffff00",k=28,x=39;function A(){c.fillStyle=R,c.fillRect(0,0,d.width,d.height),c.save(),c.transform(d.width/k,0,0,d.height/x,0,0),function(l,e,n,t,L){switch(l.save(),l.transform(1,0,0,1,14,36.5),n%=1){case 0:i(u,d,l,[.031220245361328124,0,0,.05,-10.25,-35.95],e,1,(0+L)%1,0,L),i(h,d,l,[.05,0,0,.05,-13.85,-33.3],e,1,(0+L)%1,0,L),i(Q,d,l,[.05,0,0,.05,-9.95,-36.35],e,1,(0+L)%1,0,L)}l.restore()}(c,p,C[g],0,m),c.restore()}return function(l,e){var n=g;(g=(g+1)%C.length)==n?m++:m=0,A()}(),[d,28,39]});