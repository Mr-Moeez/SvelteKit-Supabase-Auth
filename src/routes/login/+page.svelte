<script>
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let password = '';

	async function loginUser() {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) console.error('Error logging in:', error.message);
		else console.log('Logged in successfully', data);
	}
</script>

<form on:submit|preventDefault={loginUser}>
	<input type="email" bind:value={email} placeholder="Email" />
	<input type="password" bind:value={password} placeholder="Password" />
	<button type="submit">Login</button>
</form>
