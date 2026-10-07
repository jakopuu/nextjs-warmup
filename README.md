# nextjs-warmup

## Mida õppisin

**1. Mida pakub Next.js lisaks Reactile?**
Next.js sisaldab valmis marsruutimist, serveripoolset renderdamist ja API-marsruute, nii et eraldi teeki (nt React Router) ega eraldi backendi pole vaja.

**2. Miks vajab loendur `'use client'`?**
`useState` ja klikisündmuste käsitlejad töötavad ainult brauseris, seega tuleb komponent märkida Client Component-ideks.

**3. Kus jookseb `app/api/message/route.js` kood?**
Serveris (Node.js keskkonnas), mitte kunagi kasutaja brauseris.

**4. Kuidas on see lõpp-punkt sarnane Expressi route'iga?**
Mõlemad seovad URL-i ja HTTP meetodi (siin `GET /api/message`) käsitleja funktsiooniga, mis tagastab vastuse.

**5. Miks peavad saladused jääma serverisse?**
Brauserisse saadetud koodi ja andmeid saab igaüks lugeda, seega API võtmed ja andmebaasi paroolid peavad olema ainult serveripoolses koodis.
