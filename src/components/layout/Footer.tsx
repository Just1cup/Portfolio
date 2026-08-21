import { profile } from "../../content/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Secure by design.</p>
      <a href="#home">Back to top</a>
    </footer>
  );
}
