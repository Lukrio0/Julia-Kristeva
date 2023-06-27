const img = document.getElementById("imagem");
let real = 0;
const slide1=document.getElementById("slide1");
const slide2=document.getElementById("slide2");

slide2.addEventListener("click", function(){
     if (real===0){
        img.src="img1.jpg";
        real=1;
    }else if (real===1){
        img.src="img2.jpg";
        real=2;
    }else if (real===2){
        img.src="img3.jpg";
        real=3;
    }else if (real===3){
        img.src="img4.jpg";
        real=0;
    }
})
slide1.addEventListener("click", function(){
    if (real===0){
       img.src="img4.jpg";
       real=1;
   }else if (real===1){
       img.src="img3.jpg";
       real=2;
   }else if (real===2){
       img.src="img2.jpg";
       real=3;
   }else if (real===3){
       img.src="img1.jpg";
       real=0;
   }
})
var result = 0;
var paragrafo = document.createElement("p");
const check = paragrafo.textContent="";
const txt1 ="Julia Kristeva nasceu em 24 de junho de 1941, em Sófia, na Bulgária. Ela cresceu em uma família de intelectuais e teve uma infância marcada por um ambiente culturalmente estimulante. Kristeva estudou línguas clássicas e literatura francesa na Universidade de Sófia, onde obteve seu diploma em 1960.<br><br>Após concluir seus estudos na Bulgária, Kristeva se mudou para Paris, França, em 1965, onde se tornou cidadã naturalizada. Lá, ela iniciou sua carreira acadêmica e intelectual, tornando-se uma figura proeminente na cena intelectual francesa. Ela obteve um doutorado em linguística na Universidade Paris Diderot em 1973, com uma tese sobre a obra de Gustave Flaubert.<br><br>Kristeva é conhecida por sua atuação em diversas áreas, incluindo a teoria literária, a filosofia, a psicanálise e o feminismo. Ela se tornou uma das principais teóricas do estruturalismo e do pós-estruturalismo francês, influenciada por pensadores como Jacques Lacan e Roland Barthes.<br><br>Uma das contribuições mais importantes de Kristeva para a teoria literária e a crítica cultural é o desenvolvimento do conceito de semiótica, que ela explora em sua obra Revolution in Poetic Language (1974). Essa obra introduz uma abordagem interdisciplinar que combina a linguística, a psicanálise e a semiologia para analisar a natureza do discurso poético.<br><br>Além disso, Kristeva também explorou questões relacionadas à identidade, ao feminismo e à psicanálise em suas obras. Ela abordou temas como a abjeção, a alteridade, a intertextualidade e o papel do corpo e da linguagem na construção do sujeito.<br><br>Ao longo de sua carreira, Julia Kristeva publicou numerosos livros, artigos e ensaios que exerceram grande influência nas áreas de estudos literários, teoria cultural e crítica social. Sua abordagem teórica inovadora e seu estilo de escrita complexo e interdisciplinar fizeram dela uma das intelectuais mais destacadas do século XX.";
const txt2 ="Os pensamentos de Julia Kristeva continuam a exercer uma influência significativa na atualidade em várias áreas, incluindo a teoria literária, a filosofia, a psicanálise e os estudos culturais. Aqui estão algumas das influências dos pensamentos de Julia Kristeva na atualidade:<br><br>1. Teoria Feminista: Kristeva desempenhou um papel importante no desenvolvimento da teoria feminista. Sua abordagem interdisciplinar, que incorpora psicanálise, linguística e estudos culturais, trouxe novas perspectivas sobre questões de gênero, identidade e subjetividade. Seu conceito de abjeção e sua análise das dinâmicas do patriarcado continuam a ser discutidos e aplicados na teoria feminista contemporânea.<br><br>2. Crítica Cultural: Os conceitos e ideias de Kristeva têm sido relevantes para a crítica cultural atual. Sua ênfase na intertextualidade, na linguagem e na subjetividade influenciaram a análise de textos literários, filmes, arte e outros produtos culturais. Sua noção de estranhamento e a importância da diferença na construção do significado continuam a ser debatidas e exploradas pelos estudiosos.<br><br>3. Estudos Psicanalíticos: Julia Kristeva é uma importante figura nos estudos psicanalíticos contemporâneos. Suas contribuições para a teoria psicanalítica, como a introdução do conceito de semiótica e suas reflexões sobre a linguagem e o inconsciente, têm sido influentes na compreensão da mente humana e dos processos psíquicos.<br><br>4. Estudos de Gênero e Sexualidade: Os pensamentos de Kristeva também tiveram impacto nos estudos de gênero e sexualidade. Sua análise dos processos de identificação, o papel da linguagem e a relação entre a identidade e o Outro têm sido relevantes para compreender questões de gênero, sexualidade e diversidade.<br><br>5. Política e Filosofia: A abordagem filosófica de Kristeva, que combina psicanálise, linguística e filosofia, tem contribuído para os debates contemporâneos sobre política, ética e subjetividade. Seu trabalho sobre a noção de estrangeirismo e a importância do diálogo intercultural tem sido aplicado nas discussões sobre multiculturalismo, migração e identidade política.<br><br>Essas são apenas algumas das influências dos pensamentos de Julia Kristeva na atualidade. Sua abordagem interdisciplinar, sua análise profunda da linguagem e da subjetividade, e seu engajamento crítico com questões sociais e culturais continuam a estimular novos debates e pesquisas em diversas áreas do conhecimento.";
const txt3 ="Aqui estão algumas curiosidades sobre Julia Kristeva:<br><br>1. Multitalentos: Além de ser uma teórica renomada, Julia Kristeva também é uma escritora prolífica. Ela publicou várias obras de ficção, incluindo romances, peças de teatro e poesia. Sua escrita literária muitas vezes aborda temas psicológicos e existenciais.<br><br>2. Origem Búlgara: Julia Kristeva nasceu em Sófia, na Bulgária, e teve uma infância e juventude influenciadas pela cultura búlgara. Ela estudou línguas clássicas e literatura francesa na Universidade de Sófia antes de se mudar para Paris.<br><br>3. Membro da Tel Quel: Durante sua estadia em Paris, Julia Kristeva se tornou membro do influente grupo intelectual e revista literária Tel Quel. O grupo era conhecido por seu engajamento com a teoria literária, o estruturalismo e o pós-estruturalismo.<br><br>4. Formação em Linguística: Kristeva obteve um doutorado em linguística na Universidade Paris Diderot, onde defendeu uma tese sobre a obra do escritor francês Gustave Flaubert. Sua formação em linguística influenciou sua abordagem interdisciplinar e sua análise da linguagem em suas obras teóricas.<br><br>5. Psicanálise Lacaniana: Julia Kristeva foi influenciada pelas ideias do psicanalista francês Jacques Lacan. Ela participou de seminários de Lacan e se envolveu ativamente no campo da psicanálise, trazendo suas contribuições teóricas e explorando a interseção entre a linguagem, a psicanálise e a cultura.<br><br>6. Vasta Obra Publicada: Ao longo de sua carreira, Julia Kristeva publicou mais de 30 livros, abrangendo uma ampla gama de temas, desde teoria literária e psicanálise até feminismo e política. Suas obras são conhecidas por sua profundidade teórica, sua análise crítica e sua escrita complexa.<br><br>7. Reconhecimento Internacional: Kristeva recebeu inúmeros prêmios e honrarias ao longo de sua carreira, incluindo o prestigioso Prêmio Holberg em 2004, que reconhece contribuições excepcionais nas áreas de artes, humanidades, ciências sociais, direito e teologia.<br><br>Essas curiosidades ajudam a destacar a diversidade e a amplitude dos interesses e realizações de Julia Kristeva em sua carreira intelectual e criativa. Sua influência e contribuições continuam a ser valorizadas no campo da teoria e crítica cultural.";

document.getElementById("historia").onclick=function(){
    if (paragrafo.textContent===check){
        paragrafo.innerHTML=txt1;
        var container = document.getElementById("textbtn");
        container.appendChild(paragrafo);
        result=1;
    }else if(paragrafo.innerHTML===txt1){
        paragrafo.textContent="";
    }else{
        paragrafo.innerHTML=txt1; }
}
document.getElementById("atualidade").onclick=function(){
    if (paragrafo.textContent===check){
        paragrafo.innerHTML=txt2;
        var container = document.getElementById("textbtn");
        container.appendChild(paragrafo);
        result=1;
    }else if(paragrafo.innerHTML===txt2){
        paragrafo.textContent="";
    }else{
        paragrafo.innerHTML=txt2; }
}
document.getElementById("curiosidades").onclick=function(){
    if (paragrafo.textContent===check){
        paragrafo.innerHTML=txt3;
        var container = document.getElementById("textbtn");
        container.appendChild(paragrafo);
        result=1;
    }
    else if(paragrafo.innerHTML===txt3){
        paragrafo.textContent="";
    }else{
        paragrafo.innerHTML=txt3; }
}


document.getElementById("setinha").onclick=function(){
    window.scrollTo(0,750);}


