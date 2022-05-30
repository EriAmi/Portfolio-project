export async function verifyToken(token: string): Promise<boolean> {
  const response = await fetch(`${process.env.API_ENDPOINT}/api/authentication/verifyToken`, {
    method: "POST",
    body: JSON.stringify({ token: token }),
  });

  const data: boolean = await response.json();
  return data;
}
