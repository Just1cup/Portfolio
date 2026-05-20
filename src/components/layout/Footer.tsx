import { profile } from "../../content/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and a security-first mindset.</p>
      <a href="#home">Back to top</a>
    </footer>
  );
}
