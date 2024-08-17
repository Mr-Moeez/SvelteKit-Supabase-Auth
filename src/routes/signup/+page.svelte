<script>
	import { loginWithGoogle } from '$lib/auth';
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let password = '';

	async function signUpNewUser() {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: '/'
			}
		});
		if (error) console.error('Error logging in:', error.message);
		else console.log('Logged in successfully', data);
	}
	
	}
</script>

<form on:submit|preventDefault={signUpNewUser}>
	<input type="email" bind:value={email} placeholder="Email" />
	<input type="password" bind:value={password} placeholder="Password" />
	<button type="submit">Sign Up</button>
</form>
<button on:click={handleLoginWithGoogle}>Sign Up with google</button>
