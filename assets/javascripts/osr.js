OSR = {};

OSR.menu = [
  "Home~index.html",
  "Aktuelles",
  "Ortschaftsrat", [
    "Vorstand",
    "Sitzungstermine"
  ],
  "Veranstaltungen",
  "Die Ortsteile", [
    "Knautnaundorf",
    "Rehbach",
    "Hartmannsdorf"
  ],
  "Ortsleben",[   // (Hier sollte die Google-Maps-Karte integriert werden)
    "Historisches",
    "Einrichtungen",
    "Landbewirtschaftung",
    "Kultur / Naherholung",
    "Lokale Unternehmen"
  ],
  "Protokolle",
  "Themen",[
   "Kinderspielplatz Hartmannsdorf",
   "Kinderspielplatz Knautnaundorf",
   "Elsterbrücke Erikenstraße",
   "Straßenzustand",
   "Internetversorgung",
   "Elsterstausee",
   "Lärmproblematik",
   "Kiesgrube Rehbach",
   "Radwege",
   "ÖPNV"
  ],
  "Newsletter",
  "Impressum"
];


/***********************/
/**   Uninteressant   **/
/***********************/

OSR.init = function () {
  this.setHeadingFromTitle();
  this.setNavigationLeft();
  this.setFooter();
};


OSR.validTitle = function () {
  var valid = true;
  if ($('title').length === 0) {
    alert('Der Seitentitel fehlt. "<title>Der Titel</title>" einfügen!');
    valid = false;
  } else if ($('title').html() === '') {
    alert('Der Titeltext fehlt. "Titel" im Seitentitel einfügen!');
    valid = false;
  } else if ($('title').length > 1) {
    alert('Mehrere Seitentitel. Es darf nur ein mal "<title></title>" existieren!');
    valid = false;
  }
  return valid;
};

OSR.validHeader = function () {
  var valid = true;
  if ($('header').length === 0) {
    alert('Der Kopfbereich fehlt. "<header></header>" einfügen!');
    valid = false;
  } else if ($('header').length > 1) {
    alert('Mehrere Kopfbereiche. Es darf nur ein mal "<header></header>" existieren!');
    valid = false;
  }
  return valid;
};

OSR.validSite = function () {
  var valid = true;
  if ($('div.site').length === 0) {
    alert('Der Hauptbereich fehlt. "<div class="site"></div>" einfügen!');
    valid = false;
  } else if ($('div.site').length > 1) {
    alert('Mehrere Hauptbereiche. Es darf nur ein mal "<div class="site"></div>" existieren!');
    valid = false;
  }
  return valid;
};

OSR.validNavigationLeft = function () {
  var valid = true;
  valid = this.validSite();
  if ($('nav.left').length === 0) {
    alert('Der linke Navigationsbereich fehlt. "<nav class="left"></nav>" einfügen!');
    valid = false;
  } else if ($('nav.left').length > 1) {
    alert('Mehrere linke Navigationsbereich. Es darf nur ein mal "<nav class="left"></nav>" existieren!');
    valid = false;
  }

  if (!this.menu || !OSR.menu.length || typeof OSR.menu.length !== 'number' || this.menu.length < 1) {
    alert('Es wurde kein Menü definiert. "OSR.menu" definieren!');
    valid = false;
  } else {
    //validate structure!!!
    //asynch check for broken links!!!
  }

  return valid;
}

OSR.validFooter = function () {
  var valid = true;
  var valid = true;
  if ($('footer').length === 0) {
    alert('Der Fußbereich fehlt. "<footer></footer>" einfügen!');
    valid = false;
  } else if ($('footer').length > 1) {
    alert('Mehrere Fußbereichs. Es darf nur ein mal "<footer></footer>" existieren!');
    valid = false;
  }
  return valid;
};

OSR.setHeadingFromTitle = function () {
  if (this.validTitle() && this.validHeader()) {
    $('header').html($('<h1>').append($('title').html()));
  }
};

OSR.setNavigationLeft = function () {
  if (this.validNavigationLeft()) {
    var nav, ul, li, a, text, tmpText, content, prefix, cText, cUl, cLi, cHref, href, idx, cIdx, idxOffset = 0;
    nav = $('nav.left');
    ul = $('<ul>');
    for (idx = 0; idx < this.menu.length; idx += 1) {
      if (typeof this.menu[idx] === 'string') {
        text = this.menu[idx];
        if (/~/.test(text)) {
          tmpText = text.split(/~/);
          text = tmpText[0];
          href = tmpText[1];
        } else {
          href = this.sanitizeString(text) + '.html'
        }
        content = this.menu[idx + 1];
        if (content && typeof content === 'object' && content.length && typeof content.length === 'number' && content.length > 0) {
          href = '#'
          cUl = $('<ul>');
          prefix = this.sanitizeString(text) + '_';
          for (cIdx = 0; cIdx < content.length; cIdx += 1) {
            cText = content[cIdx];
            if (/~/.test(cText)) {
              tmpText = cText.split(/~/);
              cText = tmpText[0];
              cHref = tmpText[1];
            } else {
              cHref = prefix + this.sanitizeString(cText) + '.html';
            }
            a = $('<a>', {href: cHref, item: idx - idxOffset}).html(cText);
            if (cHref === OSR.currentLocation()) {a.addClass('current').removeAttr('href'); }
            cLi = $('<li>').append(a);
            cUl.append(cLi);
          }
          idxOffset += 1;
        } else {
          cUl = null;
        }
        a = $('<a>', {href: href, item: idx - idxOffset}).html(text);
        if (href === OSR.currentLocation()) {
          a.addClass('current').removeAttr('href');
        }
        li = $('<li>').append(a);
        if (cUl) {li.append(cUl); }
        ul.append(li);
      }
    }

    ul.accordion({
      event: 'click',
      heightStyle: 'content',
      collapsible: true,
      icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
      active: parseInt(ul.find('a.current').attr('item'), 10)
    });
    nav.append(ul);
    nav.find("a[href!='#']").not('.current').unbind('click');
  }
};

OSR.setFooter = function () {
  if (this.validFooter() && this.validNavigationLeft()) {
    var nav, links;
    links = $("nav.left > ul > li  a[href!='#']").clone();
    links.filter('.current').removeAttr('item').removeAttr('class').addClass('current');
    links.not('.current').removeAttr('item').removeAttr('class');
    links.each(function () {
      $(this).text('[' + $(this).text() + ']');
    })
    links.find('[current]').addClass('current').removeAttr('current');
    nav = $('<nav>').append(links);
    $('footer').html('<hr>').append(nav);
  }
};

OSR.currentLocation = function () {
  var locAry, html;
  locAry = window.location.href.split(/\//);
  return locAry[locAry.length-1];
};

OSR.sanitizeString = function (str) {
  return str.replace(/\u00e4/g, 'ae').
    replace(/\u00f6/g, 'oe').
    replace(/\u00fc/g, 'ue').
    replace(/\u00c4/g, 'Ae').
    replace(/\u00d6/g, 'Oe').
    replace(/\u00dc/g, 'Ue').
    replace(/\u00df/g, 'ss').
    toLowerCase().
    replace(/[^a-z0-9_\-]/g, ' ').
    replace(/\s+/g, '_')
};

$(document).ready(function () {
  OSR.init();
});
