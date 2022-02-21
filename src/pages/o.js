import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OPage = ({ data }) => {

  return (
    <Layout>
      <Seo title="O mnie" />

      <p><strong>Małgorzata Urlich-Kornacka</strong> – przewodnik miejski po Wrocławiu, pilot po Dolnym Śląsku i Niemczech (Drezno, Saksonia, Berlin oraz Poczdam). Oprowadzam w języku polskim i niemieckim</p>
      <p>Dodatkowy zakres uprawnień: przewodnik po Centrum Historii Zajezdnia Wrocław oraz Centrum Wiedzy o Wodzie Hydropolis</p>
      <p>Wykształcenie: wyższe filologiczne, filologia germańska oraz filologia słowiańska</p>

      <ul className="listWithSquares bcard">
        <li>telefon: +48 607 239 776</li>
        <li>Whatsapp: tak</li>
        <li>www: www.viawroclaw.com</li>
        <li>e-mail: malgorzata.wroclove@gmail.com, m.urlich@interia.pl</li>
      </ul>
      <p>
        Własna działalność:<br />
        Via Wrocław – Małgorzata Urlich-Kornacka, ul. Budziszyńska 27a/26, 54-434 Wrocław, NIP: 616-139-17-82
      </p>

      <h3>O mnie</h3>
      <p>
        Jestem typem człowieka, który nie lubi stać w miejscu. Im więcej się wokół mnie dzieje, tym bardziej czuję się w swoim żywiole. Dzielę życie pomiędzy trzy wielkie pasje: przewodnictwo, język niemiecki oraz teatr (amatorski). Bardzo często udaje mi się te pasje połączyć – pracowałam przez długi czas jako nauczyciel języka niemieckiego oraz animator językowy w ogólnopolskim projekcie Deutsch-Wagen-Tour. Wsiadałam z moją magiczną walizką do kolorowego samochodu i jeździłam po Polsce, prowadząc zajęcia zachęcające do nauki języka. Nadal bardzo lubię pracę z młodzieżą i chętnie prowadzę animacje oraz wycieczki dla grup z wymiany polsko-niemieckiej. Kontakt z językiem jest dla mnie bardzo ważny. Regularnie piszę artykuły do czasopisma „Schlesien heute” oraz na bloga silesia-news.de, promując Wrocław i region dolnośląski wśród czytelników niemieckich.
      </p>
      <p>
        Lubię prowadzić spotkania ze znanymi wrocławianami, organizować eventy i odkrywać nieznane wątki dotyczące dawnej historii Wrocławia. Teksty pisane gotykiem, stare gazety, pocztówki, które wysyłali do siebie ludzie sto lat temu – to wszystko ma w sobie niepowtarzalną magię, która wciąga i nie pozwala się oderwać. Stąd być może wzięło się moje zamiłowanie do wrocławskich retrokryminałów Nadii Szagdaj i Marka Krajewskiego. Z okazji 20. rocznicy twórczości pisarza zainicjowałam wykonanie i odsłonięcie przy Hali Stulecia krasnala „Ebiego”, który zachęca do czytelnictwa i poznawania wielokulturowego dziedzictwa naszego miasta. Uwielbiam niestandardowe oprowadzania lub trasy tematyczne: filmowe, muzyczne, literackie, architektoniczne.
      </p>
      <p>
        Więc jeśli lubisz pasjonatów i szukasz czegoś specjalnego dla swojej grupy, zapraszam!
      </p>

      <GatsbyImage image={getImage(data.wycieczka.childImageSharp.gatsbyImageData)} alt="wycieczka" />

    </Layout>
  )
}

export default OPage

export const publikacjeQuery = graphql`
  query ImagesOMnie {
        wycieczka: file(
      relativePath: {eq: "wycieczka1.jpg" }
    ) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
  `