var pageName = window.location.pathname.split('/').pop();
console.log(pageName);

if (pageName === 'inscription.html') {
    import('./pagesJS/inscription')
}else if (pageName === 'login.html') {
    import ('./pagesJS/login')
}else if (pageName === 'profil.html') {
    import ('./pagesJS/profil')
}