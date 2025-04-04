function App() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Strive Frontend!
      </h1>
      <p className="text-lg text-gray-700">
        Your Dev Container environment is ready. Tailwind is configured.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        (Dependencies installed via postCreateCommand)
      </p>
      {/* Add shadcn components here later using 'npx shadcn-ui@latest add ...' in the container terminal */}
    </div>
  );
}

export default App;
