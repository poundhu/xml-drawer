module.exports=((t,e,r,l,a,o,f,i,n,s,c)=>{var d=t(800,400),p=d.getContext("2d");r(p);var h=new l(0,0,0,0,255,255,255,255),v=0;function u(t,e,r,l,a){n(t,"M 16000 8000 L 0 8000 0 0 16000 0 16000 8000",!1),t.fillStyle=o(e.apply(s(c[v],[95,94,94,1]))),t.fill("evenodd"),t.save(),t.clip(),t.transform(.9681396484375,0,0,.9681396484375,1600,120);var f=t.createRadialGradient(-31680,0,0,0,0,16384);f.addColorStop(0,o(e.apply(s(c[v],[128,128,128,1])))),f.addColorStop(1,o(e.apply(s(c[v],[95,94,94,1])))),t.fillStyle=f,t.fillRect(-16384,-16384,32768,32768),t.restore()}function y(t,e,r,l,o){switch(r%=1){case 0:a(u,d,t,[1,0,0,1,0,0],e,1,0,0,o)}}var w=-1,S=0,g=[];g.push(0);var m="#ffffff00",C=800,R=400;function x(){p.fillStyle=m,p.fillRect(0,0,d.width,d.height),p.save(),p.transform(d.width/C,0,0,d.height/R,0,0),function(t,e,r,l,o){switch(t.save(),t.transform(1,0,0,1,0,0),r%=1){case 0:a(y,d,t,[.05,0,0,.05,0,0],e,1,(0+o)%1,0,o)}t.restore()}(p,h,g[w],0,S),p.restore()}return function(t,e){var r=w;(w=(w+1)%g.length)==r?S++:S=0,x()}(),[d,800,400]});