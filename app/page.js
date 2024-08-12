"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        console.log(data)
      });
  }, []);

  return (
    <main>
      <Link href={"/login"}><button className="login-btn text-white text-xl font-normal">Login</button></Link>
    </main>
  );
}
