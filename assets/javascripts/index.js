// Begin Actions
function F_doLoaded() {
    document.main = new F_cMain();
    document.objectModel = new Object();
    F_OM('Layout', 'LayoutLYR', 'doc', '', new Array());
    F_OM('Bild5', 'Bild5LYR', 'img', 'Layout', null, '', 0);

    F_OM('Bild6', 'Bild6LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild6', 'Set Src', './assets/images/rbu.gif', 0,
        'Mouse Out', 'Bild6', 'Set Src', './assets/images/rb.gif', 0,
        'Clicked', 'Layout', 'Go To', './rehbach.html', 0), '', 0);
    F_OM('Bild7', 'Bild7LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild7', 'Set Src', './assets/images/kndu.gif', 0,
        'Mouse Out', 'Bild7', 'Set Src', './assets/images/knd.gif', 0,
        'Clicked', 'Layout', 'Go To', './knautnaundorf.html', 0), '', 0);
    F_OM('Bild8', 'Bild8LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild8', 'Set Src', './assets/images/hmdu.gif', 0,
        'Mouse Out', 'Bild8', 'Set Src', './assets/images/hmd.gif', 0,
        'Clicked', 'Layout', 'Go To', './hartmannsdorf.html', 0), '', 0);
    F_OM('Bild9', 'Bild9LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild9', 'Set Src', './assets/images/deru.gif', 0,
        'Mouse Out', 'Bild9', 'Set Src', './assets/images/der.gif', 0,
        'Clicked', 'Layout', 'Go To', './ortschaftsrat.html', 0), '', 0);
    F_OM('Bild11', 'Bild11LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild11', 'Set Src', './assets/images/aktu.gif', 0,
        'Mouse Out', 'Bild11', 'Set Src', './assets/images/akt.gif', 0,
        'Clicked', 'Layout', 'Go To', './aktuelles.html', 0), '', 0);
    F_OM('Bild12', 'Bild12LYR', 'img', 'Layout', new Array(
        'Mouse Over', 'Bild12', 'Set Src', './assets/images/protu.gif', 0,
        'Mouse Out', 'Bild12', 'Set Src', './assets/images/prot.gif', 0,
        'Clicked', 'Layout', 'Go To', './protokolle.html', 0), '', 0);
    F_OM('LayoutBereich2', 'LayoutBereich2LYR', 'lyr', 'Layout', null, '', 0);
    F_pageLoaded('Layout');
}

$(document).ready(function () {
    F_onLoaded();
    $('#Bild6A').bind('click', function (__e) {
        return (F_e('Bild6', F_CL, __e));
    });
    $('#Bild6A').bind('mouseover', function (__e) {
        return (F_e('Bild6', F_MV, __e));
    });
    $('#Bild6A').bind('mouseout', function (__e) {
        return (F_e('Bild6', F_MT, __e));
    });
    $('#Bild7A').bind('click', function (__e) {
        return (F_e('Bild7', F_CL, __e));
    });
    $('#Bild7A').bind('mouseover', function (__e) {
        return (F_e('Bild7', F_MV, __e));
    });
    $('#Bild7A').bind('mouseout', function (__e) {
        return (F_e('Bild7', F_MT, __e));
    });
    $('#Bild8A').bind('click', function (__e) {
        return (F_e('Bild8', F_CL, __e));
    });
    $('#Bild8A').bind('mouseover', function (__e) {
        return (F_e('Bild8', F_MV, __e));
    });
    $('#Bild8A').bind('mouseout', function (__e) {
        return (F_e('Bild8', F_MT, __e));
    });
    $('#Bild9A').bind('click', function (__e) {
        return (F_e('Bild9', F_CL, __e));
    });
    $('#Bild9A').bind('mouseover', function (__e) {
        return (F_e('Bild9', F_MV, __e));
    });
    $('#Bild9A').bind('mouseout', function (__e) {
        return (F_e('Bild9', F_MT, __e));
    });
    $('#Bild11A').bind('click', function (__e) {
        return (F_e('Bild11', F_CL, __e));
    });
    $('#Bild11A').bind('mouseover', function (__e) {
        return (F_e('Bild11', F_MV, __e));
    });
    $('#Bild11A').bind('mouseout', function (__e) {
        return (F_e('Bild11', F_MT, __e));
    });
    $('#Bild12A').bind('click', function (__e) {
        return (F_e('Bild12', F_CL, __e));
    });
    $('#Bild12A').bind('mouseover', function (__e) {
        return (F_e('Bild12', F_MV, __e));
    });
    $('#Bild12A').bind('mouseout', function (__e) {
        return (F_e('Bild12', F_MT, __e));
    });
});
// End Actions

