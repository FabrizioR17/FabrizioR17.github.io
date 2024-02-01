let noButtonClickCount = 0;

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "El no es solo para aparentar";
    document.getElementById("name").style.display = "none";

    noButtonClickCount++;

    if (noButtonClickCount === 4) {
      document.getElementById("no-message").style.display = "block";
    }

    if (noButtonClickCount === 5) {
      document.getElementById("no-message").style.display = "none";
    }

    if (noButtonClickCount === 8) {
      // Mostrar el cuadro de diálogo de confirmación con opciones "Sí" y "No"
      const confirmResponse = confirm("¿Te rindes?");
      if (confirmResponse) {
        // Si el usuario elige "Sí", realiza la acción correspondiente a "Yes"
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "YEEEH SAMAS EL 14😘😘";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        document.getElementById("yesButton").remove();
      } else {
        // Si el usuario elige "No", continúa generando el botón "No" en lugares aleatorios
      }
    }

    if (noButtonClickCount === 9) {
      document.getElementById("no-message").style.display = "none";
    }
  } else if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YEEEH SAMAS EL 14😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    document.getElementById("yesButton").remove();
  }
}



  // if (response === "No") {
  //   const noButton = document.getElementById("no-button");
  //   const container = document.querySelector(".container");
  //   const maxWidth = window.innerWidth - noButton.offsetWidth;
  //   const maxHeight = window.innerHeight - noButton.offsetHeight;

  //   // Set button position to absolute
  //   noButton.style.position = "absolute";

  //   // Change image source to "gun.gif"
  //   document.getElementsByClassName("image")[0].src = "images/gun.gif";

  //   // Generate random coordinates within the visible container
  //   const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  //   const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

  //   // Apply new coordinates to the button
  //   noButton.style.left = randomX + "px";
  //   noButton.style.top = randomY + "px";

  //   // Update text content and hide name message
  //   document.getElementById("question").textContent =
  //     "El no es solo para aparentar";
  //   document.getElementById("name").style.display = "none";
    
  //   // Optional: You can also add a timeout to reset the position after a few seconds
  // }

  // if (response === "Yes") {
  //   // Remove name message and no button
  //   document.getElementById("name").remove();
  //   document.getElementById("no-button").remove();

  //   // Update text content, show message, and change image source to "dance.gif"
  //   const yesMessage = document.getElementById("question");
  //   yesMessage.textContent = "YEEEH SAMAS EL 14😘😘";
  //   yesMessage.style.display = "block";
  //   yesMessage.style.fontStyle = "normal";
  //   document.getElementsByClassName("image")[0].src = "images/dance.gif";

  //   // Remove yes button
  //   document.getElementById("yesButton").remove();
  // }

