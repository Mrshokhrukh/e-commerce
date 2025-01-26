export const API_BASE_URL = "https://dummyjson.com/"; 

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}products`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();

    return products;

  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}


