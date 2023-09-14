const toggle_btn=document.querySelector('#checkbox');
// Get the root element (usually <html>) to access the CSS variables
const root = document.documentElement;
toggle_btn.addEventListener('change',()=>{
    if(toggle_btn.checked){
        root.style.setProperty('--pure-black', '#000000');
        root.style.setProperty('--pure-white', '#fff');
        root.style.setProperty('--pencil-black', '#5f5f5f');
        root.style.setProperty('--mild-black', '#000');
        root.style.setProperty('--mild-whote', '#f5f9fa');
        root.style.setProperty(' --hover-bla    ck', '#585858');
      
    }
    else{
        root.style.setProperty('--pure-black', '#fff');
        root.style.setProperty('--pure-white', '#000000');
        root.style.setProperty('--pencil-black', '#000');
        root.style.setProperty('--mild-black', '#5f5f5f');
        root.style.setProperty('--mild-whote', '#585858');
        root.style.setProperty(' --hover-black', ' #f5f9fa');
        root.style.setProperty('--text-color','#fff');
    }
});



