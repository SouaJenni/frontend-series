import React from "react";
import { Button } from "@blueprintjs/core";

const BotaoCadastrar = () => {
    const handleClick = () => {
        alert("Botão clicado!");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <Button intent="primary" text="Cadastrar" onClick={handleClick} />
        </div>
    );
};

export default BotaoCadastrar;
