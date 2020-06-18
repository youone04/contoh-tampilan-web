
function tombolKontak(){
    let profil = document.getElementById('profil');
    let aside = document.getElementById('aside');
    let kontak = document.getElementById('kontak');
    let about = document.getElementById('about');
    kontak.style.display ='block';
    profil.style.display = 'none';
    aside.style.display ='none';
    about.style.display = 'none';

}

function tombolHome(){
    let profil = document.getElementById('profil');
    let aside = document.getElementById('aside');
    let kontak = document.getElementById('kontak');
    let about = document.getElementById('about');
    kontak.style.display ='none';
    profil.style.display = 'block';
    aside.style.display ='block';
    about.style.display = 'none';
}

function tombolAbout(){
    let profil = document.getElementById('profil');
    let aside = document.getElementById('aside');
    let kontak = document.getElementById('kontak');
    let about = document.getElementById('about');
    kontak.style.display ='none';
    profil.style.display = 'none';
    aside.style.display ='none';
    about.style.display = 'block';
}