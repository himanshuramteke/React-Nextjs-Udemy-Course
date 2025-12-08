import "./App.css";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "🎁" },
    { id: "ref", label: "Ref props", icon: "🔗" },
    { id: "children", label: "children props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "📈" },
    { id: "theme", label: "theme props", icon: "🌈" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div>
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2 hover:bg-blue-800 hover:cursor-pointer`}
              key={section.id}
            >
              <span>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header>
          <h1>React Props explained</h1>
          <p>A comprehensive guide to understand props in react.</p>
        </header>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
