<h1>Your account settings</h1>

<p><i>This doesn't actually do anything.</i></p>
<form method="POST">
	<label for="username">Username</label>
	<input
		type="text"
		id="username"
		name="username" />

	<label for="email">Email</label>
	<input
		type="email"
		id="email"
		name="email" />

	<label for="password">Password</label>
	<input
		type="password"
		id="password"
		name="password" />

	<button>Save changes</button>
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr 13fr;
		align-items: center;
		gap: 1em;
		border: 1px solid #0070f3;
		border-radius: 5px;
		padding: 1em;
	}

	label {
		font-weight: bold;
	}

	input {
		width: 100%;
		padding: 0.5em;
		border: 1px solid #0070f3;
		border-radius: 5px;
	}

	button {
		grid-column: span 2;
		background-color: #0070f3;
		color: white;
		border: none;
		border-radius: 5px;
		padding: 0.5em 1em;
	}
</style>
