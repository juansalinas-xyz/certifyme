export async function createContact(contact) : Promise<any> {
    try {
        const res = await fetch(`http://localhost:3000/api/contacts/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to create contact`);
        }
        return res.json();
      } catch (error) {
        console.error(`Error creating contact`, error);
        return null; // or return {};
      }
}