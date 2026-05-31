import { getSession } from "next-auth/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getAuthHeaders() {
  const session = await getSession();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.accessToken ?? ""}`,
  };
}

export const api = {
  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      headers: await getAuthHeaders(),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async put<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      method: "PUT",
      headers: await getAuthHeaders(),
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async delete(path: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/api${path}`, {
      method: "DELETE",
      headers: await getAuthHeaders(),
    });
    if (!res.ok) throw new Error(await res.text());
  },
};
