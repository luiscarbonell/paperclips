// Make Paperclips
let m_p = setInterval(function() { document.getElementById('btnMakePaperclip').click() }, 10)

// Buy Wire
let b_w = setInterval(function() { if(document.getElementById('wire').innerHTML === "0") document.getElementById('btnBuyWire').click()  }, 100)
