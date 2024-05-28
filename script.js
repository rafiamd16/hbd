document.getElementById("open-letter").addEventListener("click", function () {
  const yourName = document
    .getElementById("your-name")
    .value.trim()
    .toLowerCase();
  const recipientName = document
    .getElementById("recipient-name")
    .value.trim()
    .toLowerCase();

  if (yourName !== "rafi ahmad" || recipientName !== "sandia melani") {
    alert("Nama Pembuat atau Nama Penerima Salah!!! 😡😡😡");
    return;
  } else if (yourName == "" || recipientName == "") {
    alert("Jangan kosongin kocak!!");
    return;
  }

  document.getElementById("recipient-span").innerText = recipientName;
  document.getElementById("your-span").innerText = yourName;

  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("letter").classList.add("fade-in");

  document.getElementById("birthday-song").play();

  launchConfetti();

  const balloons = document.querySelectorAll(".balloon");
  balloons.forEach((balloon) => {
    balloon.addEventListener("click", () => {
      balloon.style.animation = "floatUp 2s forwards";
    });
  });
});

const balloonContainer = document.getElementById("balloons");
for (let i = 0; i < 10; i++) {
  const balloon = document.createElement("div");
  balloon.classList.add(
    "balloon",
    "bg-red-400",
    "rounded-full",
    "h-16",
    "w-16",
    "mx-2",
    "mt-6",
    "cursor-pointer"
  );
  balloonContainer.appendChild(balloon);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti", "w-2", "h-2", "bg-pink-500", "absolute");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
