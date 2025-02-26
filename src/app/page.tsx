export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-2xl">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            KanitasAB - Webbplats under underhåll
          </h1>
          
          <div className="w-20 h-1 bg-blue-500"></div>
          
          <p className="text-lg sm:text-xl">
            Vi arbetar för tillfället med att förbättra vår webbplats för att ge dig en bättre upplevelse.
          </p>
        </div>

        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Vi kommer snart tillbaka!</h2>
          <p className="mb-4">
            Vi beklagar eventuella olägenheter detta kan orsaka. Vårt team arbetar hårt för att slutföra uppdateringarna så snart som möjligt.
          </p>
          <p>
            Har du några frågor under tiden? Kontakta oss via:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Telefon: 08-410 740 01</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>E-post: info@kanitas.se</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2025 KanitasAB. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}