// Make Paperclip Makers
let m_p_m = setInterval(function() { 
  // Maker Paperclips
  setInterval(function() { 
    document.getElementById('btnMakePaperclip').click() 
  }, 1) 
}, 30000)

// Buy Wire
let b_w = setInterval(function() { if(document.getElementById('wire').innerHTML === "0") document.getElementById('btnBuyWire').click()  }, 100)

// Complete Project
let c_p = setInterval(function() { let a = document.getElementById('projectListTop').querySelectorAll('button:not([disabled])'); if(a.length > 0) (a[0]).click(); }, 1000)
