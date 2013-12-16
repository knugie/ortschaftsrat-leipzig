# Ortschaftsrat Leipzig

Vorschau: [http://knugie.github.io/ortschaftsrat-leipzig/](http://knugie.github.io/ortschaftsrat-leipzig/)  
Final: [http://ortschaftsrat-leipzig.de](http://ortschaftsrat-leipzig.de)


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
      <article class="content">

        Der Inhalt

      </article>
    </div>
    <footer></footer>
    </body>
    </html>

Zum Bearbeiten muss ein Editor verwendet werden, der UTF-8 voll unterstützt, z.B.: [Notepad++](http://notepad-plus-plus.org/download/v6.5.2.html).
