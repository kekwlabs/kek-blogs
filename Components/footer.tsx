export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        <a href="https://github.com/orgs/kekwlabs/people">
          <code>&copy; kekwLabs</code>
        </a>
      </p>
      <ul>
        <li>
          <a href="https://twitter.com/kekwLabs">
            <img
              className="contact-icons"
              src="/assets/icons/twitter.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/9r88g5FyEU">
            <img
              className="contact-icons"
              src="/assets/icons/discord.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/kekwlabs">
            <img
              className="contact-icons"
              src="/assets/icons/reddit.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/kekwlabs/">
            <img
              className="contact-icons"
              src="/assets/icons/github.svg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
