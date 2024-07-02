
export async function getCertificate(id) : Promise<any> {
    try {
        const res = await fetch(`http://localhost:3000/api/certifications/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch certification with id ${id}`);
        }
        return res.json();
      } catch (error) {
        console.error(`Error loading certification with id ${id}: `, error);
        return null; // or return {};
      }
}