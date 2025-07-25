<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  let time = "";
  let tzAbbr = "";
  let interval: number;

  function updateTime() {
    const now = new Date();
    time = now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/New_York"
    });
    // Get the time zone abbreviation (EST/EDT)
    const parts = now.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      timeZoneName: "short"
    }).split(" ");
    tzAbbr = parts[parts.length - 1];
  }

  onMount(() => {
    updateTime();
    interval = setInterval(updateTime, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<style>
    .glitch {
      animation: glitch 2s infinite;
    }

    @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
    }
</style>

<div class="bg-blue-600 text-white px-4 md:px-10 min-h-screen flex flex-col">
    <header class="text-left mt-10 mb-5 flex justify-left bg-blue-600 text-white">
        <a class="text-2xl" style="font-family: 'Bitcount Single', monospace;" href="/">niiccoo2.xyz</a>
    </header>
    <div class="flex-1">
        <h1 class="text-center text-5xl mt-10 glitch" style="font-family: 'Bitcount Single', monospace;">Hello, I'm Nico!</h1>
        <br>
        <br>
        <h3 class="text-center text-xl">Hobbies:</h3>
        <p class = "text-center">Violin</p>
        <p class = "text-center">Radio</p>
        <p class = "text-center">Biking</p>
        <a class="block text-center mx-auto underline" href="/photos">Photography</a>
        <br>
        <h3 class="text-center text-xl">Projects:</h3>
        <a class="block text-center mx-auto underline" href="/we-the-people-unite">We the People Unite</a>
        <a class="block text-center mx-auto underline" href="https://github.com/niiccoo2/EINK-Phone">E-Ink Phone</a>
        <br>
        <!-- DISCORD THING IS BELOW -->
        <!-- <a href="https://discord.com/users/777553246213373972" target="_blank" class="block mx-auto text-center underline" rel="noopener">
            <img src="https://lanyard.cnrad.dev/api/777553246213373972?bg=155dfc" alt="Discord Presence" class="mx-auto">
        </a>
        <br> -->
        <div class="text-center text-lg mb-4">
          Local Time: <span class="font-mono">{time} {tzAbbr}</span>
        </div>
        <!-- <br> -->
        <div class="flex justify-center p-8 gap-x-8">
            <button class="bg-white text-blue-600 font-bold p-4 rounded hover:scale-105">
                <a href="https://github.com/niiccoo2/">Github</a>
            </button>
            <button class="bg-white text-blue-600 font-bold p-4 rounded hover:scale-105">
                <a href="https://www.qrz.com/db/KC1VPU">QRZ</a>
            </button>
        </div>
    </div>
    <footer class="text-center p-10 flex justify-center bg-blue-600 text-white">
        Made with <span class="hover:animate-bounce">❤️</span> by Nico
    </footer>
</div>
