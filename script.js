const commands = [
    "sudo nmap -sS -sV -p- 161.148.164.31",
    "python3 slowloris.py 161.148.164.31 -p 80",
    "msfconsole",
    "[*] Initializing...",
    "[*] Loading modules...",
    "[*] Starting Metasploit Framework console...",
    "hydra -l admin -P passwords.txt 161.148.164.31 ssh",
    "ncat -lvp 4444",
    'sqlmap -u "http://161.148.164.31/vuln.php?id=1" -T CPFS --dump'
  ];

  const typewriter = document.getElementById('typewriter');
  let commandIndex = 0;
  let charIndex = 0;

  function type() {
    const currentCommand = commands[commandIndex];
    typewriter.textContent = currentCommand.substring(0, charIndex++);
    if (charIndex > currentCommand.length) {
      charIndex = 0;
      commandIndex = (commandIndex + 1) % commands.length;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  }

  type();

  function redirectToInstagram(url) {
    window.open(url, '_blank');
  }