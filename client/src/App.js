import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function fetchLeads() {
    const res = await api.get("/leads");
    setLeads(res.data);
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  async function addLead(e) {
    e.preventDefault();
    await api.post("/leads", { name, email });
    setName("");
    setEmail("");
    fetchLeads();
  }

  async function deleteLead(id) {
    await api.delete(`/leads/${id}`);
    fetchLeads();
  }
  async function updateStatus(id, status) {
    await api.put(`/leads/${id}`, { status });
    fetchLeads();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Mini CRM Dashboard
        </h1>

        <form onSubmit={addLead} className="flex gap-4 mb-6">
          <input
            className="border p-2 rounded w-1/3"
            placeholder="İsim"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-1/3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ekle
          </button>
        </form>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">İsim</th>
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
              <th className="p-2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="border-b hover:bg-gray-50">
                <td className="p-2">{lead._id.slice(-6)}</td>
                <td className="p-2">{lead.name}</td>
                <td className="p-2">{lead.email}</td>

                <td className="p-2">
                  <select
                    className="border rounded p-1"
                    value={lead.status || "New"}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Won</option>
                    <option>Lost</option>
                  </select>
                </td>

                <td className="p-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteLead(lead._id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Henüz lead yok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
