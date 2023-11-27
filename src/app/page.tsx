"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function getDevelopers() {
      const { data } = await axios.get("/api/developers");
      setDevelopers(data);
    }
    getDevelopers();
  });

  return (
    <div>
      <h1>home</h1>
      <ul>
        {developers.map((developer: any) => (
          <li key={developer.id}>{developer.number}</li>
        ))}
      </ul>
    </div>
  );
}
