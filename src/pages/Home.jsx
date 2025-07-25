import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Botao} from '../components/Botao.jsx';
import {Card, H3, Tooltip} from '@blueprintjs/core';
import {Estrelas} from '../components/Estrelas.jsx';

// TODO: Remover isto:
const series = [
    {titulo: 'Breaking Bad', ano: 2008, notaImdb: 4, notaUsuario: 3, capa: 'https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg'},
    {titulo: 'Harry Potter', ano: 1997, notaImdb: 3.8, notaUsuario: 5, capa: 'https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg'},
    {titulo: 'Sherlock', ano: 2010, notaImdb: 2, notaUsuario: 4, capa: 'https://a-static.mlcdn.com.br/800x560/livro-sherlock-holmes-um-estudo-em-vermelho-capa-dura/cliquebooks/468736-1/c069fb2b806dea9b471a02d244ed7f69.jpeg'},
    {titulo: 'Doctor Who', ano: 2003, notaImdb: 1, notaUsuario: 1, capa: 'https://doctorwhobrasil.com.br/wp-content/uploads/2014/02/Doctor-Who-Tenth-Doctor-1-Capa-Doctor-Who-Brasil-675x1024.jpg'},
    {titulo: 'The Good Place', ano: 2019, notaImdb: 3, notaUsuario: 3, capa: 'https://cdn.fstatic.com/media/movies/covers/2018/05/IMG_0861.PNG'},
    {titulo: 'Squid Game', ano: 2020, notaImdb: 5, notaUsuario: 2, capa: 'https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzExOGVjc3hPM0wuX0FDX1NMMTIwMF8uanBn.jpg'},
    {titulo: 'Coraline', ano: 1999, notaImdb: 1.4, notaUsuario: 5, capa: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/79/16/19961587.jpg'},
    {titulo: 'Se Beber não Case', ano: 2015, notaImdb: 4, notaUsuario: 3, capa: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/37/19874003.jpg'},
    {titulo: 'As Branquelas', ano: 2002, notaImdb: 2.1, notaUsuario: 1, capa: 'https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg'},
    {titulo: 'Friends', ano: 1998, notaImdb: 3, notaUsuario: 3, capa: 'https://upload.wikimedia.org/wikipedia/pt/a/a0/Friends_1%C2%AA_temporada.jpg'},
    {titulo: 'The BigBang Theory', ano: 2003, notaImdb: 1, notaUsuario: 2, capa: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Big-bang-theory_Temporada_12_poster.jpg'},
];
export function Home() {
    const navigate = useNavigate();

    const handleCadastrarClick = () => {
        navigate('/cadastrar');
    };

    return (
        <div className="bp5-dark">
            {series.map((serie, index) => (
                <Card key={index}>
                    <img src={serie.capa} alt={serie.titulo} style={{width:'200px'}}/>
                    <H3>{serie.titulo}</H3>
                    <p>{serie.ano}</p>
                    <Tooltip
                        content={`Nota IMDb: ${serie.notaImdb}`}
                    >
                        <Estrelas active={serie.notaImdb}/>
                    </Tooltip>
                    <Tooltip
                        content={`Sua nota: ${serie.notaUsuario}`}
                    >
                        <Estrelas active={serie.notaUsuario}/>
                    </Tooltip>
                </Card>
            ))}
            <Botao texto='Cadastrar' title='Cadastrar' onClick={handleCadastrarClick} intent='primary'/>
        </div>
    );
}



