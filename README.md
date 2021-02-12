# raahandel-praktikantOpgave
 
## Opgavebeskrivelse
Jeres opgave bliver at returnere dataen fra det array, i filen 'productList.js', i form af 'cards'. Altså en kasse/kort med forskellige informationer og et billede.
I kan finde eksempler på 'product cards" hos [Dribbble](https://dribbble.com/search/product%20card) eller på vores [markedsplads](https://markedsplads.raahandel.dk/), under alle varer. **Det vigtige er ikke designet, men selve funktionen**.

## Opgavekrav
* I skal importere 'productList.js' og bruge .map til at returnere de 5 varer i array'et. Alle skal vises.
* Alle varer skal bygges op omkring et component, som er genbrugeligt, og returneres X antal gange. Alt efter hvor mange der er i array'et. Altså hvis vi tilføjede en vare mere, så skal den kunne vises uden yderligere kode.
* Kortene skal vise titel, type, producent og billede.
* Enhedsmængde og kollimængde skal vises.
* Hvis varen er økologisk eller har kølekrav, så skal det fremgå.
* Prisen svarer til én unit, og skal derfor ganges med bulkSize for at vise prisen for et kolli. Den pris skal returneres.
* Udover disse krav, så er det op til jer hvor flot I vil gøre det designetmæssigt, og om I vil returnere andet.

Lav et repo på GitHub og upload det løbende, så I kan vise det til mig, eller hinanden.

Det vigtigste værktøj i har i Javascript (React eller Node), er **console.log()**. Brug den, og brug den ofte!
Hvis I løber i problemer, så kan I enten bruge hinanden, eller I kan skrive til mig. Det vigtigste er bare at I bruger den **guide til problemløsning** som jeg har givet jer. **Reducer problemet!**

# 2. GraphQL
Denne gang bliver jeres opgave at lave en mock database med GraphQL, som I kan køre på jeres local environment, og derefter hente dataen ind med GraphQL og Fetch/Axios.

I skal installere json-graphql-server globalt. F.eks. ved at køre 'npm i json-graphql-server -g' i jeres terminal.  
I skal starte serveren ved at køre 'json-graphql-server db.js' i den mappe hvor I har db.js. Den vil køre på port 3000. Hvis I vil have den til at starte på en anden port, så kan det gøres ved at tilføje --p "port nummer" til den tidligere command. F.eks. 'json-graphql-server db.js --port 4500'.  
Hvis I tilgår localhost:3000 eller localhost:4500, alt efter jere port, så kan I nu tilgå jeres GraphQL.  
I højre hjørne kan I trykke på 'Docs', og så vil I kunne se de Queries (hente data), eller Mutations (poste/ændre data). Hvis I trykker på 'Query', så kan I se de queries I kan tilgå. Da jeres db.js indeholder 'Users' og 'Products', så har den lavet 'User(id: ID!): User' og 'Product(id: ID!): Product'. De kan bruges til at hente én bestem user eller et bestemt produkt, ved at give den et id. Så er der også lavet allUsers og allProducts, som kan hente alle users eller products.  
Ude til venstre kan I skrive jeres requests, i dette tilfælde query. Der er også auto-complete, så hvis i begynder at skrive, så vil den give jer forslag, alt efter hvad jeres database indeholder.  
GraphQL bruger double quotations, så I vil opleve at i får fejl hvis i bruger ' fremfor ".

## GraphQL Eksempel
### Hent brugeren med id'et "ckf2ahphm000901ji4jdccjvu".
query {  
&nbsp;&nbsp;&nbsp;&nbsp;User(id: "ckf2ahphm000901ji4jdccjvu") {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role  
&nbsp;&nbsp;&nbsp;&nbsp;}  
}

### Hent alle brugere".
query {  
&nbsp;&nbsp;&nbsp;&nbsp;allUsers {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role  
&nbsp;&nbsp;&nbsp;&nbsp;}  
}

