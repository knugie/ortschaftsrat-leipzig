# Ortschaftsrat Leipzig

Vorschau: [http://knugie.github.io/ortschaftsrat-leipzig/](http://knugie.github.io/ortschaftsrat-leipzig/)  
Final: [http://ortschaftsrat-leipzig.de](http://ortschaftsrat-leipzig.de)

## Arbeiten in GitHub (online)
Zum <b>synchronisieren</b> des branches Master mit ghpages: auf "compare & review" klicken, die Basisversion auswählen (in die die Änderungen integriert werden sollen) , die Compareversion auswählen (die die Änderungen enthält). - Breite Zeile unter der Auswahl klicken und nochmals "Submit" klicken. Anschließend "Merge" klicken.


## Arbeiten lokal (nach installation von Git)

1. Dateien lokal bearbeiten, löschen, einfügen auf der Festplatte -> '/Dokumente/Ortschaftsrat Web/ortschaftsrat-leipzig'
Vorschau der Webseite erfolgt über die lokalen Dateien im Browser.

2. in der Console : TERMINAL
  * Ordner mit dem Git-Inhalt wählen: cd "Dokumente/Ortschaftsrat Web/ortschaftsrat-leipzig"
  * Befehl 'git status' vergleicht lokale Änderungen mit GitHub
  * Befeht 'git fetch' holt Infos zu allen (Online-)Änderungen von GitHub
  * Befehl 'git pull' integriert alle Webänderungen in lokale Dateien
  * Befehl 'git cola' startet Software zum stagen  und committen von Änderungen
  * Befehl 'git push' integriert die Änderungen der Festplatte auf GitHub (nur Änderungen die bereits commited sind)

3. in Git cola
  Dieses Programm stellt dem Programmierer übersichtlich alle Änderungen zusammen, die er seit dem letzten Commit getätigt hat.
  * im Repository Status stehen alle geänderten / neuen Dateien -> diese akzeptieren: 'Stage'
  * soll ein push erfolgen, müssen alle Änderungen gestaged sein und anschließend Commited werden -> Commit Message erstellen + 'Eintragen'


## Die Ordnerstruktur
    .
    ├── assets
    │   ├── images             # Enthält alle Bilddateien, Unterordner sind u.U. sinnvoll.
    │   │   ├── ...
    │   │   ├── osr_head.gif
    │   │   └── ...
    │   ├── javascripts        # Enthält alle JS-Dateien.
    │   │   ├── ...
    │   │   ├── osr.js         # Enthält die Navigation (links und im Fußbereich).
    │   │   └── ...
    │   └── stylesheets        # Enthält alle CSS-Dateien.
    │       ├── ...
    │       ├── osr.css        # Enthält alle Farb- und Layout-Informationen.
    │       └── ...
    ├── downloads              # Enthält alle Dateien, die zum Download angeboten werden.
    │   ├── ...
    │   ├── foerderverein.pdf
    │   └── ...
    ├── ...                    # Hier liegen alle HTML-Dateien.
    ├── impressum.html         # enthält: Das Impressum.
    ├── index.html             # enthält: Die Startseite.
    ├── README.md              # Diese Datei
    └── ...


## Die HTML-Struktur
    <!doctype html>
    <html>
    <head>
      ...
      <title>Der Titel</title>
      ...
    </head>
    <body>
    <header></header>
    <div class="site">
      <nav class="left"></nav>
      
      <article class="top">

       Einleitung ins Thema

      </article>

      <article class="content">

       <h2>große Überschrift</h2>
       <h3>kleine Überschrift</h3>
       <p>Absatz1</p>
       <p>Absatz2</p>

      </article>
    </div>
    <footer></footer>
    </body>
    </html>

Zum Bearbeiten muss ein Editor verwendet werden, der UTF-8 voll unterstützt, z.B.: [Notepad++](http://notepad-plus-plus.org/download/v6.5.2.html). oder gedit von Linux
