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
    let menu = document.createElement("div");
    menu.innerHTML = `
        <div id="menu" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            height: 100px;
            background-color: red;
            color: white;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            z-index: 10000;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        ">
            <div id="title" style="padding: 10px; cursor: pointer;">Redação Menu</div>
            <div id="options" style="display: none; background-color: #555; color: white; padding: 10px; border-radius: 5px; margin-top: 10px;">
                <a href="#" style="display: block; padding: 5px 0; text-decoration: none; color: white;">Opção 1</a>
                <a href="#" style="display: block; padding: 5px 0; text-decoration: none; color: white;">Opção 2</a>
                <a href="#" style="display: block; padding: 5px 0; text-decoration: none; color: white;">Opção 3</a>
            </div>
        </div>
    `;
    document.body.appendChild(menu);

    // Função para alternar a visibilidade do menu
    let title = document.getElementById("title");
    let options = document.getElementById("options");

    title.addEventListener("click", () => {
        options.style.display = options.style.display === "block" ? "none" : "block";
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