### Brug Fetch eller Axios til at hente dataen ind i jeres React App.
### Fetch
fetch({  
&nbsp;&nbsp;&nbsp;&nbsp;url: 'http://localhost:3000/graphql',  
&nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',  
&nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify({ query:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'query allUsers {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}'  
&nbsp;&nbsp;&nbsp;&nbsp;})  
})
.then(response => response.json())  
.then(json => {  
&nbsp;&nbsp;&nbsp;&nbsp;console.log(result);  
})

### Axios
axios({  
&nbsp;&nbsp;&nbsp;&nbsp;url: 'http://localhost:3000/graphql',  
&nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',  
&nbsp;&nbsp;&nbsp;&nbsp;data: JSON.stringify({ query:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'query allUsers {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}'  
&nbsp;&nbsp;&nbsp;&nbsp;})  
})  
.then(res => {  
&nbsp;&nbsp;&nbsp;&nbsp;console.log(res);  
})

De ligner hinanden, så det er en smagssag om hvilken I vil bruge. Som I også kan se, så den query I brugte i jeres GraphQL, skal sættes ind jeres data request.  
Da det er nogle nye navne og endpoints I arbejder med, så er det **vigtigt at I bruger console.log()**, da I nok ikke bare kan sætte det direkte ind og regne med at det vil virke med jeres produkt kort.

## Opgavekrav
* Sæt en mock database op, med json-graphql-server, og tilgå den via browseren.
* Lær at bruge Query, ved at bruge det nye GraphQL værktøj i browseren.
* Tilføj en mailadresse til alle brugere i databasen, og hent den i jeres GraphQL værktøj.
* Hent dataen ind i jeres React App, med Fetch eller Axios, og console.log dataen.
* Udskift den tidligere import til jeres map, med den nye via Fetch eller Axios.
* Ligesom med product cards, så skal I lave user cards.


Lav et repo på GitHub og upload det løbende, så I kan vise det til mig, eller hinanden.

Det vigtigste værktøj i har i Javascript (React eller Node), er **console.log()**. Brug den, og brug den ofte!  
Hvis I løber i problemer, så kan I enten bruge hinanden, eller I kan skrive til mig. Det vigtigste er bare at I bruger den **guide til problemløsning** som jeg har givet jer. **Reducer problemet!**

3. React Router
Nu hvor I har jeres product og user cards, som I henter ind med GraphQL, så er det på tide at gøre de kort mere brugbare. Først skal I lave en side for users, og en side for produkter. Ved hjælp fra React Router skal I linke i mellem dem, så jeg fra produkter kan hoppe til brugere, og omvendt. Derefter skal I bruge React Router til at føre brugeren ind på de specifikke produkter, og brugere, når de trykker på det respektive kort. Inde på de individuelle kort, skal der så kun være information om det specfikke produkt, eller bruger.

Dette kan opnås ved at pass'e data til URL'en, i form af props. Det mest normale ville at pass'e ID'et, som I derefter kan bruge inde på de specifikke kort, ved at trække ID'et ud af URL'en igen, og bruge til at søge med jeres GraphQL. Man kan også bruge andet, som et navn, hvis man ikke kan tilgå et ID. Men så er det vigtigt at man kun har unikke navne.

Opgavekrav
* I skal bruge React Router (React/Links hvis I laver det i Next.js).
* I skal linke mellem produkter og brugere.
* Hvert kort skal linke til de respektive brugere, eller produkter.
* Produkterne skal indeholde yderligere information, som der ikke er plads til på kortet. 
Her tænker jeg   produktbeskrivelserne.
* Producenternes navne, som indgår i produkt kortene, skal linke til de respektive brugere. I kan enten bruge deres navne, som nu, eller udskifte deres navn i produktdatabasen, men et array som indeholder deres ID og deres navn.
* Dataen under de specifikke kort skal hentes med med GraphQL, baseret på ID eller navn.
Lav et repo på GitHub og upload det løbende, så I kan vise det til mig, eller hinanden.

Det vigtigste værktøj i har i Javascript (React eller Node), er console.log(). Brug den, og brug den ofte!
Hvis I løber i problemer, så kan I enten bruge hinanden, eller I kan skrive til mig. Det vigtigste er bare at I bruger den guide til problemløsning som jeg har givet jer. Reducer problemet!