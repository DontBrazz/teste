(function() {
    // Criar elemento de carregamento
    let loader = document.createElement("div");
    loader.innerHTML = `
        <div id="darkmode-loader" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            font-size: 16px;
            text-align: center;
            border-radius: 10px;
            border: 3px solid white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        ">
            <div style="font-size: 30px;">🌙</div>
            <div style="margin-top: 10px;">Carregando...</div>
        </div>
    `;
    document.body.appendChild(loader);

    // Remover o carregamento após 2 segundos
    setTimeout(() => {
        document.getElementById("darkmode-loader").remove();
    }, 2000);

    // Criar o menu interativo
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.style.position = "fixed";
    menu.style.top = "50%"; // Centraliza o menu verticalmente
    menu.style.left = "50%"; // Centraliza o menu horizontalmente
    menu.style.transform = "translate(-50%, -50%)"; // Ajuste para centralização perfeita
    menu.style.width = "250px";
    menu.style.height = "100px";
    menu.style.backgroundColor = "red"; // Cor vermelha
    menu.style.color = "white";
    menu.style.textAlign = "center";
    menu.style.borderRadius = "5px";
    menu.style.cursor = "pointer";
    menu.style.zIndex = 10000; // Aumentando a prioridade do menu
    menu.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.justifyContent = "center";
    menu.style.alignItems = "center";

    const title = document.createElement("div");
    title.className = "title";
    title.style.padding = "10px";
    title.style.cursor = "pointer";
    title.textContent = "Redação Menu"; // Título do menu

    const options = document.createElement("div");
    options.className = "options";
    options.style.display = "none";
    options.style.backgroundColor = "#555";
    options.style.color = "white";
    options.style.padding = "10px";
    options.style.borderRadius = "5px";
    options.style.marginTop = "10px";

    const option1 = document.createElement("a");
    option1.href = "#";
    option1.textContent = "Opção 1";
    option1.style.display = "block";
    option1.style.padding = "5px 0";
    option1.style.textDecoration = "none";
    option1.style.color = "white";
    
    const option2 = document.createElement("a");
    option2.href = "#";
    option2.textContent = "Opção 2";
    option2.style.display = "block";
    option2.style.padding = "5px 0";
    option2.style.textDecoration = "none";
    option2.style.color = "white";
    
    const option3 = document.createElement("a");
    option3.href = "#";
    option3.textContent = "Opção 3";
    option3.style.display = "block";
    option3.style.padding = "5px 0";
    option3.style.textDecoration = "none";
    option3.style.color = "white";

    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);

    menu.appendChild(title);
    menu.appendChild(options);
    document.body.appendChild(menu);

    // Função para alternar a visibilidade do menu
    title.addEventListener("click", () => {
        const isMenuOpen = options.style.display === "block";
        options.style.display = isMenuOpen ? "none" : "block";
    });

    // Função para permitir o arraste do menu
    let isDragging = false;
    let offsetX, offsetY;

    menu.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - menu.offsetLeft;
        offsetY = e.clientY - menu.offsetTop;
        menu.style.cursor = "move";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            menu.style.left = `${e.clientX - offsetX}px`;
            menu.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        menu.style.cursor = "pointer";
    });
})();
