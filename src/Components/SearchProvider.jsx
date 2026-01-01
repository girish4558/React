import React, { createContext, useContext } from "react";

const SearchContext = createContext([]);

export const SearchProvider = ({ children }) => {
  const siteContent = [
    { id: 1, title: "", content: "React", url: "/react" },
    { id: 2, title: "", content: "jsx", url: "/jsx" },
    { id: 3, title: "", content: "components", url: "/components" },
    { id: 4, title: "", content: "props", url: "/props" },
    { id: 5, title: "", content: "conditional-Rendaring", url: "/conditional-Rendaring" },
    { id: 6, title: "", content: "use-state", url: "/hooks/use-state" },
    { id: 7, title: "", content: "use-effect", url: "/hooks/use-effect" },
    { id: 8, title: "", content: "use-context", url: "/hooks/use-context" },
    { id: 9, title: "", content: "use-ref", url: "/hooks/use-ref" },
    { id: 10, title: "", content: "use-reducer", url: "/hooks/use-reducer" },
    { id: 11, title: "", content: "use-id", url: "/hooks/use-id" },
    { id: 12, title: "", content: "lists", url: "/lists" },
    { id: 13, title: "", content: "forms", url: "/forms" },
    { id: 14, title: "", content: "routings", url: "/routings" },
    { id: 15, title: "", content: "context-API", url: "/context-API" },
    { id: 16, title: "", content: "Custom-hooks", url: "/Custom-hooks" },
    { id: 17, title: "", content: "API-Integration", url: "/API-Integration" },

  ];

  return (
    <SearchContext.Provider value={siteContent}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSiteContent = () => useContext(SearchContext);
