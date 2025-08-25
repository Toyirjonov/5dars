export async function getData(url: string) {
  try {
    const req = await fetch(url);

    if (!req.ok) {
      throw new Error("Smth went wrong");
    }

    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    // stop loading
  }
}
