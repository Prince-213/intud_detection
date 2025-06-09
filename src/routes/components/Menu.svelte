<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	let menu = [
		{ name: 'About us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact us', href: '/contact' },
		{ name: 'Library', href: '/library' },
		{ name: 'Newsletter', href: '/news' },
		{ name: 'Support Center', href: '/support' },
		{ name: 'Resources', href: '/resource' },
		{ name: 'Playground', href: '/play' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Pro Version', href: '/pro' },
		{ name: 'License', href: '/license' }
	];
    import logo from '$lib/logo.png';
    import back from '$lib/back.jpg';
</script>


<div>
    <Navbar class=' p-0' let:hidden let:toggle>
        <NavBrand class=' fix -translate-x-20' href="/">
            <img src={logo} class="mr-3 w-[80px] " alt="Flowbite Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Estate</span
            >
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {hidden} >
            <NavLi href="/">Home</NavLi>
            <NavLi class="cursor-pointer">
                Mega menu<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
            </NavLi>
            
            <NavLi href="/services">Services</NavLi>
            <NavLi href="/services">Products</NavLi>
            <NavLi href="/services">Contact</NavLi>
        </NavUl>
    </Navbar>
</div>


<style>
   .fix {
    padding: 0;
   }

</style>