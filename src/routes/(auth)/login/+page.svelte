<script lang="ts">
	import { goto } from '$app/navigation';
	import { Label, Input, Helper, Spinner, Alert } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline, LockOpenOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import VisitorApi from 'visitorapi';
	import { env } from '$env/dynamic/public';
	import { supabase } from '$lib/supabaseClient.js';

	// Form state

	let loginAttempts = 0;
	const maxAttempts = 5;
	let lastAttemptTime = 0;
	const attemptWindowMs = 15 * 60 * 1000; // 15 minute window

	let visitorData: any;

		let email = 'admin@gmail.com';
	let password = '123';
	let showPassword = false;
	let isLoading = false;
	let errorMessage = '';
	

	// SQL Injection patterns
	const sqlInjectionPatterns = [
		/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE|EXEC|UNION|JOIN)\b)/i,
		/('|"|`|--|\/\*|\*\/|;|\\)/,
		/(OR\s+1=1|AND\s+1=1|XOR\s+1=1)/i,
		/(WAITFOR\s+DELAY|SLEEP|BENCHMARK)\s*\(/i,
		/(LOAD_FILE|OUTFILE|DUMPFILE)\s*\(/i,
	];

	// Brute force patterns
	const bruteForcePatterns = [
		/^[a-zA-Z0-9]{1,5}$/, // Very short passwords
		/^[0-9]+$/, // All numbers
		/^[a-zA-Z]+$/, // All letters
		/(.)\1{3,}/, // Repeated characters
	];

	const handleSubmit = async () => {
		// Reset error message
		errorMessage = '';
		isLoading = true;

		// Check for brute force attempts
		const now = Date.now();
		if (lastAttemptTime > 0 && now - lastAttemptTime < attemptWindowMs) {
			loginAttempts++;
		} else {
			// Reset counter if outside the time window
			loginAttempts = 1;
		}
		lastAttemptTime = now;

		if (loginAttempts >= maxAttempts) {
			errorMessage = 'Too many login attempts. Please try again later.';
			
			isLoading = false;
			logSecurityEvent();
			goto('/fake-dashboard');
			return;
		}

		// Validate inputs
		if (!email || !password) {
			errorMessage = 'Please fill in all fields';
			isLoading = false;
			return;
		}

		// Check for SQL injection
		if (detectSqlInjection(email) || detectSqlInjection(password)) {
			errorMessage = 'Invalid input detected';
			isLoading = false;
			logSecurityEvent();
			goto('/fake-dashboard');
			return;
		}

		// Check for brute force patterns
		if (detectBruteForcePattern(password)) {
			errorMessage = 'Password does not meet security requirements';
			isLoading = false;
			logSecurityEvent();
			//goto('/fake-dashboard');
			return;
		}

		// Proceed with normal login
		try {
			// Simulate login - replace with your actual auth logic
			if ( email == "admin@gmail.com" && password == "pass1234" ) {
				loginAttempts = 0;
				goto('/dashboard');
			} else {
				errorMessage = 'Invalid email or password';
				logSecurityEvent();
			}

		
		} catch (err) {
			errorMessage = 'An error occurred during login';
			logSecurityEvent();
		} finally {
			isLoading = false;
		}
	};

	const detectSqlInjection = (input: string): boolean => {
		return sqlInjectionPatterns.some(pattern => pattern.test(input));
	};

	const detectBruteForcePattern = (input: string): boolean => {
		return bruteForcePatterns.some(pattern => pattern.test(input));
	};

	const logSecurityEvent = async () => {
		try {
			await supabase
					.from('scams')
					.insert([{ ip_address: visitorData?.ipAddress, country_name: visitorData?.countryName, city: visitorData?.city, city_co: visitorData?.cityLatLong, browser: visitorData?.browser, os: visitorData?.os }])
					
		} catch (error) {
			console.error('Failed to log security event:', error);
		}
	};

	const togglePasswordVisibility = () => {
		showPassword = !showPassword;
	};

	onMount(async () => {
		await VisitorApi(env.PUBLIC_API_KEY, (data) => {
			visitorData = data;
		});
	});
</script>

<div class="lg:w-[45%] min-h-[80vh] pt-24">
	<h1 class="text-[30px] font-medium mb-5">Sign in</h1>
	
	{#if errorMessage}
		<Alert color="red" class="mb-4">
			<span slot="icon"><LockOpenOutline class="w-5 h-5" /></span>
			<span class="font-medium">{errorMessage}</span>
		</Alert>
	{/if}
	
	<form on:submit|preventDefault={handleSubmit}>
		<Label class="space-y-2">
			<span class="block mb-2 text-sm font-medium">Email</span>
			<Input
				bind:value={email}
				type="email"
				class="bg-emerald-50 p-4 pl-8"
				placeholder="Enter your email"
				size="md"
				required
			>
				<EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500" />
			</Input>
		</Label>
		
		<Label class="space-y-2 mt-4">
			<span class="block mb-2 text-sm font-medium">Password</span>
			<Input
				bind:value={password}
				type={showPassword ? 'text' : 'password'}
				placeholder="Enter your password"
				class="bg-emerald-50 p-4"
				size="md"
				required
			>
				<button slot="right" on:click|preventDefault={togglePasswordVisibility} class="text-gray-500">
					{#if showPassword}
						<EyeSlashOutline class="w-5 h-5" />
					{:else}
						<EyeOutline class="w-5 h-5" />
					{/if}
				</button>
			</Input>
			<Helper class="text-xs mt-1">
				Password must be at least 8 characters with a mix of letters, numbers, and symbols
			</Helper>
		</Label>
		
		<div class="w-full mt-4">
			<a href="/forgot-password" class="text-gray-500 hover:text-gray-700 text-sm float-right">
				Forgot Password?
			</a>
		</div>
		
		<button 
			type="submit"
			class="hover:shadow-sm transition-all duration-100 mt-10 text-center w-full py-4 rounded-lg font-medium shadow-xl shadow-gray-300 text-white bg-[#068353] disabled:opacity-50"
			disabled={isLoading}
		>
			<span class="flex space-x-4 justify-center items-center">
				<p>Login</p> 
				{#if isLoading}
					<Spinner color="white" size="5" />
				{/if}
			</span>
		</button>
	</form>
	
	<p class="lg:hidden mt-5 text-center text-sm">
		Don't have an account? 
		<a href="/signup" class="ml-2 text-green-600 font-medium hover:underline">
			Register here
		</a>
	</p>
</div>y
