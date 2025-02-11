// src/utils/api.ts
export const fetchData = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
  ) => {
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (err) {
      console.error("Request failed:", err);
      throw err;
    }
  };
  