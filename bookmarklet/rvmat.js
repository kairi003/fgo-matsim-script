javascript:{document.head.insertAdjacentHTML("beforeend","<style>.icon-chaldea-r1,.icon-chaldea-r2,.icon-chaldea-r3,.icon-chaldea-r4,.icon-chaldea-r5{display:flex;} .rev-check{display:inline-block !important;}</style>");let e=e=>{let c=+localStorage["chaldea-icon-reversed"];for(let l of e){let a=l.querySelector(".box-c_image input")?.value??0;l.style.order=(-1)**c*a}},c=Object.assign(document.createElement("input"),{type:"checkbox",id:"revCheck",className:"rev-check",checked:!!+localStorage["chaldea-icon-reversed"]});document.querySelector(".select-class").appendChild(c),c.addEventListener("change",l=>{localStorage["chaldea-icon-reversed"]=+c.checked,e(document.querySelectorAll(".box-chaldea"))});let l=new MutationObserver(c=>{e(c.map(e=>[...e.addedNodes]).flat())});for(let a of document.querySelectorAll('[class^="icon-chaldea-r"]'))l.observe(a,{childList:!0});e(document.querySelectorAll(".box-chaldea"))}