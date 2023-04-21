import React from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  function getFollowerHandler() {
    router.push("https://www.instagram.com/yemlihansapan/");
  }
  return (
    <>
      <button onClick={getFollowerHandler}>Go to Profile</button>
    </>
  );
}
