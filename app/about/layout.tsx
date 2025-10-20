export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>navbar</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
