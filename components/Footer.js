export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__content">
				<h3>Links of Interest</h3>
				<a href="/rss.xml">RSS Feed</a>
				<br />
				<a href="/todo">Todo List</a>
				<br />
				<a href="https://keyoxide.org/hkp/garrit@slashdev.space">PGP Key</a>
				<br />
				<a href="/guestbook">Guestbook</a>
				<br />
				<a href="/blogroll">Blogroll</a>
				<br />
				<a href="/ctf">Capture the Flag</a>
				<h3>Elsewhere</h3>
				<a href="https://github.com/garritfra" rel="me">
					Github
				</a>
				<br />
				<a href="https://www.linkedin.com/in/garritfranke/">LinkedIn</a>
				<br />
				<a href="https://fosstodon.org/@garritfra">Mastodon (ActivityPub)</a>
				<br />
				<a href="/contact">Contact</a>
			</div>
			<p>
				👻 Proud member of <a target="_blank" href="https://darktheme.club/">darktheme.club</a>{" "}
				👻
			</p>

			<p>
				© 2018-{currentYear} Garrit Franke
				<br />
				<a href="/privacy">Privacy</a> |{" "}
				<a target="_blank" href="https://github.com/garritfra/garrit.xyz">Source Code</a>
			</p>
		</footer>
	);
}
