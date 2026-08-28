# Coffee Blockchain API

Detta projekt är en del av kursen **Blockkedja Backend: Node.js och blockkedja**.

Projektet är ett enkelt backend-API som sparar information om kaffe i en blockkedja.

Ett exempel är när kaffe flyttas från en gård till ett rosteri eller från ett rosteri till ett café.

## Tekniker

Jag använder:

- Node.js
- Express
- Vitest
- Supertest
- Node.js Crypto
- TDD
- REST API
- Proof-of-Work

## Funktioner

Projektet kan:

- lägga till en ny transaktion
- spara väntande transaktioner
- skapa nya block
- mine:a nya block
- skapa SHA-256 hash
- kontrollera om blockkedjan är giltig
- visa hela blockkedjan genom API

## Transaction

En transaction innehåller:

```js
{
  sender: 'Farm A',
  recipient: 'Roastery B',
  batchId: 'COFFEE-001',
  weightKg: 500
}
```

- `sender` = vem som skickar kaffet
- `recipient` = vem som tar emot kaffet
- `batchId` = ID för kaffepartiet
- `weightKg` = vikt i kilogram

## Block

Ett block innehåller:

- `index`
- `timestamp`
- `transactions`
- `previousHash`
- `nonce`
- `hash`

## API

### GET /blockchain

Returnerar hela blockkedjan.

```text
GET /blockchain
```

### POST /transactions

Lägger till en ny transaction i `pendingTransactions`.

Exempel:

```json
{
  "sender": "Farm A",
  "recipient": "Roastery B",
  "batchId": "COFFEE-001",
  "weightKg": 500
}
```

Om viktig information saknas returnerar API:et status `400`.

### POST /mine

Tar alla väntande transactions och skapar ett nytt block.

Efter mining läggs blocket till i blockkedjan.

`pendingTransactions` blir sedan tom.

## Proof-of-Work

Projektet använder Proof-of-Work.

Vid mining ändras ett nummer som heter `nonce`.

Programmet skapar nya hashvärden tills det hittar en hash som börjar med rätt antal nollor.

Exempel med difficulty 2:

```text
a82f... ❌
91bc... ❌
00ab... ✅
```

I testmiljön används lägre difficulty så att testerna går snabbare.

```text
NODE_ENV=test → difficulty 1
```

I vanlig körning används:

```text
difficulty 2
```

## Blockchain validation

Projektet har en metod som heter:

```js
isChainValid();
```

Metoden kontrollerar:

1. att blockets hash fortfarande är korrekt
2. att `previousHash` är samma som föregående blocks hash

Om någon ändrar information i ett block returnerar metoden:

```js
false;
```

Om blockkedjan är korrekt returnerar den:

```js
true;
```

## TDD

Jag har arbetat med TDD.

Jag skrev testet först och sedan skrev jag koden.

Arbetssättet var:

```text
Test
 |
RED
 |
Kod
 |
GREEN
```

## TDD commits

Här är tre exempel där testet skrevs före koden.

### 1. Proof-of-Work / Mining

RED:

https://github.com/mernstackjs/coffee-blockchain-api/commit/5d0f5a8

GREEN:

https://github.com/mernstackjs/coffee-blockchain-api/commit/0e26c0b

### 2. Pending Transactions

RED:

https://github.com/mernstackjs/coffee-blockchain-api/commit/cc84e18

GREEN:

https://github.com/mernstackjs/coffee-blockchain-api/commit/d165c8d

### 3. Genesis Block

RED:

https://github.com/mernstackjs/coffee-blockchain-api/commit/8b11973

GREEN:

https://github.com/mernstackjs/coffee-blockchain-api/commit/830d643

## Tester

För att köra tester:

```bash
npm test
```

För att köra tester en gång:

```bash
npm test -- --run
```

Projektet använder:

- Vitest för tester
- Supertest för API-tester

Alla tester går igenom.

```text
12 tests passed
```

## Code Coverage

För att köra code coverage:

```bash
npm run coverage
```

Resultat:

```text
Statements: 98.18%
Branches:   83.33%
Functions:  100%
Lines:      98.14%
```

Code coverage är över 80%.

## Validation

`POST /transactions` kontrollerar att informationen är korrekt.

En transaction måste ha:

- sender
- recipient
- batchId
- weightKg

Om information saknas returnerar API:et:

```text
400 Bad Request
```

## GitHub

Projektet finns här:

https://github.com/mernstackjs/coffee-blockchain-api
