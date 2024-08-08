import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeachOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-auto">
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 w-full rounded-full bg-yellow-100 px-4 py-2 text-sm tracking-wide outline-none transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:mb-0 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SeachOrder;
