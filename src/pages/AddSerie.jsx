import React, {useState} from "react";
import {
    InputGroup,
    FormGroup,
    TextArea,
    Button,
    MenuItem,
    Icon,
} from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

// Lista de exemplo para o autocomplete
const titleOptions = ["Bug", "Sugestão", "Elogio", "Outro"];

const renderItem = (item, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) return null;
    return (
        <MenuItem
            active={modifiers.active}
            key={item}
            text={item}
            onClick={handleClick}
        />
    );
};

const handleClick = () => {
    alert("Botão clicado!");
}

const FormDeCadastro = () => {
    const [rating, setRating] = useState(0);

    return (
        <div style={{ padding: "2rem", maxWidth: "600px" }}>
            <FormGroup label="Título" labelFor="title-input">
                <Select
                    items={titleOptions}
                    itemRenderer={renderItem}
                    onItemSelect={() => {}}
                    noResults={<MenuItem disabled text="Nenhum resultado" />}
                    filterable
                >
                    <InputGroup id="title-input" placeholder="Selecione ou digite..." />
                </Select>
            </FormGroup>

            <FormGroup label="Comentário" labelFor="comment-textarea">
                <TextArea
                    id="comment-textarea"
                    fill
                    placeholder="Deixe um comentário..."
                />
            </FormGroup>

            <FormGroup label="Avaliação">
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                            key={star}
                            icon={
                                <Icon
                                    icon="star"
                                    color={star <= rating ? "#FFC940" : "#CED9E0"}
                                />
                            }
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>
            </FormGroup>

            <Button intent="primary" text="Salvar" onClick={handleClick} />
        </div>
    );
};

export default FormDeCadastro;
