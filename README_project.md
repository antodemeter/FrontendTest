# ProntoPro - Test Frontend
author: Antonello Galetta

Scelte del progetto:
...spiegazione di Node, Bower etc...

How to setup project
--------------------
To setup the project, just copy and paste the following code in your terminal:

```sh
# Using OSX you need to run commands with SUDO

# Install Node.js with HomeBrew
# If you doesn't have HomeBrew, please install running:
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install Node.js
brew install node

# Install Grunt & Bower
npm install -g grunt-cli
npm install -g bower

# Download Node packages, update and prune
npm install
npm update
npm prune

# Download Bower packages, update and prune
bower install
bower update
bower prune
```




![Logo ProntoPro.it](https://www.prontopro.it/bundles/prontoprofrontend/img/logo.png)

## Istruzioni

Il test consiste nella ralizzazione di due pagine:
- Una dinamica con forms, chiamate ajax e manipolazione del DOM.
- Una statica per la realizzazione di un mockup dettagliato.

Le pagine devono essere realizzate secondo standards e best practices, con decente compatibilità cross-browser e in modo adatto alla fruizione su dispositivi mobili.

Entrambe le pagine condividono header e footer.
![header](http://prontoproit.github.io/FrontendTest/img/header.png) ![footer](http://prontoproit.github.io/FrontendTest/img/footer.png)

### Pagina Dinamica

![mockup](http://prontoproit.github.io/FrontendTest/img/mockup1.png)

Nella sezione centrale c'è un campo con autocomplete le cui voci sono caricate attraverso una chiamata ajax all'indirizzo:  
`https://www.prontopro.it/work-with-us/dev/fe/test/autocomplete`

L'oggetto ritornato è nella forma:

```
[
  {
    "label": <label>,
    "url": <url>
  }, ...
]
```

In cui `<label>` è l'etichetta della suggestion da mostrare nell'autocomplete e `<url>` è l'indirizzo da cui ottenere le specifiche del form da renderizzare.

Al momento della selezione di una tipologia di form dall'autocomplete bisogna renderizzarlo ottenendo le specifiche con una chiamata ajax all'url ottenuto allo step precedente.

L'oggetto ritornato è nella forma:

```
[
  {
    "name": <name>,
    "label": <label>,
    "type": <type>,
    "rules": [
      {
        "type": <rule_type>,
        "msg": <error_message>,
        "options": <optional_parameters>
      }, ...
    ]
  }, ...
]
```

(vedere [form0](https://www.prontopro.it/work-with-us/dev/fe/test/form/0), [form1](https://www.prontopro.it/work-with-us/dev/fe/test/form/1), [form2](https://www.prontopro.it/work-with-us/dev/fe/test/form/2) per riferimento ai possibili valori)

![mockup](http://prontoproit.github.io/FrontendTest/img/mockup2.png)

Quando viene cliccato il bottone di submit deve essere effettuata la validazione secondo le regole espresse in `rules`, mostrando eventuali messaggi di errore.

Se il form passa la validazione i valori devono essere visualizzati nella colonna di destra.

Bonus:
- Possibilità di eliminare una delle precedenti submission.
- Possibilità di ricaricare i dati di una submission passata cliccandoci sopra.

### Pagina statica

Realizzare la pagina del seguente mockup:

![mockup](http://prontoproit.github.io/FrontendTest/img/static.png)

## Valutazione

I primari oggetti di valutazione sono:
- Completezza rispetto alle specifiche.
- Organizzazione, pulizia e stile.

Inoltre verranno considerate le scelte fatte:
- Uso di un preprocessore (JS e/o CSS).
- Uso di librerie e frameworks (JS e/o CSS).
- Automatizzazione del processo di build.
- Eventuale integrazione di meccanismi di testing e/o linting.

(Dove ritenuto opportuno motivare le scelte effettuate)

## Modalità di consegna

Effettuare una fork di questa repository, realizzare le pagine richieste e, a compito eseguito, iniziare una pull request.  
Inoltre scrivere una semplice nota (o come messaggio sulla PR o rimpiazzando questo README) sulla struttura del progetto, su come eseguirlo ed eventuali info utili.
