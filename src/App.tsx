import { useEffect } from 'react';
import { usePortfolioStore } from './store/portfolioStore';
import { DebugBar } from './components/DebugBar';

function App() {
  const { portfolioData, isLoading, error, fetchPortfolioData } =
    usePortfolioStore();

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-xl font-semibold">Loading portfolio...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-xl font-semibold text-red-600">Error</div>
          <div className="text-gray-600 mt-2">{error}</div>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return null;
  }

  return (
    <>
      <div
        className="min-h-screen p-8 pb-[calc(6vh+2rem)]"
        style={{
          backgroundColor: portfolioData.themeColors.background,
          color: portfolioData.themeColors.text,
        }}
      >
        <header className="max-w-4xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: portfolioData.themeColors.primary }}
          >
            {portfolioData.name}
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: portfolioData.themeColors.secondary }}
          >
            {portfolioData.description}
          </p>

          <nav className="mb-8">
            <ul className="flex gap-6">
              {portfolioData.navLinks.map((navLink, index) => (
                <li key={index}>
                  <a
                    href={navLink.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Theme Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(portfolioData.themeColors).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-20 rounded-lg shadow-md mb-2"
                    style={{ backgroundColor: value }}
                  />
                  <div className="text-sm font-medium capitalize">{key}</div>
                  <div className="text-xs text-gray-500">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
      <DebugBar />
    </>
  );
}

export default App;
