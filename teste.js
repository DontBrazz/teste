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

    setTimeout(() => {
        loader.remove();
    }, 2000);

    // Função para detectar cores claras
    function isLightColor(color) {
        return [
            "rgb(255, 255, 255)", "#ffffff", "#fff", "white",
            "rgb(250, 250, 250)", "#fafafa",
            "rgb(245, 245, 245)", "#f5f5f5",
            "rgb(240, 240, 240)", "#f0f0f0",
            "rgb(235, 235, 235)", "#ebebeb",
            "rgb(230, 230, 230)", "#e6e6e6",
            "rgb(224, 224, 224)", "#e0e0e0",
            "rgb(217, 224, 230)", "#d9e0e6",
            "rgb(211, 211, 211)", "#d3d3d3", "lightgray",
            "rgb(192, 192, 192)", "#c0c0c0", "silver",
            "rgba(255, 255, 255, 0.5)", 
            "rgba(255, 255, 255, 0.7)", 
            "rgba(255, 255, 255, 0.9)", 
            "hsla(0, 0%, 100%, 0.7)", 
            "transparent"
        ].includes(color);
    }

    // Função para escurecer a cor
    function darkenColor(color) {
        if (["rgba(255, 255, 255, 0.5)"].includes(color)) return "rgba(0, 0, 0, 0.8)";
        if (["rgba(255, 255, 255, 0.7)", "hsla(0, 0%, 100%, 0.7)"].includes(color)) return "rgba(34, 34, 34, 0.9)";
        if (["#e0e0e0", "rgb(224, 224, 224)"].includes(color)) return "#444444";
        if (["#d9e0e6", "rgb(217, 224, 230)"].includes(color)) return "#3a3f45";
        if (["#d3d3d3", "rgb(211, 211, 211)", "lightgray"].includes(color)) return "#383838";
        if (["#c0c0c0", "rgb(192, 192, 192)", "silver"].includes(color)) return "#2e2e2e";
        if (color === "transparent") return "#222222";
        return "#222222";
    }

    // Função para forçar o modo escuro em um elemento
    function forceDarkMode(el) {
        let style = getComputedStyle(el);
        if (isLightColor(style.backgroundColor)) {
            el.style.setProperty("background-color", darkenColor(style.backgroundColor), "important");
        }
        if (isLightColor(style.color)) {
            el.style.setProperty("color", darkenColor(style.color), "important");
        }
        if (isLightColor(style.borderColor)) {
            el.style.setProperty("border-color", darkenColor(style.borderColor), "important");
        }
    }

    // Função para aplicar o modo escuro em todos os elementos
    function applyDarkMode() {
        document.querySelectorAll("*").forEach(el => forceDarkMode(el));
        console.log("🌙 Modo escuro ultra-forçado ativado!");
    }

    // Aplicar o modo escuro ao carregar
    applyDarkMode();

    // Reaplicar o modo escuro a cada 2 segundos
    setInterval(applyDarkMode, 2000); // A cada 2 segundos

})();
