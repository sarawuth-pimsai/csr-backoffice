import useIssue from "./hooks/issue.hook";

function App() {
  const { issues } = useIssue();
  return (
    <>
      <div className="flex min-h-[1100px]">
        {issues.map((iss) => (
          <div key={iss.id} className="flex">
            {iss.id}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
