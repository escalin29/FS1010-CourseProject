import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
      case "minLength":
        return <p>Last name minmium 2 charcaters required</p>;
      case "pattern":
        return <p>Enter a valid email address</p>;
      default:
        return null;
    }
  }

  return null;
}
